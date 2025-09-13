import Discounts from "../components/home/Discounts.tsx";
import MainLayout from "../ui/MainLayout.tsx";
import Advertising from "../components/home/Advertising.tsx";
import Supermarkets from "../components/home/Supermarkets.tsx";
import Sales from "../components/home/Sales.tsx";
import Promo from "../components/home/Promo.tsx";
import DeliveryPayment from "../components/home/DeliveryPayment.tsx";

const Home = () => {
    return (
            <MainLayout>
                <Advertising />
                <Discounts />
                <Supermarkets />
                <Sales />
                <DeliveryPayment />
                <Promo />
            </MainLayout>

    );
};

export default Home;