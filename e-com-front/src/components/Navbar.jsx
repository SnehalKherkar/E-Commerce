import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';



const Container = styled.div`
height:60px;
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`
const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
`
const Center = styled.div`
flex: 1;
text-align: center;

`
const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
`
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`
const Input = styled.input`
    border: none;
`
const Logo = styled.h1`
    font-weight: bold;
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`

const Navbar = () => {
    const quantity = useSelector(state => state.cart.quantity)
    const navigate = useNavigate()
    
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>English</Language>
                    <SearchContainer>
                        <Input />
                        <SearchIcon style={{color:"gray",fontSize:"16px"}} />
                    </SearchContainer>
                </Left>
                <Center><Logo>JENNIE</Logo></Center>
                <Right>
                    <MenuItem onClick={()=>navigate("/register")}>REGISTER</MenuItem>
                    <MenuItem onClick={()=>navigate("/login")}>SIGN IN</MenuItem>
                    <MenuItem onClick={()=>navigate("/cart")}>
                        <Badge badgeContent={quantity} color="success">
                            <ShoppingCartOutlinedIcon />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
