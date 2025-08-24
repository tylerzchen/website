import Link from "next/link";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <div className="flex flex-row gap-2 justify-center">
            <Link href="mailto:chent51605@gmail.com">
                <Mail />
            </Link>
            <Link href="https://github.com/tylerzchen">
                <Github />
            </Link>
            <Link href="https://www.linkedin.com/in/tyler-chen-43570b241/">
                <Linkedin />
            </Link>
        </div>
    )
}