import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Products from '../components/Products';
import Footer from '../components/Footer';
import { mobileDevice } from '../responsive';
import Navbar from '../components/Navbar';
import NewsLetter from '../components/Newsletter';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';


const Container = styled.div``;
const Title = styled.h1`
margin: 20px;
`;
const FilterContainer = styled.div`
display: flex;
justify-content: space-between;

`;
const Filter = styled.div`
margin: 20px;
${mobileDevice({ margin: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
font-size: 20px;
font-weight: 600;
margin-right: 20px;
${mobileDevice({ margineRight: "0px" })}

`;
const Select = styled.select`
padding: 10px;
margin-right: 20px;
${mobileDevice({ margin: "10px 0px" })}

`;

const Option = styled.option``;


function ProductList() {

  const location = useLocation()
  const cat = location.pathname.split("/")[2]
  const [filter, setFilter] = useState({});
  const [sort,setSort] = useState("newest")

  const handleFilter = (e)=>{
    const value = e.target.value;
    setFilter({
      ...filter,
      [e.target.name] : value
    })
  }
  console.log(filter)

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name='color' onChange={handleFilter}>
            <Option>Color</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>yellow</Option>
            <Option>green</Option>
          </Select>
          <Select name='size' onChange={handleFilter}>
            <Option disabled selected>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
            <Option>XXL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e)=>setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (High-Low)</Option>
            <Option value="desc">Price (Low-High)</Option>

          </Select>

        </Filter>

      </FilterContainer>

      <Products cat={cat} filter={filter} sort={sort} />
      <NewsLetter />
      <Footer />
    </Container>
  );
}

export default ProductList;
