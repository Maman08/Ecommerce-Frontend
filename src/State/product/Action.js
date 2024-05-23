import {api} from '../../config/apiConfig'
import { FIND_PRODUCTS_REQUEST,
  FIND_PRODUCTS_SUCCESS,
  FIND_PRODUCTS_FAILURE,
  FIND_PRODUCT_BY_ID_REQUEST,
  FIND_PRODUCT_BY_ID_SUCCESS,
  FIND_PRODUCT_BY_ID_FAILURE } from './ActionTypes';

export const findProduct=(reqData)=>async(dispatch)=>{
    dispatch({type:FIND_PRODUCTS_REQUEST})

    const {colors,sizes,minPrice,maxPrice,minDiscount,category,stock,sort,pageNumber,pageSize}=reqData;
    try{
         const {data}=await api.get(`/api/products?color=${colors}&size=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&category=${category}&stock=${stock}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}}`)
         console.log("product data ",data);
         dispatch({type:FIND_PRODUCTS_SUCCESS,payload:data})
    }catch(error){
dispatch({type:FIND_PRODUCTS_FAILURE,payload:error.message})
    }

}

export const findProductById = (reqData) => async (dispatch) => { // Changed action creator name
     dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST });
     const { productId } = reqData;
     try {
       const { data } = await api.get(`/api/products/id/${productId}`);
       dispatch({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data });
     } catch (error) {
       dispatch({ type: FIND_PRODUCT_BY_ID_FAILURE, payload: error.message });
     }
   };

// // import api from '../../config/apiConfig';
// // import { FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS, FIND_PRODUCTS_FAILURE } from './ActionTypes';

// // export const findProduct = (reqData) => async (dispatch) => {
// //   dispatch({ type: FIND_PRODUCTS_REQUEST });

// //   const { colors, sizes, minPrice, maxPrice, minDiscount, category, stock, sort, pageNumber, pageSize } = reqData;
// //   try {
// //     const { data } = await api.get(`/api/products`, {
// //       params: {
// //         colors,
// //         sizes,
// //         minPrice,
// //         maxPrice,
// //         minDiscount,
// //         category,
// //         stock,
// //         sort,
// //         pageNumber,
// //         pageSize
// //       }
// //     });
// //     dispatch({ type: FIND_PRODUCTS_SUCCESS, payload: data });
// //   } catch (error) {
// //     dispatch({ type: FIND_PRODUCTS_FAILURE, payload: error.message });
// //   }
// // };

// export const findProductById = (reqData) => async (dispatch) => { // Changed action creator name
//     dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST });
//     const { productId } = reqData;
//     try {
//       const { data } = await api.get(`/api/products/id/${productId}`);
//       dispatch({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data });
//     } catch (error) {
//       dispatch({ type: FIND_PRODUCT_BY_ID_FAILURE, payload: error.message });
//     }
//   };

// import { api } from '../../config/apiConfig';
// import {
//   FIND_PRODUCTS_REQUEST,
//   FIND_PRODUCTS_SUCCESS,
//   FIND_PRODUCTS_FAILURE,
//   FIND_PRODUCT_BY_ID_REQUEST,
//   FIND_PRODUCT_BY_ID_SUCCESS,
//   FIND_PRODUCT_BY_ID_FAILURE
// } from './ActionTypes';

// export const findProduct = (reqData) => async (dispatch) => {
//   dispatch({ type: FIND_PRODUCTS_REQUEST });

//   const { colors, sizes, minPrice, maxPrice, minDiscount, category, stock, sort, pageNumber, pageSize } = reqData;
//   try {
//     const { data } = await api.get(`/api/products`, {
//       params: {
//         colors,
//         sizes,
//         minPrice,
//         maxPrice,
//         minDiscount,
//         category,
//         stock,
//         sort,
//         pageNumber,
//         pageSize
//       }
//     });
//     dispatch({ type: FIND_PRODUCTS_SUCCESS, payload: data });
//   } catch (error) {
//     dispatch({ type: FIND_PRODUCTS_FAILURE, payload: error.message });
//   }
// };

// export const findProductById = (reqData) => async (dispatch) => {
//   dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST });
//   const { productId } = reqData;
//   try {
//     const { data } = await api.get(`/api/products/id/${productId}`);
//     dispatch({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data });
//   } catch (error) {
//     dispatch({ type: FIND_PRODUCT_BY_ID_FAILURE, payload: error.message });
//   }
// };
