const Promo = () => {
    return (
        <div className="relative bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-5 sm:p-8 text-white shadow-lg my-20">
            <div className="flex justify-between items-start md:items-center lg:flex-row flex-col">
                {/* Левая часть с текстом */}
                <h2 className="text-xl lg:text-3xl font-bold uppercase mb-2 flex gap-2 justify-between lg:justify-start items-center lg:items-start">
                        <span className="flex flex-4 lg:flex-initial flex-col leading-tight">
                            <span className='lg:w-auto'>БЕСПЛАТНАЯ ДОСТАВКА</span>
                            <span className="text-sm font-medium lowercase">первого заказа</span>
                        </span>

                    <span className='flex-1 text-center'>+</span>

                    <span className="flex flex-col flex-4 lg:flex-initial leading-tight">
                            <span className='lg:w-auto'>СКИДКА <br className='inline sm:hidden' /> 10%</span>
                            <span className="text-sm font-medium lowercase whitespace-nowrap">на заказы кулинарии</span>
                        </span>
                </h2>
                <div className='w-full lg:w-fit'>

                </div>

                {/* Правая часть с кнопкой */}
                <div>
                    <button
                        className="bg-transparent mt-3 border-2 border-white rounded-full px-5 py-2 md:px-6 md:py-3 text-white font-medium hover:bg-white hover:text-orange-500 transition-all duration-300">
                        Получить промокод
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Promo;