import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { mobileDevice } from "../responsive";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/Newsletter";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { userRequest } from "../../requestMethods";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/cartRedux";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobileDevice({ padding: "10px", flexDirection: "column" })}
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobileDevice({ heigth: "40%" })}
`;
const InfoContainer = styled.div`
  padding: 0px 50px;
  flex: 1;
  ${mobileDevice({ padding: "10px" })}
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;
const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;
const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #f8f4f4;
  }
`;

function ProductPage() {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("")
  const [size, setSize] = useState("")
  const dispatch = useDispatch();


  useEffect(() => {
    const getProduct = async () => {
      const res = await userRequest.get("/product/find/" + id);
      setProduct(res.data);
    };
    getProduct();
  }, []);

  const handleQuantity = (e) => {
    if (e === "dec") {
      quantity > 1 && setQuantity(quantity - 1)
    } else {
      setQuantity(quantity + 1)
    }
  }

  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity, color,size }))
  }
  const handleSize = (e) =>{
    setSize(e.target.value)
  }
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImageContainer>
          <div style={{ display: "flex" }}>
            <Image src={product.img} style={{ width: "300px" }} />
            <InfoContainer>
              <Title>{product.title}</Title>
              <Desc>{product.desc}</Desc>
              <Price>$:{product.price}</Price>
              <FilterContainer>
                <Filter>
                  <FilterTitle>Color: </FilterTitle>
                  {product.color?.map((c) => {
                    return (
                      <div>
                        <FilterColor color={c} key={c} onClick={() => setColor(c)} />
                      </div>
                    )
                  })}
                </Filter>
                <Filter>
                  <FilterTitle>Size</FilterTitle>
                  <select name="size" id="size" value={size} onChange={handleSize}>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                  </select>
                  
                  {/* <FilterSize>
                    {product.size?.map((sized,index) => {
                      return (
                        <div>
                          <FilterSizeOption key={index} onClick={()=>setSize()}>{sized}</FilterSizeOption>
                        </div>
                      )
                    })}

                    <FilterSizeOption>S</FilterSizeOption>
                    <FilterSizeOption>M</FilterSizeOption>
                    <FilterSizeOption>L</FilterSizeOption>
                    <FilterSizeOption>XL</FilterSizeOption>
                    <FilterSizeOption>XXL</FilterSizeOption>
                  </FilterSize> */}

                </Filter>
              </FilterContainer>

              <AddContainer>
                <AmountContainer>
                  <button onClick={() => handleQuantity("dec")}>-</button>
                  <Amount>{quantity}</Amount>
                  <button onClick={() => handleQuantity("inc")}  >+</button>
                </AmountContainer>
                <Button onClick={handleClick}>ADD TO CART</Button>
              </AddContainer>
            </InfoContainer>
          </div>
        </ImageContainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  );
}

export default ProductPage;
