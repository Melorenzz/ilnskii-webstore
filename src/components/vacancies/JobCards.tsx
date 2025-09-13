const JobCards = () => {
    const jobs = [
        {
            title: "Кассир",
            salary: "40 000 — 45 000 грн",
            type: "Стабільный доход",
            bgColor: "bg-yellow-100",
            borderColor: "border-yellow-200"
        },
        {
            title: "Велокурьер",
            salary: "~ 3 000 грн/день",
            type: "Стабільный доход",
            bgColor: "bg-green-100",
            borderColor: "border-green-200"
        },
        {
            title: "Продавец",
            salary: "40 000 — 45 000 грн",
            type: "Стабільный доход",
            bgColor: "bg-blue-100",
            borderColor: "border-blue-200"
        },
        {
            title: "Менеджер зала",
            salary: "40 000 — 45 000 грн",
            type: "Стабільный доход",
            bgColor: "bg-pink-100",
            borderColor: "border-pink-200"
        },
        {
            title: "Оператор колцентра",
            salary: "40 000 — 45 000 грн",
            type: "Стабільный доход",
            bgColor: "bg-purple-100",
            borderColor: "border-purple-200"
        },
        {
            title: "Сотрудник офиса",
            salary: "40 000 — 45 000 грн",
            type: "Стабільный доход",
            bgColor: "bg-indigo-100",
            borderColor: "border-indigo-200"
        },
        {
            title: "Грузчик",
            salary: "~ 2 000 грн/день",
            type: "Стабільный доход",
            bgColor: "bg-orange-100",
            borderColor: "border-orange-200"
        },
        {
            title: "Бухгалтер",
            salary: "85 000 грн",
            type: "Стабільный доход",
            bgColor: "bg-emerald-100",
            borderColor: "border-emerald-200"
        }
    ];

    return (
        <div className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {jobs.map((job, index) => (
                    <div
                        key={index}
                        className={`${job.bgColor} ${job.borderColor} border rounded-2xl p-4 flex flex-col justify-between h-40`}
                    >
                        <div className="flex justify-between items-start mb-3">
                            <h3 className="text-gray-800 font-semibold text-sm leading-tight">
                                {job.title}
                            </h3>
                            <div className="ml-2 flex-shrink-0">
                                <img
                                    src=""
                                    alt={`${job.title} icon`}
                                    className="w-8 h-8 object-contain bg-white rounded-md border border-gray-200"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="text-xs text-gray-600">
                                {job.type}
                            </div>
                            <div className="text-sm font-medium text-gray-800">
                                {job.salary}
                            </div>

                            <button className="w-full bg-white border border-gray-300 text-gray-700 text-xs py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors">
                                Подробности
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default JobCards;