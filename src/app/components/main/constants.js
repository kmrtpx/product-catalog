export const sortOptions = [
    {
        name: 'Price (Low-High)',
        value: 'priceLowHigh',
        option: 'price', order: 'asc',
    },
    {
        name: 'Price (High-Low)',
        value: 'priceHighLow',
        option: 'price',
        order: 'desc',
    },
    {
        name: 'Rating',
        value: 'ratingHighLow',
        option: 'rating',
        order: 'desc',
    },
]


export const itemsPerPage = 10;

export const initialValue = {
    category: null,
    brand: null,
    price: {min: 10, max: 1000},
    sort: null,
}
