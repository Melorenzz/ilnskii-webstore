import {useState} from "react";
import {ChevronRightIcon} from "@heroicons/react/16/solid";

const CatalogModal = () => {
    const [selectedMenu, setSelectedMenu] = useState<string>('')

    const catalog = [
        {title: 'Акции', hasSubMenu: false},
        {title: 'Супермаркет',
            hasSubMenu: true,
            subMenu: [
                {name: 'Вода и напитки', link: ''},
                {name: 'Молоко, масло и яйца', link: ''},
                {name: 'Снэки и сухофрукты', link: ''},
                {name: 'Кофе, чай и сладости', link: ''},
                {name: 'Макароны и крупы', link: ''},
                {name: 'Хлеб и выпечка', link: ''},
            ]
        },
    ]

    return (
        <div className='p-5 max-h-[400px] min-w-[600px] z-5 rounded-xl shadow-xl bg-[white] absolute flex gap-5'>
            <div className='overflow-y-scroll flex-1'>
                <ul className='space-y-3'>
                    {catalog.map((item, index) => (
                        <li key={index}>
                            <button className='font-semibold flex justify-between px-3 w-full' onClick={() => setSelectedMenu(item.title)}>
                                {item.title}
                                <ChevronRightIcon className='w-5' />

                            </button>
                        </li>
                    ))}
                </ul>

            </div>
            <div className='overflow-y-scroll flex-1'>
                <ul className='space-y-3'>
                    {catalog.find((i) => i.title === selectedMenu)?.hasSubMenu ? (
                        catalog.find((i) => i.title === selectedMenu)?.subMenu?.map((item, index) => (
                                <li key={index}>
                                    <button className=' text-left w-full'>
                                        {item.name}
                                    </button>
                                </li>
                            ))
                    ) : (
                        <li className='text-red'>CLEAR</li>
                    )}

                </ul>
            </div>
        </div>
    );
};

export default CatalogModal;