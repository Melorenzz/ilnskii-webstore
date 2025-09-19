import MainLayout from "../ui/MainLayout.tsx";
import OrderResult from "../components/cart/OrderResult.tsx";
import ProductCard from "../components/cart/ProductCard.tsx";
import Subtitle from "../components/home/Subtitle.tsx";

const Cart = () => {
    return (
        <MainLayout>

            <div className='grid grid-cols-3 gap-5 my-10'>
                <div className='col-span-2 flex flex-col gap-5 max-h-[600px] overflow-y-scroll '>
                    <div className="flex items-center justify-between">
                        <Subtitle subtitle='корзина' />
                        <button>очистить</button>
                    </div>
                    <ProductCard />
                </div>
                <OrderResult />
            </div>
        </MainLayout>
    );
};

export default Cart;