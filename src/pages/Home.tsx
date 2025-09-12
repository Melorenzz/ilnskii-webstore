import Discounts from "../components/home/Discounts.tsx";
import MainLayout from "../ui/MainLayout.tsx";
import Advertising from "../components/home/Advertising.tsx";
import Supermarkets from "../components/home/Supermarkets.tsx";

const Home = () => {
    return (
            <MainLayout>
                <Advertising />
                <Discounts />
                <Supermarkets />
            </MainLayout>

    );
};

export default Home;