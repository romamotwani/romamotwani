import { ReactNode, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }: { children: ReactNode }) {
  // simple visitor tracking
  useEffect(() => {
    fetch("/api/track", { method: "POST" }).catch(() => {});
  }, []);

  return (
    <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow pt-16">{children}</div>
      <Footer />
    </main>
  );
}