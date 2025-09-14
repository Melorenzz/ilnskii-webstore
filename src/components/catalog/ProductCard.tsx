import {HeartIcon} from "@heroicons/react/16/solid";

export default function ProductCard() {
    return (
        <div className="bg-white h-fit rounded-2xl border border-gray-200 p-3 relative">
            {/* Heart icon */}

                <HeartIcon className="absolute top-5 right-5 w-6 h-6 text-gray-300" />


            {/* Product image placeholder */}
            <div className="w-full h-40 bg-gray-100 rounded mb-3">
                <img className="w-full h-full object-cover rounded" alt="" />
            </div>

            {/* Stock status and weight */}
            <p className=" text-xs text-gray-500 mb-2">
                В наличии 23 шт

            </p>

            {/* Product title */}
            <p className="text-xl text-gray-900 mb-4 leading-tight font-semibold">
                Гранола Мюсли Bionova ягодные запечённые хрустящие, 400г
            </p>

            {/* Price and add to cart */}
            <div className="flex items-center justify-between">
                <span className="text-2xl font-semibold text-gray-900">299.90 грн</span>
                <button className="bg-transparent  px-3 py-2 rounded-full text-sm font-medium border border-red-600 text-red-600 hover:text-white  hover:bg-red-600 transition">
                    В корзину
                </button>
            </div>
        </div>
    );
}