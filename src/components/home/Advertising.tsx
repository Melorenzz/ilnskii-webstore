import {useEffect, useState} from "react";
import axios from "axios";
import {getNews} from "../../services/api.ts";
interface NewsItem {
    id: number;
    title: string;
    text: string;
    image: string;
}
const Advertising = () => {

    const [news, setNews] = useState<NewsItem[]>([]);

    async function fetchNews() {
        try{
            const data = await getNews();
            const slicedData = data.data.slice(0, 3)
            setNews(slicedData)
            console.log(slicedData);
        }catch(e){
            console.log(e);
        }
    }
    useEffect(() => {
        fetchNews()
    }, [])

    return (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 grid-rows-2 h-[350px] sm:h-[460px] mb-20">
            {news.map((item, index) => (
                <div
                    key={item.id}
                    className={`rounded-xl ${
                        index === 0
                            ? "bg-gradient-to-r from-[#FF5C00] to-[#FFA900] col-span-2 lg:col-span-2 lg:row-span-2"
                            : index === 1
                                ? "bg-gradient-to-r from-[#A9D288] to-[#CEEEB5] col-span-1"
                                : "bg-[red] col-span-1"
                    } flex flex-col justify-end p-4 text-white`}
                >
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <p className="text-sm">{item.text}</p>
                    <img
                        src={item.image}
                        alt={item.title}
                        className="mt-2 w-full h-24 object-cover rounded"
                    />
                </div>
            ))}
        </div>
    );
};

export default Advertising;