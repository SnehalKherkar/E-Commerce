import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Navbar from '../components/Navbar';
import { useSelector } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { useNavigate } from 'react-router-dom';
import { userRequest } from '../../requestMethods';
import axios from 'axios';


const KEY = "pk_test_51OnHvfSAGqp1RH8QqpoqtpZYvIerLvl8oNS4yXJzePEso1HPC8cpuhfNgSKcSw0NujU7IRSUKm3XYYZkCZfNzGUZ00QDGjplec"

const Container = styled.div``;
const Wrapper = styled.div`
padding: 20px;
`;
const Title = styled.h1`
font-weight:300;
text-align: center;
`;
const TOP = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;

`;
const TopButton = styled.button`
padding: 10px;
font-weight: 600;
cursor: pointer;
border:${props => props.type === "filled" && "none"} ;
background-color:${props => props.type === "filled" ? "black" : "transparent"} ;
color:${props => props.type === "filled" && "white"} ;
`;
const TopTexts = styled.div``;
const TopText = styled.span`
text-decoration: underline;
cursor: pointer;
margin:  0px 10px;
`;


const Bottom = styled.div`
display: flex;
justify-content: space-between;

`;
const Info = styled.div`
flex: 3;
`;

const Product = styled.div`
display: flex;
justify-content: space-between;
`;
const ProductDetail = styled.div`
flex: 2;
display: flex;
`;
const Image = styled.img`

width: 200px;

`;
const Details = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${(props) => props.color};
`;
const ProductSize = styled.span``;
const PriceDetail = styled.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;
const ProductAmountContainer = styled.div`
display: flex;
align-items: center;
margin-bottom:20px ;
`;
const ProductAmount = styled.div`
font-size: 24px;
margin: 5px;
background-color: yellow;
`;
const ProductPrice = styled.div`
font-size:30px;
font-weight: 200;
background-color: yellow;


`;

const Hr = styled.hr`
    background-color:#eee;
    border: none;
    height: 1px;
`;


const Summary = styled.div`
flex: 1;
border: 0.5px solid lightgray;
border-radius: 10px;
padding: 20px;
height: 50vh;
`;
const SummartTitle = styled.h1`
font-weight: 200;
`;
const SummaryItem = styled.div`
display: flex;;
justify-content: space-between;
margin:30px 0px;
font-weight: ${props => props.type === "total" && "500"};
font-size: ${props => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const SummaryButton = styled.button`
width: 100%;
padding: 10px;
background-color: black;
color: white;
font-weight: 600;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;


function Cart() {
    const navigate = useNavigate();
    const cart = useSelector(state => state.cart);
    const [stripeToken, setStripeToken] = useState(null);

    const onToken = (token) => {
        setStripeToken(token)
        navigate("/success")
    }
    console.log(stripeToken)

    // useEffect(() => {
    //     const makeRequest = async () => {
    //         try {
    //             const res = await axios.post("http://localhost:1000/api/checkout/payment", {
    //                 tokenId: stripeToken.id,
    //                 amount: 500,
    //             })
    //             navigate("/success")
    //             console.log(":::::::::", res)
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }
    //     stripeToken && makeRequest()
    // }, [stripeToken, cart.total])

    

    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <Title>YOUR BAG</Title>
                <TOP>
                    <TopButton onClick={() => navigate("/")}>CONTINUE SHOPPING</TopButton>
                    <TopTexts>


                        <TopText>Shooping Bag(2)</TopText>
                        <TopText>Your Wishlist (0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">CHECK OUT</TopButton>
                </TOP>
                <Bottom>
                    <Info>
                        {cart.products.map((product) => {
                            return (
                                <div>
                                    <Product>
                                        <ProductDetail>
                                            <Image src={product.img} />
                                            <Details>
                                                <ProductName><b>Product:</b>{product.title}</ProductName>
                                                <ProductId><b>ID:</b>{product._id}</ProductId>
                                                <ProductColor color={product.color} />

                                                <ProductSize><b>Size:</b>{product.size}</ProductSize>

                                            </Details>
                                        </ProductDetail>
                                        <PriceDetail>
                                            <ProductAmountContainer>
                                                <AddIcon />
                                                <ProductAmount>{product.quantity}</ProductAmount>
                                                <RemoveIcon />
                                            </ProductAmountContainer>
                                            <ProductPrice>{product.price * product.quantity}/-</ProductPrice>
                                        </PriceDetail>
                                    </Product>
                                </div>
                            )
                        })
                        }
                        <Hr />

                    </Info>
                    <Summary>
                        <SummartTitle>ORDER SUMMARY</SummartTitle>
                        <SummaryItem>
                            <SummaryItemText>Sub Total</SummaryItemText>
                            <SummaryItemPrice>${cart.total}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>$5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>$-5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText >Total</SummaryItemText>
                            <SummaryItemPrice>${cart.total}</SummaryItemPrice>
                        </SummaryItem>
                        <StripeCheckout
                            name="Lama Shop"
                            image="https://avatars.githubusercontent.com/u/1486366?v=4"
                            billingAddress
                            shippingAddress
                            description={`Your total is $${cart.total}`}
                            amount={cart.total * 100}
                            token={onToken}
                            stripeKey={KEY}
                            
                        >
                            <Button >CHECKOUT NOW</Button>                        </StripeCheckout>
                    </Summary>


                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    );
}

export default Cart;
