import {HeartIcon, MinusIcon, PlusIcon} from "@heroicons/react/16/solid";

const ProductCard = () => {

    const product = {
        name: 'Пицца мини с ветчиной и сыром, замороженная, 0,44 кг',
        originalPrice: 205,
        discountedPrice: 257,
        finalPrice: 410,
        availableQuantity: 2,
        unit: 'шт',
        hasDiscount: true
    };


    return (
        <div className="relative flex items-start gap-4">
            {/* Discount Badge */}
            {product.hasDiscount && (
                <div className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded absolute z-10">
                    %
                </div>
            )}

            {/* Product Image Placeholder */}
            <div className="relative">
                <img
                    src=""
                    alt=""
                    className="w-24 h-24 bg-gray-200 rounded-lg border border-gray-300"
                />
            </div>

            {/* Product Details */}
            <div className="flex-1">
                <h3 className="text-xl font-semibold line-clamp-2 text-gray-900 leading-tight mb-1">
                    {product.name}
                </h3>
                <p className="text-xs text-gray-500 mb-3">
                    В наличии {product.availableQuantity} {product.unit}
                </p>
            </div>

            {/* Price and Controls */}
            <div className="flex items-end gap-5">
                {/* Prices */}
                <div className="text-right">
                    <div className="text-red-500 font-bold text-lg">
                        {product.originalPrice} грн
                    </div>
                    <div className="text-xs text-gray-400 line-through">
                        {product.discountedPrice}.00 грн
                    </div>
                </div>

                {/* Quantity Controls */}
                <div
                    className="flex items-center gap-2 bg-[#FFF8EB] border border-[#FFE7B9] text-[#FFA900] rounded-full px-2 py-1">
                    <button
                        className="w-6 h-6 rounded-full border   flex items-center justify-center "
                    >
                        <MinusIcon className="w-3 h-3"/>
                    </button>
                    <span className="min-w-[1.5rem] text-center font-medium text-sm">
            10
          </span>
                    <button
                        className="w-6 h-6 rounded-full border flex items-center justify-center "
                    >
                        <PlusIcon className="w-3 h-3"/>
                    </button>
                </div>

                {/* Final Price and Favorite */}
                <div className="flex items-center gap-3">
                    <button
                        className={`p-1 rounded text-gray-400hover:text-red-500`}
                    >
                        <HeartIcon className="w-5 h-5" fill='none'/>
                    </button>
                    <div className="text-right">
                        <div className="text-xl font-bold">
                            {product.finalPrice} грн
                        </div>
                        <div className="text-xs text-gray-500">
                            20 {product.unit}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;