import axios from "axios";
import { 
        PRODUCTION_LIST_REQUEST,
        PRODUCT_LIST_SUCCESS,
        PRODUCT_LIST_FAILS,
        PRODUCTION_DETAILS_REQUEST,
        PRODUCT_DETAILS_SUCCESS,
        PRODUCT_DETAILS_FAILS 
} 
from "../constants/productConstants"
export const listProducts = () =>async(dispatch)=>{
        try {
            dispatch({type:PRODUCTION_LIST_REQUEST});
            const {data} = await axios.get('http://localhost:8080/api/products');
            dispatch({
                type:PRODUCT_LIST_SUCCESS,
                payload:data,
            })
        } catch (error) {
            dispatch({
                type:PRODUCT_LIST_FAILS,
                payload:
                error.response && error.response.data.message
                ? error.response.data.message
                : error.message
            })
        }
    }



    export const listProductDetails = (id) =>async(dispatch)=>{
        try {
            dispatch({type:PRODUCTION_DETAILS_REQUEST});
            const {data} = await axios.get(`http://localhost:8080/api/products/${id}`);
            dispatch({
                type:PRODUCT_DETAILS_SUCCESS,
                payload:data,
            })
        } catch (error) { 
            dispatch({
                type:PRODUCT_DETAILS_FAILS,
                payload:
                error.response && error.response.data.message
                ? error.response.data.message
                : error.message 
            })
        }
    }
