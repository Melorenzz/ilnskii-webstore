import MainLayout from "../ui/MainLayout.tsx";
import ProductCard from "../components/catalog/ProductCard.tsx";
import Sidebar from "../components/catalog/Sidebar.tsx";
import YellowButton from "../ui/YellowButton.tsx";
import {ChevronRightIcon} from "@heroicons/react/16/solid";

const Catalog = () => {



    return (
        <MainLayout>
            <div className='flex justify-between items-center'>
                <h1 className='font-semibold text-3xl'>Хлеб и выпечка</h1>
                <YellowButton text='По популярности' icon={<ChevronRightIcon className='w-5' />} />
            </div>
            <div className="grid grid-cols-4 gap-5 mt-5">
                <div className="">
                    <Sidebar />
                </div>
                <div className="grid grid-cols-3 gap-5 col-span-3 w-full">
                    <ProductCard />
                </div>
            </div>
        </MainLayout>
    );
};

export default Catalog;