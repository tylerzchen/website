import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Essays() {
    return (
        <div>
            <Header />
            <div className="max-w-3xl mx-auto px-6 pt-24 md:pt-28">
                <p className="text-left">essays coming soon</p>
            </div>
            <div className="text-center absolute bottom-12 left-1/2 transform -translate-x-1/2">
                <Footer />
            </div>
        </div>
    )
}