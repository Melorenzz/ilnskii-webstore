import MainLayout from "../ui/MainLayout.tsx";

const Footer = () => {
    return (
        <footer className="bg-red-600 text-white py-8">
            <MainLayout>
                <div className="flex gap-5 justify-between mb-8">
                    {/* Первая колонка - Итальянский онлайн */}
                    <div>
                        <h3 className="font-semibold mb-4">Итальянский онлайн</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:underline">Кулинария</a></li>
                            <li><a href="#" className="hover:underline">Супермаркет</a></li>
                            <li><a href="#" className="hover:underline">Заморозка</a></li>
                            <li><a href="#" className="hover:underline">Другое</a></li>
                        </ul>
                    </div>

                    {/* Вторая колонка - Итальянский клуб */}
                    <div>
                        <h3 className="font-semibold mb-4">Итальянский клуб</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:underline">Акции</a></li>
                            <li><a href="#" className="hover:underline">Доставка и оплата</a></li>
                            <li><a href="#" className="hover:underline">Пользовательские</a></li>
                            <li><a href="#" className="hover:underline">Политика конфиденциальности</a></li>
                            <li><a href="#" className="hover:underline">Вакансии</a></li>
                        </ul>
                    </div>

                    {/* Третья колонка - Контакты */}
                    <div>
                        <div className="mb-4">
                            <div className="flex items-center mb-2">
                                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                                </svg>
                                <span className="font-semibold">+38 (000) 49-09-99</span>
                            </div>
                        </div>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center">
                                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd"
                                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                          clipRule="evenodd"/>
                                </svg>
                                Адреса магазинов
                            </li>
                            <li className="flex items-center">
                                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd"
                                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                          clipRule="evenodd"/>
                                </svg>
                                Следите за нами
                            </li>
                            <li className="flex items-center">
                                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                                </svg>
                                Обратная связь
                            </li>
                        </ul>
                    </div>

                    {/* Четвертая колонка - Подписка */}
                    <div>
                        <h3 className="font-semibold mb-4">Подпишитесь на вкусные и полезные новости</h3>
                        <div className="flex mb-4 gap-3">
                            <input
                                type="email"
                                placeholder=""
                                className="flex-1 px-3 py-2 rounded-xl bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                            />
                            <button
                                className="border border-white hover:bg-red-800 px-4 py-2 rounded-xl font-medium transition-colors">
                                Подписаться
                            </button>
                        </div>
                        <label className="flex items-center text-xs">
                            <input type="checkbox" className="mr-2 rounded"/>
                            Согласен с политикой конфиденциальности
                        </label>
                    </div>
                </div>

                {/* Нижняя часть футера */}
                <div className="border-t border-red-500 pt-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center space-x-4 mb-4 md:mb-0">
                            <p className="text-sm">© 2023 Итальянский онлайн — доставка продуктов на дом</p>
                            <p className="text-sm">Информация на сайте не является публичной офертой</p>
                        </div>

                        <div className="flex items-center space-x-4">
                            {/* Visa */}
                            <div className="bg-white text-blue-900 px-2 py-1 rounded text-xs font-bold">
                                VISA
                            </div>

                            {/* Mastercard */}
                            <div className="flex">
                                <div className="w-6 h-6 bg-red-500 rounded-full"></div>
                                <div className="w-6 h-6 bg-yellow-400 rounded-full -ml-2"></div>
                            </div>

                            <span className="text-sm">Mastercard</span>
                            <span className="text-sm">Рассрочка 0%</span>

                            {/* GOZPOV логотип */}
                            <div className="bg-white text-red-600 px-2 py-1 rounded text-xs font-bold">
                                GOZPOV
                            </div>
                        </div>
                    </div>
                </div>
            </MainLayout>
        </footer>
    );
};

export default Footer;