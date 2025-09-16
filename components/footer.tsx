import Link from "next/link";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <div className="flex flex-row gap-2 justify-center">
            <Link href="mailto:chent51605@gmail.com" target="_blank" rel="noopener noreferrer">
                <Mail />
            </Link>
            <Link href="https://github.com/tylerzchen" target="_blank" rel="noopener noreferrer">
                <Github />
            </Link>
            <Link href="https://www.linkedin.com/in/tyler-chen-43570b241/" target="_blank" rel="noopener noreferrer">
                <Linkedin />
            </Link>
            <Link href="https://x.com/tyzchen" target="_blank" rel="noopener noreferrer">
                <Twitter />
            </Link>
        </div>
    )
}