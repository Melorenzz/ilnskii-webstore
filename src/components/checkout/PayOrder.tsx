import type {OrderFormProps} from "../../types/formData.ts";
// import {PencilIcon} from "@heroicons/react/16/solid";

export default function PayOrder({formData, setFormData}: OrderFormProps)  {


    return (
        <div className="lg:col-span-2">
            {/* Ваши данные */}
            <div className="mb-6">
                <h1 className="text-3xl font-bold mb-6">ОФОРМЛЕНИЕ ЗАКАЗА</h1>

                <h2 className="text-xl font-bold mb-4">Ваши данные</h2>


                <div className="space-y-3">
                    <div className="flex justify-between items-center">
                        <span className="text-gray-700">{formData.name || 'Имя Фамилия'}</span>
                        {/*<button*/}
                        {/*    className="text-red-500 text-sm hover:text-red-600 flex items-center gap-1"*/}
                        {/*>*/}
                        {/*    <PencilIcon className="w-3 h-3" />*/}
                        {/*    Изменить получателя*/}
                        {/*</button>*/}
                    </div>

                    <div className="flex justify-between items-center">
                        <span className="text-gray-700">{formData.phone || '+38 999 999 99 99'}</span>
                        {/*<button*/}
                        {/*    className="text-red-500 text-sm hover:text-red-600 flex items-center gap-1"*/}
                        {/*>*/}
                        {/*    <PencilIcon className="w-3 h-3" />*/}
                        {/*    Изменить контактный номер для заказа*/}
                        {/*</button>*/}
                    </div>


                </div>
            </div>

            {/* Способ оплаты */}
            <div className="mb-6">
                <h2 className="text-xl font-bold mb-4">Способ оплаты</h2>


                <div className="space-y-2">
                    <label className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                        <input
                            type="radio"
                            name="payment"
                            value="card"
                            checked={formData.paymentMethod === 'card'}
                            onChange={(e) => setFormData({...formData, paymentMethod: e.target.value})}
                            className="text-orange-500"
                        />
                        <span className="text-gray-700">Оплата картой при получении</span>
                    </label>

                    <label className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                        <input
                            type="radio"
                            name="payment"
                            value="cash"
                            checked={formData.paymentMethod === 'cash'}
                            onChange={(e) => setFormData({...formData, paymentMethod: e.target.value})}
                            className="text-orange-500"
                        />
                        <span className="text-gray-700">Оплата наличными при получении</span>
                    </label>

                    <label className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50 bg-orange-50 border-orange-200">
                        <input
                            type="radio"
                            name="payment"
                            value="online"
                            checked={formData.paymentMethod === 'online'}
                            onChange={(e) => setFormData({...formData, paymentMethod: e.target.value})}
                            className="text-orange-500"
                        />
                        <span className="text-gray-700 font-medium">Онлайн оплата</span>
                    </label>
                </div>
            </div>

            {/* Самовывоз */}
            <div className="border-t pt-4">
                <div className="flex justify-between items-start mb-2">
                    <h2 className="text-xl font-bold mb-4">Самовывоз сегодня к 22:00</h2>

                    <button
                        className="text-red-500 text-sm hover:text-red-600"
                    >
                        Изменить
                    </button>
                </div>

                <div className="text-sm text-gray-600">
                    «Ільїнський Супермаркет», ул. Новая,Ільїнське-Усово, городской округ Красногорск
                </div>
            </div>

            {/* Debug info */}
            <div className="mt-6 p-4 bg-gray-50 rounded text-xs">
                <h4 className="font-semibold mb-2">Данные формы (для разработчика):</h4>
                <pre className="text-gray-600 overflow-x-auto">
          {JSON.stringify(formData, null, 2)}
        </pre>
            </div>
        </div>
    );
}