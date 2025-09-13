import {ClockIcon, CreditCardIcon, InformationCircleIcon, MapPinIcon} from "@heroicons/react/16/solid";
import Subtitle from "./Subtitle.tsx";

const DeliveryPayment = () => {
    return (
        <div className="mx-auto p-6 bg-white mt-20">
            <Subtitle subtitle='доставка и оплата'/>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-20 mt-10">
                {/* Левая колонка с информацией */}
                <div className="space-y-8 col-span-2">
                    {/* Зоны доставки */}
                    <div>
                        <h3 className="text-xl font-semibold text-red-600 mb-4 flex items-center">
                            <MapPinIcon className="w-5 h-5 mr-2"/>
                            Зоны доставки
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                            Доставка осуществляется в районе ЖК "Ильинские Луга"
                            (Карьяковская обл., Красногорск, пос. Ильинское-Усово, ул.
                            Заповедная) и ЖК "Новая Рига" (Харьковская обл.,
                            Красногорск, д. Глухово, ул. Рублевское Предместье)
                        </p>
                    </div>

                    {/* Время доставки */}
                    <div>
                        <h3 className="text-xl font-semibold text-red-600 mb-4 flex items-center">
                            <ClockIcon className="w-5 h-5 mr-2"/>
                            25 минут
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                            Доставка 25 минут. Принимаем заказы с 7:00 до 23:00
                        </p>
                    </div>

                    {/* Стоимость */}
                    <div>
                        <h3 className="text-xl font-semibold text-red-600 mb-4">300 грн</h3>
                        <p className="text-gray-700 leading-relaxed">
                            Минимальная сумма бесплатной доставки с учетом скидок.
                            Иначе стоимость доставки 50 грн
                        </p>
                    </div>

                    {/* Оплата */}
                    <div>
                        <h3 className="text-xl font-semibold text-red-600 mb-4 flex items-center">
                            <CreditCardIcon className="w-5 h-5 mr-2"/>
                            Оплата
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                            При оформлении заказа вы можете выбрать удобный для вас
                            способ расчета
                        </p>
                    </div>

                    {/* Предупреждение */}
                    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                        <div className="flex items-start">
                            <InformationCircleIcon className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0"/>
                            <p className="text-blue-800 text-sm">
                                Изображения продуктов могут отличаться от продуктов в заказе.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Правая колонка с картой */}
                <div className='col-span-3 '>
                    <h3 className="text-xl font-semibold text-red-600 mb-4">Карта доставки</h3>
                    <iframe
                        className='h-full w-full rounded-2xl'
                        src="https://maps.google.com/maps?hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                        <a href="https://www.mapsdirections.info/fr/calculer-la-population-sur-une-carte">
                            test
                        </a>
                    </iframe>
                </div>
            </div>
        </div>
    );
};

export default DeliveryPayment;