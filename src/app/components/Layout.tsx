import Link from "next/link";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="font-sans antialiased text-gray-800">
      <header className="bg-gray-800 text-white py-4 text-center">
        <nav>
          <a href="index.html" className="mx-2 hover:text-gray-300">
            Home
          </a>
          <Link href="/blog" passHref>
            <p className="mx-2 hover:text-gray-300">Blog</p>
          </Link>
        </nav>
      </header>

      <main>{children}</main>

      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>© 2024 My Portfolio</p>
      </footer>
    </div>
  );
};

export default Layout;
