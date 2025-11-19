"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();
    const links = [
        { href: "/", label: "home" },
        { href: "/about", label: "about" },
        { href: "/writing", label: "writing" },
    ];

    return (
        <header className="fixed inset-x-0 top-0 z-50 bg-white border-b border-white h-14 md:h-16">
            <nav aria-label="Primary" className="absolute top-4 left-4 md:top-6 md:left-8">
                <ul className="flex items-center gap-4 md:gap-5">
                    {links.map(({ href, label }) => {
                        const isActive = pathname === href;
                        return (
                            <li key={href}>
                                <Link
                                    href={href}
                                    aria-current={isActive ? 'page' : undefined}
                                    className={`text-sm md:text-base tracking-tight transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 rounded ${
                                        isActive
                                            ? "text-gray-900 font-medium"
                                            : "text-gray-700 hover:text-gray-900"
                                    }`}
                                >
                                    {label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </header>
    );
}