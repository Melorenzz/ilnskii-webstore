import Header from "./components/header/Header.tsx";
import Home from "./pages/Home.tsx";
import Footer from "./components/Footer.tsx";
import { Routes, Route } from "react-router-dom";
import Vacansies from "./pages/Vacansies.tsx";
import Catalog from "./pages/Catalog.tsx";

export default function App() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/vacancies" element={<Vacansies />} />
                    <Route path="/catalog" element={<Catalog />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}
