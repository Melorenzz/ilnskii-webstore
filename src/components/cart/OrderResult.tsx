import { useState } from 'react';
import {Link} from "react-router-dom";

const OrderResult = () => {
    const [promoCode, setPromoCode] = useState('');
    const [orderData] = useState({
        deliveryTime: 'Доставка сегодня, 18:11',
        deliveryAddress: 'ул. Новая, д. 13, подъезд Красинское-Усово, городской округ Красногорск',
        items: {
            count: 5,
            totalWeight: '2.443 кг'
        },
        pricing: {
            subtotal: 2443,
            discount: -104,
            bonusDiscount: -17,
            promocode: 0,
            delivery: 0,
            total: 586
        },
        bonuses: {
            available: 170,
            willEarn: 25,
            canSpend: 17
        }
    });

    const handleApplyPromoCode = () => {
        // Handle promo code application logic
        console.log('Applying promo code:', promoCode);
    };

    const handlePlaceOrder = () => {
        // Handle order placement logic
        console.log('Placing order...');
    };

    return (
        <div className="col-span-1 bg-[#FFECCA] p-6 rounded-lg h-fit">
            {/* Delivery Info */}
            <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-xl ">{orderData.deliveryTime}</span>
                    <button className="text-red-500 text-sm underline">
                        Изменить
                    </button>
                </div>
                {/*<p className="text-sm  mb-4">*/}
                {/*    {orderData.deliveryAddress}*/}
                {/*</p>*/}

                {/* Promo Code */}
                {/*<div className="mb-4">*/}
                {/*    <div className="flex gap-2 bg-[white] rounded-xl p-2">*/}
                {/*        <input*/}
                {/*            type="text"*/}
                {/*            value={promoCode}*/}
                {/*            onChange={(e) => setPromoCode(e.target.value)}*/}
                {/*            placeholder="Есть промокод?"*/}
                {/*            className="flex-1 px-3 py-2  rounded text-sm"*/}
                {/*        />*/}
                {/*        <button*/}
                {/*            onClick={handleApplyPromoCode}*/}
                {/*            className="px-4 py-2 border border-red-500 text-red-500 rounded-lg text-sm hover:bg-red-50"*/}
                {/*        >*/}
                {/*            Применить*/}
                {/*        </button>*/}
                {/*    </div>*/}
                {/*</div>*/}


            </div>

            {/* Order Summary */}
            <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                    <span className="">Товары ({orderData.items.count})</span>
                    <span className="font-medium">{orderData.items.totalWeight}</span>
                </div>

                <div className="flex justify-between ">
                    <span>Скидки</span>
                    <span>{orderData.pricing.discount} грн</span>
                </div>

                <div className="flex justify-between ">
                    <span>Бонусы</span>
                    <span>{orderData.pricing.bonusDiscount} грн</span>
                </div>

                <div className="flex justify-between">
                    <span className="">Промокод</span>
                    <span>{orderData.pricing.promocode} грн</span>
                </div>

                <div className="flex justify-between">
                    <span className="">Доставка</span>
                    <span className=" font-medium">Бесплатно</span>
                </div>

                <hr className="border-gray-300" />

                <div className="flex justify-between text-lg font-bold">
                    <span>К оплате</span>
                    <span>{orderData.pricing.total} грн</span>
                </div>
            </div>

            {/* Place Order Button */}
            <Link to='/checkout'
                onClick={handlePlaceOrder}
                className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-4 rounded-full transition-colors"
            >
                Оформить заказ
            </Link>

        </div>
    );
};

export default OrderResult;