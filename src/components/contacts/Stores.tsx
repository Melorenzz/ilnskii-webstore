import React from 'react';
import {ClockIcon, MapPinIcon} from "@heroicons/react/16/solid";

export default function Stores() {
    const stores = [
        {
            id: 1,
            name: "Ильменский Супермаркет",
            description: "Магазин продуктов",
            address: "поселок Ильменское-Усово, городской округ Красногорск",
            hours: "7:00-00:00"
        },
        {
            id: 2,
            name: "Ильменский Супермаркет",
            description: "Магазин продуктов",
            address: "поселок Ильменское-Усово, городской округ Красногорск",
            hours: "7:00-00:00"
        },
        {
            id: 3,
            name: "Ильменский Супермаркет",
            description: "Магазин продуктов",
            address: "поселок Ильменское-Усово, городской округ Красногорск",
            hours: "7:00-00:00"
        },
        {
            id: 4,
            name: "Ильменский Супермаркет",
            description: "Магазин продуктов",
            address: "поселок Ильменское-Усово, городской округ Красногорск",
            hours: "7:00-00:00"
        },
        {
            id: 5,
            name: "Ильменский Супермаркет",
            description: "Магазин продуктов",
            address: "поселок Ильменское-Усово, городской округ Красногорск",
            hours: "7:00-00:00"
        },
        {
            id: 6,
            name: "Ильменский Супермаркет",
            description: "Магазин продуктов",
            address: "поселок Ильменское-Усово, городской округ Красногорск",
            hours: "7:00-00:00"
        },
        {
            id: 7,
            name: "Ильменский Супермаркет",
            description: "Магазин продуктов",
            address: "поселок Ильменское-Усово, городской округ Красногорск",
            hours: "7:00-00:00"
        },
        {
            id: 8,
            name: "Ильменский Супермаркет",
            description: "Магазин продуктов",
            address: "поселок Ильменское-Усово, городской округ Красногорск",
            hours: "7:00-00:00"
        }
    ];

    return (
            <div className='my-20'>
                {/* Заголовок */}
                <h2 className="text-3xl font-bold text-gray-800 mb-8">МАГАЗИНЫ ГК «ИЛЬМЕНСКИЙ»</h2>

                {/* Сетка магазинов */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {stores.map((store) => (
                        <div key={store.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
                            {/* Чекбокс и название */}
                            <div className="flex items-start space-x-3 mb-4">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-4 h-4 border-2 border-gray-400 rounded flex items-center justify-center">
                                        <div className="w-2 h-2 bg-gray-400 rounded"></div>
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-gray-800 text-lg leading-tight">
                                        {store.name}
                                    </h3>
                                    <p className="text-gray-600 text-sm mt-1">{store.description}</p>
                                </div>
                            </div>

                            {/* Адрес */}
                            <div className="flex items-start space-x-2 mb-4">
                                <MapPinIcon className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    {store.address}
                                </p>
                            </div>

                            {/* Часы работы */}
                            <div className="flex items-center space-x-2">
                                <ClockIcon className="w-4 h-4 text-gray-500 flex-shrink-0" />
                                <p className="text-gray-700 text-sm font-medium">
                                    {store.hours}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
    );
}