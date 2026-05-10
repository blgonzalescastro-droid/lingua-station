import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Features } from "../components/Features";
import { Footer } from "../components/Footer";
import { Testimonials } from "../components/Testimonials";

export function LandingPage() {
    return (
        <div className="min-h-screen flex flex-col bg-[#faf5ed]">
            <Header />
            <Hero />
            <Features />
            <Testimonials />
            <Footer />
        </div>
    );
}
