
const ApplicationForm = () => {

    return (
        <div className="my-20">
            <div className="bg-[#FFECCA] rounded-2xl p-10">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Левая часть */}
                    <div className="flex-1">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                            ХОТИТЕ СТАТЬ ЧАСТЬЮ<br />
                            НАШЕЙ КОМАНДЫ?
                        </h2>

                        <p className="text-gray-700 mb-6">
                            Оставьте заявку и мы с вами свяжемся.
                        </p>

                        {/* Иконка-заглушка */}
                        <div className="flex justify-center lg:justify-start">
                            <img
                                src=""
                                alt="Team icon"
                                className="w-16 h-16 bg-blue-500 rounded-lg border border-gray-200"
                            />
                        </div>
                    </div>

                    {/* Правая часть - форма */}
                    <div className="flex-1">
                        <form className="space-y-4">
                            <input
                                type="text"
                                name="fio"
                                required
                                placeholder="Ф.И.О."
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />

                            <input
                                type="tel"
                                name="phone"
                                required
                                placeholder="Телефон"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />

                            <input
                                type="date"
                                name="birthDate"
                                required
                                placeholder="Дата рождения"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />

                            <select
                                required
                                name="country"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                            >
                                <option value="Украины">Украины</option>
                                <option value="России">России</option>
                                <option value="Беларуси">Беларуси</option>
                                <option value="Другое">Другое</option>
                            </select>

                            <div className="flex items-center space-x-2 mt-4">
                                <input
                                    required
                                    type="checkbox"
                                    id="agreement"
                                    className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                />
                                <label htmlFor="agreement" className="text-xs text-gray-600 leading-tight">
                                    согласен на обработку персональных данных
                                </label>
                            </div>

                            <button
                                type={"submit"}
                                className="w-full bg-red-500 hover:bg-red-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium py-3 px-6 rounded-lg transition-colors"
                            >
                                Отправить
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApplicationForm;