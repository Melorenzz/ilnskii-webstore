import React from "react";

const Sidebar = () => {

    const catalog = [
        {title: 'Кулинария', categories:
                [
                    {title: 'Выпечка'},
                    {title: 'Пиццы'},
                    {title: 'Гриль-меню'},
                    {title: 'Салаты'},
                    {title: 'Супы'},
                    {title: 'Горячие блюда'},
                    {title: 'Десерты'},
                ]
        },
        {title: 'Супермаркет', categories:
                [
                    {title: 'Вода и напитки'},
                    {title: 'Молоко, масло и яйца'},
                    {title: 'Снэки и сухофрукты'},
                    {title: 'Кофе, чай и сладости'},
                    {title: 'Макароны и крупы'},
                    {title: 'Хлеб и выпечка'},
                    {title: 'Масло, соусы и специи'},
                    {title: 'Консервы и соления'},
                ]
        },
    ]

    return (
        <div>
            <h2 className='uppercase font-semibold text-xl'>особенности</h2>

            <div className='mt-2 flex gap-2'>
                <input id='discount' type="checkbox"/>
                <label className='text-xl font-semibold' htmlFor="discount">Со скидкой</label>

            </div>
            <div className='mt-2 flex gap-2'>
                <input id='todayDelivery' type="checkbox"/>
                <label className='text-xl font-semibold' htmlFor="todayDelivery">Доставка сегодня</label>
            </div>
            <div className='mt-2 flex gap-2'>
                <input id='ilnskiiProducts' type="checkbox"/>
                <label className='text-xl font-semibold' htmlFor="ilnskiiProducts">Продукция от «Ильинского»</label>

            </div>
            <h2 className='uppercase font-semibold text-xl mt-5'>каталог</h2>
            {catalog.map((item, index) => (
                <React.Fragment key={index}>
                    <h3 className='font-semibold text-xl mt-10'>{item.title}</h3>
                    <ul className=' mt-2'>
                        {item.categories.map((category, index) => (
                            <li className='text-xl px-6 py-1 w-full bg-transparent hover:bg-[#FFF5E0]' key={index}>{category.title}</li>
                        ))}
                    </ul>
                </React.Fragment>
            ))}
        </div>
    );
};

export default Sidebar;