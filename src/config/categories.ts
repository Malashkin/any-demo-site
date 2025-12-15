export interface CategoryConfig {
    id: string;
    name: string;
    title: string;
    themeColor: string;
    features: {
        search: boolean;
        recommendations: boolean;
        review: boolean;
        neurocart: boolean;
    };
}

export const categories: CategoryConfig[] = [
    {
        id: 'fashion',
        name: 'Одежда и обувь',
        title: 'Fashion Store',
        themeColor: '#FF4081',
        features: { search: true, recommendations: true, review: true, neurocart: true }
    },
    {
        id: 'electronics',
        name: 'Электроника и бытовая техника',
        title: 'Electro World',
        themeColor: '#3F51B5',
        features: { search: true, recommendations: true, review: true, neurocart: true }
    },
    {
        id: 'beauty',
        name: 'Косметика и гигиена',
        title: 'Beauty Shop',
        themeColor: '#E91E63',
        features: { search: true, recommendations: true, review: true, neurocart: false }
    },
    {
        id: 'repair',
        name: 'Ремонт',
        title: 'Build It',
        themeColor: '#FF9800',
        features: { search: true, recommendations: false, review: true, neurocart: false }
    },
    {
        id: 'alcohol',
        name: 'Алкоголь',
        title: 'Wine & Spirits',
        themeColor: '#795548',
        features: { search: true, recommendations: true, review: false, neurocart: false }
    },
    {
        id: 'food',
        name: 'Продукты питания',
        title: 'Fresh Market',
        themeColor: '#4CAF50',
        features: { search: true, recommendations: true, review: true, neurocart: true }
    },
    {
        id: 'jewelry',
        name: 'Ювелирные товары',
        title: 'Luxury Gems',
        themeColor: '#9C27B0',
        features: { search: true, recommendations: true, review: false, neurocart: true }
    },
    {
        id: 'kids',
        name: 'Детские товары, материнство',
        title: 'Kids World',
        themeColor: '#03A9F4',
        features: { search: true, recommendations: true, review: true, neurocart: true }
    },
    {
        id: 'pharmacy',
        name: 'Аптеки',
        title: 'Pharma Care',
        themeColor: '#009688',
        features: { search: true, recommendations: false, review: false, neurocart: false }
    },
    {
        id: 'books',
        name: 'Книги и канцтовары',
        title: 'Book Haven',
        themeColor: '#607D8B',
        features: { search: true, recommendations: true, review: true, neurocart: false }
    },
    {
        id: 'marketplaces',
        name: 'Маркетплейсы',
        title: 'Mega Mall',
        themeColor: '#673AB7',
        features: { search: true, recommendations: true, review: true, neurocart: true }
    },
    {
        id: 'gifts',
        name: 'Подарки',
        title: 'Gift Shop',
        themeColor: '#F44336',
        features: { search: true, recommendations: true, review: false, neurocart: false }
    },
    {
        id: 'auto',
        name: 'Автоиндустрия',
        title: 'Auto Parts',
        themeColor: '#212121',
        features: { search: true, recommendations: true, review: true, neurocart: false }
    },
    {
        id: 'adult',
        name: 'Секс-шопы',
        title: 'Adult Store',
        themeColor: '#D32F2F',
        features: { search: true, recommendations: true, review: true, neurocart: false }
    },
    {
        id: 'pets',
        name: 'Товары для животных',
        title: 'Pet Paradise',
        themeColor: '#FFC107',
        features: { search: true, recommendations: true, review: true, neurocart: true }
    },
    {
        id: 'tourism',
        name: 'Туризм',
        title: 'Travel Gear',
        themeColor: '#00BCD4',
        features: { search: true, recommendations: true, review: true, neurocart: false }
    }
];
