export default function PersonalData() {
    return (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 my-10">
                    {/* Левая колонка - форма */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Имя */}
                        <div>
                            <label className="block text-sm text-gray-600 mb-2">
                                Имя
                            </label>
                            <input
                                type="text"
                                className="w-full px-4 py-3 bg-gray-100 border-0 rounded-md text-gray-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                            />
                        </div>

                        {/* Номер телефона */}
                        <div>
                            <label className="block text-sm text-gray-600 mb-2">
                                Номер телефона
                            </label>
                            <input
                                type="tel"
                                className="w-full px-4 py-3 bg-gray-100 border-0 rounded-md text-gray-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                            />
                        </div>

                        {/* День рождения */}
                        <div>
                            <label className="block text-sm text-gray-600 mb-2">
                                День рождения
                            </label>
                            <input
                                type="text"
                                className="w-full px-4 py-3 bg-gray-100 border-0 rounded-md text-gray-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                            />
                            <p className="text-xs text-gray-500 mt-2">
                                Дарим подарки в день рождения.<br />
                                К сожалению, дату нельзя изменить.
                            </p>
                        </div>

                        {/* Эл. почта */}
                        <div>
                            <label className="block text-sm text-gray-600 mb-2">
                                Эл. почта
                            </label>
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder=""
                                    className="w-full px-4 py-3 bg-gray-100 border-0 rounded-md text-gray-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all pr-24"
                                />
                                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm hover:text-gray-700 transition-colors">
                                    Сохранить
                                </button>
                            </div>
                            <p className="text-xs text-gray-500 mt-2">
                                Сообщим по почте о бонусах,<br />
                                акциях и новых продуктах
                            </p>
                        </div>

                        {/* Кнопка Выйти */}
                        <div className="pt-4">
                            <button className="text-gray-600 hover:text-gray-800 transition-colors">
                                Выйти
                            </button>
                        </div>
                    </div>

                    {/* Правая колонка - карта лояльности */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-lg p-6 shadow-md">
                            <div className="text-center">
                                <p className="text-sm text-gray-600 mb-2">
                                    ПОЛУЧАЙТЕ КЭШБЕК ДО 5%<br />
                                    С КАЖДОГО ЗАКАЗА<br />
                                    И ОПЛАЧИВАЙТЕ ПОКУПКИ
                                </p>

                                <div className="bg-red-500 text-white rounded-lg p-4 my-4">
                                    <div className="text-3xl font-bold">16</div>
                                    <div className="text-xs">Бонусы</div>
                                </div>

                                <p className="text-xs text-gray-600">
                                    КАРТА №4437503
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

    );
}