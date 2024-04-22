import styled from "styled-components";
import { popularProduct } from "../data";
import Product from "./Product";
import { useEffect, useState } from "react";
import axios from "axios";

const Container = styled.div`
padding: 20px;
display: flex;
flex-wrap:wrap ;
justify-content: space-between;



`

function Products({ cat, filter, sort }) {

  const [product, setProduct] = useState([])
  const [filteredProduct, setFilteredProduct] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(cat ? `http://localhost:1000/api/product?category=${cat}` : "http://localhost:1000/api/product")
        setProduct(res.data)
        console.log(res)
      } catch (error) {
        console.log(error)
      }
    }
    getProduct()
  }, [cat,filter])

  useEffect(() => {
    cat && setFilteredProduct(
      product.filter((item) =>
        Object.entries(filter).every(([key, value]) =>
          item[key].includes(value)
        )
      )
    )
  }, [product, cat, filter]);

  useEffect(()=>{

    if(sort === "newest"){
      setFilteredProduct((prev)=> 
      [...prev].sort((a,b) => a.createdAt - b.createdAt)
      );
    }else if(sort === "asc"){
      setFilteredProduct((prev)=>
      [...prev].sort((a,b)=> a.price - b.price)
       );
    }else{
      setFilteredProduct((prev)=>
      [...prev].sort((a,b)=> b.price - a.price)
      )
    }
  },[sort])


  return (
    <Container>
      { cat ? 
        filteredProduct.map((item) => (
          <Product item={item} key={item.id} />
        )) : product.slice(0,10).map((item) => (
          <Product item={item} key={item.id} />
        ))
      }
    </Container>
  );
}

export default Products;