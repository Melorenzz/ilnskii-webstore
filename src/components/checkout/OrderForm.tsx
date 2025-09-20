import {type ChangeEvent} from 'react';
import type {OrderFormProps} from "../../types/formData.ts";

export default function OrderForm({formData, setFormData}: OrderFormProps) {


    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handlePaymentChange = (method: 'card' | 'cash' | 'online') => {
        setFormData(prev => ({
            ...prev,
            paymentMethod: method
        }));
    };

    return (
        <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold mb-6">ОФОРМЛЕНИЕ ЗАКАЗА</h1>

            {/* Ваши данные */}
            <div className="mb-6">
                <h2 className="text-xl font-bold mb-4">Ваши данные</h2>

                    <input
                        type="text"
                        name="name"
                        placeholder="Имя Фамилия"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-red-500"
                    />

                    <input
                        type="tel"
                        name="phone"
                        placeholder="+38 999 999 99 99"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-red-500 mt-3"
                    />

                {/*<p className="text-xs text-gray-500 mt-3">К этому номеру телефона привязана карта №437503</p>*/}
            </div>

            {/* Способ оплаты */}
            <div className="mb-6">
                <h2 className="text-xl font-bold mb-4">Способ оплаты</h2>


                <div className="space-y-2">
                    <label className="flex items-center">
                        <input
                            type="radio"
                            name="payment"
                            checked={formData.paymentMethod === 'card'}
                            onChange={() => handlePaymentChange('card')}
                            className="w-4 h-4 text-red-600 border-gray-300 focus:ring-red-500"
                        />
                        <span className="ml-2 text-sm">Оплата картой при получении</span>
                    </label>

                    <label className="flex items-center">
                        <input
                            type="radio"
                            name="payment"
                            checked={formData.paymentMethod === 'cash'}
                            onChange={() => handlePaymentChange('cash')}
                            className="w-4 h-4 text-red-600 border-gray-300 focus:ring-red-500"
                        />
                        <span className="ml-2 text-sm">Оплата наличными при получении</span>
                    </label>

                    <label className="flex items-center">
                        <input
                            type="radio"
                            name="payment"
                            checked={formData.paymentMethod === 'online'}
                            onChange={() => handlePaymentChange('online')}
                            className="w-4 h-4 text-red-600 border-gray-300 focus:ring-red-500"
                        />
                        <span className="ml-2 text-sm">Онлайн оплата</span>
                    </label>
                </div>
            </div>

            {/* Доставка */}
            <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                    <h2 className="text-xl font-bold mb-4">Доставка сегодня за 25 минут</h2>
                    <button className="text-xs text-red-500">Изменить</button>
                </div>

                <p className="text-sm  mb-4">ул. Новая-Ильинское-Усово, городской округ Красногорск</p>

                {/* Поля адреса */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                    <input
                        type="text"
                        name="apartment"
                        placeholder="квартира"
                        value={formData.apartment}
                        onChange={handleInputChange}
                        className="px-3 py-2 bg-yellow-50 border border-yellow-200 rounded text-sm focus:outline-none focus:border-yellow-400"
                    />
                    <input
                        type="text"
                        name="floor"
                        placeholder="этаж"
                        value={formData.floor}
                        onChange={handleInputChange}
                        className="px-3 py-2 bg-yellow-50 border border-yellow-200 rounded text-sm focus:outline-none focus:border-yellow-400"
                    />
                    <input
                        type="text"
                        name="intercom"
                        placeholder="домофон"
                        value={formData.intercom}
                        onChange={handleInputChange}
                        className="px-3 py-2 bg-yellow-50 border border-yellow-200 rounded text-sm focus:outline-none focus:border-yellow-400"
                    />
                    <input
                        type="text"
                        name="entrance"
                        placeholder="подъезд"
                        value={formData.entrance}
                        onChange={handleInputChange}
                        className="px-3 py-2 bg-yellow-50 border border-yellow-200 rounded text-sm focus:outline-none focus:border-yellow-400"
                    />
                </div>

                {/* Комментарий */}
                <textarea
                    name="comments"
                    placeholder="комментарий для курьера"
                    value={formData.comments}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-3 py-2 bg-yellow-50 border border-yellow-200 rounded text-sm resize-none focus:outline-none focus:border-yellow-400"
                />

            </div>
        </div>
    );
}