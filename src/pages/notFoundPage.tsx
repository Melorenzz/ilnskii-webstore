import {Bars3Icon} from "@heroicons/react/16/solid";
import {Link, useNavigate} from "react-router-dom";
import {useEffect} from "react";

const NotFoundPage = () => {

    const navigate = useNavigate()


    useEffect(() => {
        navigate("/404")
    }, [])

    return (
        <div className='max-w-3xl w-fit min-h-screen flex flex-col justify-center mx-auto'>
            <h1 className='lowercase text-7xl text-[#BEBEBE] font-semibold'>ошибка</h1>
            <div className='flex items-center text-[240px] font-bold text-[#BEBEBE] -mt-20'>
                <span>4</span>
                <img src="/images/Donut_404.png" alt="donut"/>
                <span>4</span>
            </div>
            <p className='text-[#6B6B6B] leading-6 text-xl max-w-[640px] -mt-10'>
                Ой! Кажется что-то пошло не так. Страница, которую вы запрашиваете, не существует. Возможно она устарела, была удалена, или был введен неверный адрес в адресной строке.
            </p>
            <div className='mt-10 flex gap-5 items-center'>
                <Link to='/'

                    className='hidden lg:flex items-center gap-2 rounded-full px-5 h-[48px] text-[red] hover:bg-[red] hover:text-white transition border font-extrabold'>
                    Перейти на главную
                </Link>
                <Link to='/catalog'

                    className='bg-[#FF0000] hidden lg:flex items-center gap-2 rounded-full px-5 h-[48px] text-white font-extrabold'>
                        <Bars3Icon className='w-5'/>
                    Каталог
                </Link>
            </div>
        </div>
    );
};

export default NotFoundPage;