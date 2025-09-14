import MainLayout from "../ui/MainLayout.tsx";
import ProductCard from "../components/catalog/ProductCard.tsx";
import Sidebar from "../components/catalog/Sidebar.tsx";

const Catalog = () => {
    return (
        <MainLayout>
            <h1 className='font-semibold text-3xl'>Хлеб и выпечка</h1>
            <div className="grid grid-cols-4 gap-5 mt-5">
                <div className="">
                    <Sidebar />
                </div>
                <div className="grid grid-cols-3 gap-5 col-span-3  w-full">
                    <ProductCard />
                </div>
            </div>
        </MainLayout>
    );
};

export default Catalog;