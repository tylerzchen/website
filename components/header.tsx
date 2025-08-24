import Link from "next/link";

export default function Header() {
    return(
        <div className="flex flex-row gap-4 justify-center">
            <Link href="/">
                <h1 className="text-2xl md:text-4xl italic underline text-gray-900">home</h1>
            </Link>
            <Link href="/about">
                <h1 className="text-2xl md:text-4xl italic underline text-gray-900">about</h1>
        </Link>
            <Link href="/essays">
                <h1 className="text-2xl md:text-4xl italic underline text-gray-900">essays</h1>
            </Link>
        </div>
    )
}