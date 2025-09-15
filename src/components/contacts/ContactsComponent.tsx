import {MapPinIcon, PhoneIcon} from "@heroicons/react/16/solid";

const ContactsComponent = () => {
    return (
            <div className="mx-auto">
                {/* Заголовок */}
                <h2 className="text-3xl font-bold text-gray-800 mb-8">КОНТАКТЫ</h2>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Левая колонка с информацией */}
                    <div className="lg:col-span-1 space-y-6">
                        {/* Описание компании */}
                        <div className="bg-white rounded-lg p-6 shadow-md">
                            <p className="text-gray-700 leading-relaxed">
                                Ильменский онлайн - группа компаний...какой-то краткий текст какой-то краткий
                            </p>
                        </div>

                        {/* ОГР ИНН */}
                        <div className="bg-white rounded-lg p-6 shadow-md">
                            <p className="text-gray-700">
                                ОГР ИНН какие-то контакты
                            </p>
                        </div>

                        {/* Контактная информация */}
                        <div className="bg-yellow-100 rounded-lg p-6 shadow-md">
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <PhoneIcon className="w-5 h-5 text-gray-600" />
                                    <div>
                                        <p className="text-sm text-gray-600">Телефон:</p>
                                        <p className="font-semibold text-gray-800">8 800 302 00 80</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                    {/*<Mail className="w-5 h-5 text-gray-600 mt-1" />*/}
                                    <div>
                                        <p className="text-sm text-gray-600">Вопросы, отзывы и предложения:</p>
                                        <p className="font-semibold text-gray-800">feedback@адрес</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Карта */}
                    <div className="lg:col-span-2">
                            <iframe
                                className="bg-white rounded-lg shadow-md overflow-hidden h-96 lg:h-full relative w-full"
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

export default ContactsComponent;