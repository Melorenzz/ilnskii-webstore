import express from "express";
import cors from "cors";
const app = express();
const PORT = 5000;
app.use(cors());
// 🔹 Данные (можно расширять)
const data = {
    categories: [
        {
            id: 1,
            name: "Супермаркет",
            subcategories: [
                {
                    id: 101,
                    name: "Вода и напитки",
                    products: [
                        {
                            id: 1001,
                            name: "Coca-Cola 1L",
                            price: 45,
                            image: "https://example.com/coca-cola.jpg"
                        },
                        {
                            id: 1002,
                            name: "Минеральная вода 1.5L",
                            price: 25,
                            image: "https://example.com/water.jpg"
                        }
                    ]
                },
                {
                    id: 102,
                    name: "Молоко, яйца и сахар",
                    products: [
                        {
                            id: 1003,
                            name: "Молоко 2.5% 1L",
                            price: 30,
                            image: "https://example.com/milk.jpg"
                        },
                        {
                            id: 1004,
                            name: "Яйца куриные 10шт",
                            price: 40,
                            image: "https://example.com/eggs.jpg"
                        }
                    ]
                }
            ]
        },
        {
            id: 2,
            name: "Кулинария",
            subcategories: [
                {
                    id: 201,
                    name: "Готовые блюда",
                    products: [
                        { id: 2001, name: "Оливье", price: 120, image: "https://example.com/olivie.jpg" },
                        { id: 2002, name: "Котлеты куриные", price: 150, image: "https://example.com/cutlet.jpg" }
                    ]
                }
            ]
        },
        { id: 3, name: "Заморозка", subcategories: [] },
        { id: 4, name: "Другое", subcategories: [] },
        { id: 5, name: "Акции", subcategories: [] },
        { id: 6, name: "Магазины", subcategories: [] }
    ],
    news: [
        { id: 1, title: "Новость 1", image: "https://example.com/news1.jpg", text: "Текст новости 1" },
        { id: 2, title: "Новость 2", image: "https://example.com/news2.jpg", text: "Текст новости 2" },
        { id: 3, title: "Новость 3", image: "https://example.com/news3.jpg", text: "Текст новости 3" }
    ],
    discounts: [
        { id: 1, name: "Скидка на мясо", discount: "-20%", image: "https://example.com/meat-sale.jpg" },
        { id: 2, name: "Скидка на хлеб", discount: "-15%", image: "https://example.com/bread-sale.jpg" }
    ]
};

// 🔹 Роуты
app.get("/categories", (req, res) => {
    res.json(data.categories.map(({ id, name }) => ({ id, name })));
});

app.get("/categories/:id", (req, res) => {
    const category = data.categories.find(c => c.id === Number(req.params.id));
    if (!category) return res.status(404).json({ message: "Category not found" });
    res.json(category);
});

app.get("/subcategories/:id", (req, res) => {
    const subcategory = data.categories
        .flatMap(c => c.subcategories)
        .find(sc => sc.id === Number(req.params.id));
    if (!subcategory) return res.status(404).json({ message: "Subcategory not found" });
    res.json(subcategory);
});

app.get("/products/:id", (req, res) => {
    const product = data.categories
        .flatMap(c => c.subcategories)
        .flatMap(sc => sc.products)
        .find(p => p.id === Number(req.params.id));
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
});
app.get("/search", (req, res) => {
    const query = req.query.q?.toString().toLowerCase() || "";

    if (!query) {
        return res.json([]);
    }

    // ищем по названию товара (name)
    const results = data.categories
        .flatMap(c => c.subcategories)
        .flatMap(sc => sc.products)
        .filter(p => p.name.toLowerCase().includes(query));

    res.json(results);
});

// 🔹 Новости и акции
app.get("/news", (req, res) => res.json(data.news));
app.get("/discounts", (req, res) => res.json(data.discounts));

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
