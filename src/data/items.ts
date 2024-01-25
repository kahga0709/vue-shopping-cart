export interface Product {
    id: number,
    name: string,
    price: number,
    description: string,
    imageUrl?: string,
}

const items: Product[] = [
    {
        id: 1,
        name: 'Giày MLB Chunky Liner MID Màu Đen',
        price: 1000000,
        description: "description",
        imageUrl: 'https://conversestore.vn/wp-content/uploads/2021/08/1-10.jpg',
    },
    {
        id: 2,
        name: 'Chuck 70s High AllWhite',
        price: 1200000,
        description: "description",
        imageUrl: 'https://conversestore.vn/wp-content/uploads/2021/08/1-13.jpg',
    },
    {
        id: 3,
        name: 'Chuck 70s High Black White',
        price: 1400000,
        description: "description",
        imageUrl: 'https://conversestore.vn/wp-content/uploads/2021/08/2-8.jpg',
    },
    {
        id: 4,
        name: 'Chuck 70s High Navy',
        price: 1600000,
        description: "description",
        imageUrl: 'https://conversestore.vn/wp-content/uploads/2021/08/1-18.jpg',
    },
    {
        id: 5,
        name: 'Chuck 70s Low Black White',
        price: 2000000,
        description: "description",
        imageUrl: 'https://conversestore.vn/wp-content/uploads/2021/08/5-12.jpg',
    },
    {
        id: 6,
        name: 'Chuck 70s Low Cream White',
        price: 2100000,
        description: "description",
        imageUrl: 'https://conversestore.vn/wp-content/uploads/2021/08/1-14.jpg',
    },
    {
        id: 7,
        name: 'Comme Des Garçons Play',
        price: 2500000,
        description: "description",
        imageUrl: 'https://conversestore.vn/wp-content/uploads/2020/09/5-7.jpg',
    },
    {
        id: 8,
        name: 'Comme Des Garçons Play x Converse High White',
        price: 1500000,
        description: "description",
        imageUrl: 'https://conversestore.vn/wp-content/uploads/2021/08/5-11.jpg',
    },
    {
        id: 9,
        name: 'Comme Des Garçons Play x Converse Low',
        price: 3000000,
        description: "description",
        imageUrl: 'https://conversestore.vn/wp-content/uploads/2021/11/MOVE-2-1200x1200.png',
    },
    {
        id: 10,
        name: 'Converse 70s vàng cao',
        price: 4000000,
        description: "description",
        imageUrl: 'https://conversestore.vn/wp-content/uploads/2023/09/z4695858391690_3ce0d0da7433b0d9591666ca42d27140-1.jpg',
    },
    {
        id: 11,
        name: 'Converse 70s High Red',
        price: 12000000,
        description: "description",
        imageUrl: 'https://conversestore.vn/wp-content/uploads/2021/08/1-39.jpg',
    },
    {
        id: 12,
        name: 'Converse Chuck 70s Low Red',
        price: 5500000,
        description: "description",
        imageUrl: 'https://conversestore.vn/wp-content/uploads/2021/08/4-30.jpg',
    },
]

export default items;

