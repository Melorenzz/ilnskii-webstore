import MainLayout from "../ui/MainLayout.tsx";
import {useState} from "react";
import PersonalData from "../components/profile/PersonalData.tsx";
import OrdersHistory from "../components/profile/OrderHistory.tsx";
import Favorites from "../components/profile/Favorites.tsx";

const Profile = () => {
    const [selected, setSelected] = useState<'personalData' | 'orderHistory' | 'favorites'>('personalData');
    const title = {
        personalData: 'личный кабинет',
        orderHistory: 'история заказов',
        favorites: 'избранное',
    }
    const components = {
        personalData: <PersonalData />,
        orderHistory: <OrdersHistory />,
        favorites: <Favorites />,
    }
    return (
        <MainLayout>
            <h1 className='uppercase text-3xl font-bold'>{title[selected]}</h1>
            <div className='flex items-center gap-5 mt-5 pb-5 border-b-3 border-[#E0E0E0]'>
                <button onClick={() => setSelected('personalData')} className={`font-semibold cursor-pointer ${selected === 'personalData' ? 'text-black' : 'text-black/50'}`}>Личные данные</button>
                <button onClick={() => setSelected('orderHistory')} className={`font-semibold cursor-pointer ${selected === 'orderHistory' ? 'text-black' : 'text-black/50'}`}>История заказов</button>
                <button onClick={() => setSelected('favorites')} className={`font-semibold cursor-pointer ${selected === 'favorites' ? 'text-black' : 'text-black/50'}`}>Избранное</button>
            </div>
            {components[selected]}
        </MainLayout>
    );
};

export default Profile;