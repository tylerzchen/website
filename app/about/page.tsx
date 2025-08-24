import Link from "next/link";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function About() {
    return (
        <div>
            <div className="text-center absolute top-12 left-1/2 transform -translate-x-1/2">
                <Header />
                <div className="text-center mt-16">
                    <p>about coming soon</p>
                </div>
            </div>
            <div className="text-center absolute bottom-12 left-1/2 transform -translate-x-1/2">
                <Footer />
            </div>
        </div>
    )
}