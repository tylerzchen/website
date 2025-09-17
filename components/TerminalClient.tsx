"use client";

import React from "react";
import { Terminal } from "@xterm/xterm";
import "@xterm/xterm/css/xterm.css";
// Optional addons are loaded dynamically inside useEffect to avoid build-time
// dependency on packages that may not be installed. We gracefully fall back if
// they are unavailable.

export const TerminalClient = () => {
    const containerRef = React.useRef<HTMLDivElement | null>(null);
    const fitAddonRef = React.useRef<{ fit?: () => void } | null>(null);

    React.useEffect(() => {
      if (!containerRef.current) return;

      const term = new Terminal({
        cursorBlink: true,
        convertEol: true,
        fontSize: 14,
        theme: {
          background: "#000000",
          foreground: "#E5E7EB",
          cursor: "#FFFFFF",
          selectionBackground: "#374151",
        },
      });

      (async () => {
        try {
          const [fitMod, linksMod, searchMod] = await Promise.all([
            import("@xterm/" + "addon-fit").catch(() => ({} as unknown)),
            import("@xterm/" + "addon-web-links").catch(() => ({} as unknown)),
            import("@xterm/" + "addon-search").catch(() => ({} as unknown)),
          ])

          const FitAddonCtor = (fitMod as { FitAddon?: new () => { fit(): void } }).FitAddon
          const WebLinksAddonCtor = (linksMod as { WebLinksAddon?: new () => unknown }).WebLinksAddon
          const SearchAddonCtor = (searchMod as { SearchAddon?: new () => unknown }).SearchAddon

          if (FitAddonCtor) {
            const fitAddon = new FitAddonCtor()
            fitAddonRef.current = fitAddon
            // @ts-expect-error xterm addon interface at runtime
            term.loadAddon(fitAddon)
          }

          if (WebLinksAddonCtor) {
            const linksAddon = new WebLinksAddonCtor()
            // @ts-expect-error xterm addon interface at runtime
            term.loadAddon(linksAddon)
          }

          if (SearchAddonCtor) {
            const searchAddon = new SearchAddonCtor()
            // @ts-expect-error xterm addon interface at runtime
            term.loadAddon(searchAddon)
          }
        } catch {
          // continue without addons
        }
      })()

      term.open(containerRef.current);
      if (fitAddonRef.current?.fit) {
        fitAddonRef.current.fit()
      }

      term.writeln("\u001b[1;37mWelcome to Tyler's website\u001b[0m");
      term.writeln("");
      term.writeln("Try typing, or click a link: https://tylerzchen.co");
      term.write("$ ");

      const handleResize = () => {
        if (fitAddonRef.current?.fit) fitAddonRef.current.fit()
      };
      window.addEventListener("resize", handleResize);

      const onData = term.onData((data) => {
        switch (data) {
          case "\r": {
            term.write("\r\n$ ");
            break;
          }
          case "\u007F": { // backspace
            // Move left one char and clear it if there's something before '$ '
            // For simplicity, do not allow deleting past the prompt
            // You can implement a buffer for real shell behavior
            term.write("\b \b");
            break;
          }
          default: {
            term.write(data);
          }
        }
      });

      const observer = new ResizeObserver(() => {
        if (fitAddonRef.current?.fit) fitAddonRef.current.fit()
      });
      observer.observe(containerRef.current);

      return () => {
        onData.dispose();
        window.removeEventListener("resize", handleResize);
        observer.disconnect();
        term.dispose();
      };
    }, []);
  
    return (
      <div
        ref={containerRef}
        className="h-64 w-full rounded border border-gray-300 shadow-sm overflow-hidden"
      />
    );
  };

