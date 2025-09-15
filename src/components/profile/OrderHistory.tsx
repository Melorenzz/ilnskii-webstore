import {ArrowPathIcon} from "@heroicons/react/16/solid";

export default function OrdersHistory() {
    const orders = [
        {
            id: 1,
            orderNumber: "№56940724-1",
            type: "Доставка",
            date: "14.02.2022",
            address: "ул. Новая, д. 13, кв 33\nпоселок Ильменское-Усово, городской округ Красногорск",
            price: "586 грн",
            status: "в работе",
            isPaid: true,
            canCancel: true
        },
        {
            id: 2,
            orderNumber: "№56940724-1",
            type: "Самовывоз",
            date: "10.02.2022",
            address: "ул. Новая, д. 13, кв 33\nпоселок Ильменское-Усово, городской округ Красногорск",
            price: "586 грн",
            status: "выполнен",
            isPaid: true,
            canCancel: false
        },
        {
            id: 3,
            orderNumber: "№56940724-1",
            type: "Доставка",
            date: "3.02.2022",
            address: "ул. Новая, д. 13, кв 33\nпоселок Ильменское-Усово, городской округ Красногорск",
            price: "586 грн",
            status: "выполнен",
            isPaid: true,
            canCancel: false
        },
        {
            id: 4,
            orderNumber: "№56940724-1",
            type: "Доставка",
            date: "31.01.2022",
            address: "ул. Новая, д. 13, кв 33\nпоселок Ильменское-Усово, городской округ Красногорск",
            price: "986 грн",
            status: "выполнен",
            isPaid: true,
            canCancel: false
        }
    ];

    return (
            <div className='my-10'>
                {/* Заголовок */}
                <div className="mb-8">
                    <p className="text-sm text-gray-500 leading-relaxed">
                        Если не понравился вкус или качество продукта — поможем по всем вопросам. Поддержка 8 800 999 99 99
                    </p>
                </div>

                {/* Сетка заказов */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {orders.map((order) => (
                        <div
                            key={order.id}
                            className={`p-4 rounded-lg border-2 bg-white ${
                                order.status === 'в работе'
                                    ? 'border-red-500 '
                                    : 'border-gray-200 '
                            }`}
                        >
                            {/* Статус и номер заказа */}
                            <div className="flex justify-between items-start mb-3">
                <span
                    className={`px-2 py-1 rounded text-xs font-medium ${
                        order.status === 'в работе'
                            ? 'bg-red-500 text-white'
                            : 'bg-gray-400 text-white'
                    }`}
                >
                  {order.status}
                </span>
                                <div className="text-right">
                                    <p className="text-sm font-medium">Заказ {order.orderNumber}</p>
                                </div>
                            </div>

                            {/* Тип и дата */}
                            <div className="flex justify-between items-center mb-3">
                                <h3 className="text-lg font-bold">{order.type}</h3>
                                <p className="text-sm text-gray-600">{order.date}</p>
                            </div>

                            {/* Адрес */}
                            <div className="mb-4">
                                <p className="text-sm text-gray-700 leading-tight whitespace-pre-line">
                                    {order.address}
                                </p>
                            </div>

                            {/* Цена и кнопки */}
                            <div className="flex justify-between items-center">
                                <div>
                                    <span className="text-xl font-bold">{order.price}</span>
                                    <span className="text-sm text-gray-600 ml-2">Оплачено</span>
                                </div>

                                <div className="flex space-x-2">
                                    {order.canCancel ? (
                                        <button className="px-4 py-2 border border-red-500 text-red-500 rounded text-sm hover:bg-red-50 transition-colors">
                                            Отменить
                                        </button>
                                    ) : (
                                        <button className="px-3 py-2 border border-gray-300 text-gray-500 rounded text-sm hover:bg-gray-50 transition-colors flex items-center space-x-1">
                                            <ArrowPathIcon className="w-4 h-4" />
                                            <span>Повторить</span>
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
    );
}