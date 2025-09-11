import Discounts from "../components/home/Discounts.tsx";
import MainLayout from "../ui/MainLayout.tsx";
import Advertising from "../components/home/Advertising.tsx";

const Home = () => {
    return (
            <MainLayout>
                <Advertising />
                <Discounts />
            </MainLayout>

    );
};

export default Home;