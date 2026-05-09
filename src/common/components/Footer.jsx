export function Footer() {
    return (
        <footer className="bg-gray-800 text-white p-4 text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-4">
                <div className="mb-4">
                    <h1 className="text-2xl font-bold">Lingua Station</h1>

                </div>
                <div>
                    <h4 className="font-semibold mb-4">Company</h4>
                    <ul className="space-y-2">
                        <li>
                            <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">
                                Blog
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">
                                Careers
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">
                                Press Kit
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="mb-4">
                    <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
                    <p>Email: info@linguastation.com</p>
                </div>
            </div>
            <p>&copy; 2024 Lingua Station. All rights reserved.</p>
        </footer>
    );
}