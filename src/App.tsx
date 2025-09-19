import Header from "./components/header/Header.tsx";
import Home from "./pages/Home.tsx";
import Footer from "./components/Footer.tsx";
import {Routes, Route, useLocation, Navigate} from "react-router-dom";
import Vacansies from "./pages/Vacansies.tsx";
import Catalog from "./pages/Catalog.tsx";
import Contacts from "./pages/Contacts.tsx";
import Profile from "./pages/Profile.tsx";
import NotFoundPage from "./pages/notFoundPage.tsx";
import Cart from "./pages/Cart.tsx";
import Checkout from "./pages/Checkout.tsx";


export default function App() {
    const location = useLocation();
    const disabledHeaderFooter = ['/404']
    const isVisibleHeaderFooter = !disabledHeaderFooter.includes(location.pathname)

    return (
        <div className="min-h-screen flex flex-col">
            {isVisibleHeaderFooter && (
                <Header />
            )}
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/vacancies" element={<Vacansies />} />
                    <Route path="/catalog" element={<Catalog />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/404" element={<NotFoundPage />} />
                    <Route path="*" element={<Navigate to="/404" replace />} />
                </Routes>
            </main>
            {isVisibleHeaderFooter && (
                <Footer />
            )}
        </div>
    );
}
