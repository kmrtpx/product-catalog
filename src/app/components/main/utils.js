import {isEqual} from 'underscore';

export const buildQueryParams = (filterValues) => {
    const params = new URLSearchParams();
    const { category, price, brand } = filterValues;

    if (category) params.append("category", category);
    if (price.min !== 0) params.append("price_gte", price.min);
    if (price.max !== 1000) params.append("price_lte", price.max);
    if (brand) params.append("brand", brand);

    return params.toString();
};

export const compareStatesForEquality = (initialState, currentState) => {
    return isEqual(initialState, currentState);
};
