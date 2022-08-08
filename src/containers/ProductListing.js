import React, {useEffect} from 'react';
import ProductComponent from './ProductComponent';
import axios from 'axios';
import{setProducts} from '../redux/actions/productActions'
import { useDispatch, useSelector } from 'react-redux';

const ProductListing = ()=> {
    const products = useSelector(state => (state.allProducts.products))
    const dispatch =useDispatch()


    const fetchProducts = async () => {
        const response = await axios.get('https://fakestoreapi.com/products').catch((err) =>{
            console.log('err',err);
        });
        dispatch(setProducts(response.data))
    };

    useEffect(() => {
        fetchProducts()
    }, [])
    console.log("Products: " , products)
    return(
     <div className = "ui grid container">
        <ProductComponent />
     </div>
    );
};

export default ProductListing;

