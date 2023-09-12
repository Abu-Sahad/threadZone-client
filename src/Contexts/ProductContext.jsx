import axios from 'axios';
import React, { createContext, useReducer, useEffect, useState } from 'react';

const ProductContext = createContext();

const initialState = {
  sortBy: null,
  filterByRating: null,
  minPrice: null,
  maxPrice: null,
  size: null,
  color: null,
  category: null,
  page: 1,
  shopId:null
};

const productReducer = (state, action) => {
  switch (action.type) {
    case 'SET_DEFAULT':
      return {...state,state:initialState};
    case 'SORT_BY':
      return { ...state, sortBy: action.payload };
    case 'FILTER_BY_RATING':
      return { ...state, filterByRating: action.payload };
    case 'FILTER_BY_PRICE':
      return { ...state, minPrice: action.payload.min, maxPrice: action.payload.max };
    case 'SIZE_BY':
      return { ...state, size: action.payload };
    case 'FILTER_BY_COLOR':
      console.log("test ", action.payload)
      return { ...state, color: action.payload };
    case 'FILTER_BY_CATEGORY':
      return { ...state, category: action.payload };
    case 'SET_PAGE':
      return { ...state, page: action.payload };
    case 'SET_TOTAL_PRODUCT':
      return { ...state, totalProduct: action.payload };
    case 'SET_SHOP':
       return {...state,shopId:action.payload};
    default:
      return state;
  }
};

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  return (
    <ProductContext.Provider value={{ state, dispatch}}>
      {children}
    </ProductContext.Provider>
  );
};

//const useProductContext = () => useContext(ProductContext);

export { ProductProvider, ProductContext };
