import Header from "./components/Header.tsx";
import Home from "./pages/Home.tsx";
import Footer from "./components/Footer.tsx";

export default function App() {
	return (
    <>
        <Header />
        <main>
            <Home />
        </main>
        <Footer />
    </>
	)
}