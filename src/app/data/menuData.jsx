export const slugify = (text) =>
    text.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");

export const menuData = [
    {
        id: 1,
        image: "https://img.freepik.com/free-photo/american-shrimp-fried-rice-served-with-chili-fish-sauce-thai-food_1150-26576.jpg",
        category: "Utama",
        title: "Nasi Goreng Spesial",
        description: "Nasi goreng dengan campuran seafood, ayam, dan sayuran segar",
        price: "15.000",
    },
    {
        id: 2,
        image: "https://img.freepik.com/free-photo/crispy-fried-chicken-plate-with-salad-carrot_1150-20212.jpg",
        category: "Utama",
        title: "Ayam Goreng Lalapan",
        description: "Ayam goreng dengan nasi putih, sambal, dan lalapan segar",
        price: "20.000",
    },
    {
        id: 3,
        image: "https://img.freepik.com/premium-photo/delicious-klepon-traditional-indonesian-culinary-wooden-table_448865-1770.jpg",
        category: "Penutup",
        title: "Kue Putu",
        description: "Kue tradisional dari tepung beras isi gula merah dan kelapa",
        price: "10.000",
    },
    {
        id: 4,
        image: "https://img.freepik.com/premium-photo/lotek-bandung-sundanese-traditional-healthy-salad-made-from-various-boiled-vegetable-with-spicy-peanut-sauce-usually-served-wuth-kerupuk-eat-with-steamed-rice_511235-11003.jpg",
        category: "Pembuka",
        title: "Gado-Gado",
        description: "Salad sayur khas Indonesia dengan bumbu kacang",
        price: "18.000",
    },
    {
        id: 5,
        image: "https://img.freepik.com/free-photo/delicious-goulash-ready-dinner_23-2149370898.jpg",
        category: "Utama",
        title: "Rendang Padang",
        description: "Daging sapi dimasak rempah khas Minang, disajikan dengan nasi",
        price: "25.000",
    },
    {
        id: 6,
        image: "https://img.freepik.com/free-photo/side-view-lavash-wraps-plate-with-green-purple-stripped-towel-right-side-black-background_140725-142414.jpg",
        category: "Penutup",
        title: "Dadar Gulung",
        description: "Pancake hijau isi kelapa manis khas Indonesia",
        price: "9.000",
    },
    {
        id: 7,
        image: "https://img.freepik.com/free-photo/chicken-green-curry-bowl_1150-23912.jpg",
        category: "Pembuka",
        title: "Soto Betawi",
        description: "Sup daging khas Betawi dengan kuah santan gurih",
        price: "22.000",
    },
    {
        id: 8,
        image: "https://img.freepik.com/premium-photo/close-up-fruit-salad-bowl_1048944-12415610.jpg",
        category: "Penutup",
        title: "Es Cendol",
        description: "Minuman manis dari cendol, gula merah, santan, dan es",
        price: "12.000",
    },
];

export const getMenuBySlug = (slug) => {
    return menuData.find((item) => slugify(item.title) === slug);
};

export const getMenusByCategory = (category) => {
    return menuData.filter((item) => item.category.toLowerCase() === category.toLowerCase());
};

export const getSimilarMenus = (category, excludeSlug) => {
    return menuData.filter((item) =>
        item.category.toLowerCase() === category.toLowerCase() &&
        slugify(item.title) !== excludeSlug
    );
};

export const searchMenus = (searchTerm, category = "") => {
    return menuData.filter((item) => {
        const matchSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchCategory = category === "" || item.category.toLowerCase() === category.toLowerCase();
        return matchSearch && matchCategory;
    });
};
