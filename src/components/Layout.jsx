import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div className="app-layout flex flex-col min-h-screen">
            <header>
                <Navbar />
            </header>
            <main className="flex-grow" style={{ position: 'relative' }}>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}