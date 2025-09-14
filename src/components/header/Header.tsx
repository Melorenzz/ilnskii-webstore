import MainLayout from "../../ui/MainLayout.tsx";
import {
    Bars3Icon,
    HeartIcon,
    MagnifyingGlassIcon,
    PaperAirplaneIcon,
    ShoppingCartIcon,
    UserIcon, XMarkIcon
} from "@heroicons/react/16/solid";
import YellowButton from "../../ui/YellowButton.tsx";
import CatalogModal from "./CatalogModal.tsx";
import {useState} from "react";
import {Link} from "react-router-dom";



const Header = () => {
    const [isOpenCatalog, setIsOpenCatalog] = useState<boolean>(false);

    return (
        <header className='mt-5 mb-10'>
            <MainLayout>
                <div className='flex items-center justify-between gap-2'>
                    <div className='flex items-center gap-5 '>
                        <Bars3Icon className='min-w-7 max-w-7 text-[#FF0000] inline lg:hidden' />
                        <Link to={'/'}>
                            <img src="/images/logo.svg" alt="logo"/>

                        </Link>

                    </div>
                    <div className='relative'>
                        <button
                            onClick={() => setIsOpenCatalog(!isOpenCatalog)}
                            className='bg-[#FF0000] hidden lg:flex items-center gap-2 rounded-full px-5 h-[48px] text-white font-extrabold'>
                            {isOpenCatalog ? (
                                <XMarkIcon className='w-5' />
                            ) : (
                                <Bars3Icon className='w-5'/>
                            )}
                            Каталог
                        </button>
                        {isOpenCatalog && (
                            <CatalogModal />
                        )}
                    </div>
                    <div
                        className='max-w-[317px] w-full border border-[#E1E1E1] rounded-lg p-2 h-[48px] hidden lg:flex items-center gap-1'>
                        <input placeholder='Начать поиск' className='w-full h-full' type="text"/>
                        <MagnifyingGlassIcon width={30} className='text-[#6B6B6B]'/>
                    </div>
                    <div className='xl:hidden flex gap-3'>
                        <div
                            className='px-4 rounded-xl h-[48px] bg-[#FFA900B2] flex flex-col items-center gap-1 justify-center text-white'>
                            <PaperAirplaneIcon width={16} className='transform -rotate-45'/>
                            <span className='text-sm'>МСК</span>
                        </div>
                        <div
                            className='px-4 rounded-xl h-[48px] bg-[#FFA900B2] flex flex-col items-center gap-1 justify-center text-white'>
                            <MagnifyingGlassIcon width={26} />

                        </div>
                    </div>
                    <div className=' min-w-[295px] xl:flex hidden h-[48px] rounded-lg overflow-hidden'>
                        <div
                            className='flex-1 w-full bg-[#FFA900B2] h-full flex flex-col items-center gap-1 justify-center text-white'>
                            <PaperAirplaneIcon width={16} className='transform -rotate-45'/>
                            <span className='text-sm'>МСК</span>
                        </div>

                        <div className='flex-3 bg-[#FFA900] h-full flex flex-col justify-center px-3 text-white'>
                            <span className='text-sm'>Выберите способ получения</span>
                            <span className='font-bold'>Доставка или самовывоз</span>
                        </div>
                    </div>
                    <button
                        className='min-w-[48px] hidden lg:flex h-[48px] rounded-xl p-2 border border-[#E1E1E1] hover:border-[#FFA900] hover:bg-[#FFF8EB] transition cursor-pointer'>
                        <HeartIcon className='text-[#E1E1E1] hover:text-[#FFA900] transition'/></button>
                    <button
                        className='min-w-[48px] hidden lg:flex h-[48px] rounded-xl p-2 border border-[#E1E1E1] hover:border-[#FFA900] hover:bg-[#FFF8EB] transition cursor-pointer'>
                        <UserIcon className='text-[#E1E1E1] hover:text-[#FFA900] transition'/></button>
                    <button
                        className='bg-[#FF0000] rounded-xl px-5 hidden lg:flex items-center gap-1 h-[48px] text-white font-extrabold'>
                        <ShoppingCartIcon className='w-5'/>
                        Корзина
                    </button>

                </div>
                <nav className='flex mt-5 overflow-x-auto'>
                    <YellowButton text='🍏 Супермаркет' />


                </nav>
            </MainLayout>
        </header>
    );
};

export default Header;