import axios from 'axios';
import {initialValue, sortOptions} from "./constants";
import {buildQueryParams, compareStatesForEquality} from "./utils";

const BASE_URL = "http://localhost:3001";
const PRODUCTS_PATH = `${BASE_URL}/products`;
const FILTER_FIELDS_PATH = `${BASE_URL}/filter`;

const fetchData = async (path, url, setProducts, setTotalItems, navigate, setError) => {
    try {
        await new Promise(resolve => setTimeout(resolve, 500));

        const response = await axios.get(`${path}?${url}`);
        setProducts(response.data);
        setTotalItems(response.data.items)

        navigate(`?${url}`, {replace: true});
    } catch (error) {
        setError(error);
    }
};

export const loadProductsData = (props) => {
    const {
        currentPage,
        currentValue,
        navigate,
        setProducts,
        setTotalItems,
        setError
    } = props;

    const isEqual = compareStatesForEquality(initialValue, currentValue);
    const queryParams = buildQueryParams(currentValue);
    let url = `_page=${currentPage}`;

    if (!isEqual) {
        const {option, order} = sortOptions.find(op => op.name === currentValue.sort) || {};
        url += `&${queryParams}${option ? `&_sort=${option}&_order=${order}` : ''}`;
    }

    return fetchData(PRODUCTS_PATH, url, setProducts, setTotalItems, navigate, setError);
};

export const loadProductsFiltersFields = async (setFilterOptions, setError) => {
    return await axios
        .get(FILTER_FIELDS_PATH)
        .then(response => setFilterOptions(response.data))
        .catch(error => setError(error))
}
