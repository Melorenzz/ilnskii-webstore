const Promo = () => {
    return (
        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-8 text-white shadow-lg my-20">
            <div className="flex justify-between items-center lg:flex-row flex-col">
                {/* Левая часть с текстом */}
                <div className='w-full lg:w-fit'>
                    <h2 className="text-lg sm:text-3xl font-bold uppercase mb-2 flex gap-2 justify-between lg:justify-start items-center lg:items-start">
  <span className="flex flex-col leading-tight">
    <span className='lg:w-auto w-[220px]'>БЕСПЛАТНАЯ ДОСТАВКА</span>
    <span className="text-sm font-medium lowercase">первого заказа</span>
  </span>

                        <span>+</span>

                        <span className="flex flex-col leading-tight">
    <span className='w-[20px]  lg:w-auto'>СКИДКА 10%</span>
    <span className="text-sm font-medium lowercase">на заказы кулинарии</span>
  </span>
                    </h2>

                </div>

                {/* Правая часть с кнопкой */}
                <div>
                    <button
                        className="bg-transparent border-2 border-white rounded-full px-6 py-3 text-white font-medium hover:bg-white hover:text-orange-500 transition-all duration-300">
                        Получить промокод
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Promo;