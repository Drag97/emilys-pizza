import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Emily's Pizza | Authentic Italian Pizzeria in NYC",
  description: "Family-owned Italian pizzeria since 1995. Enjoy authentic wood-fired pizzas, homemade pasta, Buffalo wings, and garlic knots. Open daily 11am-10pm.",
  keywords: "pizza, Italian restaurant, wood-fired pizza, Buffalo wings, garlic knots, NYC",
  openGraph: {
    title: "Emily's Pizza | Authentic Italian Pizzeria",
    description: "Family-owned Italian pizzeria since 1995",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-zinc-900 antialiased">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-zinc-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">E</span>
                </div>
                <span className="font-bold text-xl text-zinc-900">Emily&apos;s Pizza</span>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-8">
                <Link 
                  href="/" 
                  className="text-zinc-600 hover:text-primary transition-colors font-medium"
                >
                  Home
                </Link>
                <Link 
                  href="/menu" 
                  className="text-zinc-600 hover:text-primary transition-colors font-medium"
                >
                  Menu
                </Link>
                <Link 
                  href="/contact" 
                  className="text-zinc-600 hover:text-primary transition-colors font-medium"
                >
                  Contact
                </Link>
                <Link 
                  href="/contact" 
                  className="bg-primary text-white px-5 py-2 rounded-full font-medium hover:bg-primary-700 transition-colors"
                >
                  Order Now
                </Link>
              </nav>

              {/* Mobile Menu Button */}
              <details className="md:hidden">
                <summary className="list-none cursor-pointer p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </summary>
                <div className="absolute top-16 left-0 right-0 bg-white border-b border-zinc-200 p-4 flex flex-col gap-4 shadow-lg">
                  <Link href="/" className="text-zinc-600 hover:text-primary font-medium py-2">
                    Home
                  </Link>
                  <Link href="/menu" className="text-zinc-600 hover:text-primary font-medium py-2">
                    Menu
                  </Link>
                  <Link href="/contact" className="text-zinc-600 hover:text-primary font-medium py-2">
                    Contact
                  </Link>
                  <Link href="/contact" className="bg-primary text-white px-5 py-2 rounded-full font-medium text-center">
                    Order Now
                  </Link>
                </div>
              </details>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="bg-zinc-900 text-white py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Brand */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">E</span>
                  </div>
                  <span className="font-bold text-xl">Emily&apos;s Pizza</span>
                </div>
                <p className="text-zinc-400 text-sm">
                  Family-owned Italian pizzeria since 1995. Authentic wood-fired pizzas and homemade pasta.
                </p>
              </div>

              {/* Hours */}
              <div>
                <h3 className="font-semibold mb-4">Hours</h3>
                <p className="text-zinc-400 text-sm">Monday - Sunday</p>
                <p className="text-zinc-300">11:00 AM - 10:00 PM</p>
              </div>

              {/* Contact */}
              <div>
                <h3 className="font-semibold mb-4">Contact</h3>
                <p className="text-zinc-400 text-sm">123 Main Street</p>
                <p className="text-zinc-400 text-sm">New York, NY 10001</p>
                <p className="text-zinc-300 mt-2">(555) 123-4567</p>
              </div>
            </div>

            <div className="border-t border-zinc-800 mt-8 pt-8 text-center text-zinc-500 text-sm">
              © {new Date().getFullYear()} Emily&apos;s Pizza. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
