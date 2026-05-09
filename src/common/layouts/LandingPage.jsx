import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Features } from "../components/Features";
import { Footer } from "../components/Footer";
import { Testimonials } from "../components/Testimonials";
import { Outlet } from "react-router";

export function LandingPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <Hero />
            <Features />
            <Testimonials />
            <Footer />
            <Outlet />
        </div>
    );
}