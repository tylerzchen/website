"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();
    const links = [
        { href: "/", label: "home" },
        { href: "/about", label: "about" },
        { href: "/essays", label: "essays" },
    ];

    return (
        <nav aria-label="Primary" className="flex justify-center">
            <ul className="flex items-center gap-6 md:gap-10">
                {links.map(({ href, label }) => {
                    const isActive = pathname === href;
                    return (
                        <li key={href}>
                            <Link
                                href={href}
                                className={`text-xl md:text-3xl transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 rounded-sm ${
                                    isActive
                                        ? "font-semibold text-gray-900 underline underline-offset-4"
                                        : "text-gray-900/80 hover:opacity-70 hover:underline hover:underline-offset-4"
                                }`}
                            >
                                {label}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}