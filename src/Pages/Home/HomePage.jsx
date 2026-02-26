import "./HomePage.css";
import { useEffect, useState } from "react";
import { useSearchParams } from 'react-router';
import Header from '../Header.jsx'
import axios from 'axios';
import Product from "./Product.jsx";

function HomePage({cart, loadCart}) {

    const [products, setProducts] = useState([]);
    const [searchParams] = useSearchParams();
  const search = searchParams.get('search');
    

    useEffect(()=>{
        const getHomedata = async()=>{  
            const urlPath = search ? `/api/products?search=${search}` : '/api/products';
      const response = await axios.get(urlPath);
               setProducts(response.data);
        };
        getHomedata();
    }, [search]);
    
    return (
        <>
            <title>Ecommerce</title>

            <Header cart={cart} />

            <div className="home-page">
                <div className="products-grid">
                    {products.map((product) => {
                        return (
                            <Product key={product.id} product={product} loadCart={loadCart}/>
                        )
                    })}
                </div>
            </div>
        </>
    );
}

export default HomePage;