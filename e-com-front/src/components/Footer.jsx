import React from 'react';
import styled from "styled-components";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import RoomIcon from '@mui/icons-material/Room';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import { mobileDevice } from '../responsive';
const Container =  styled.div`
display: flex;
${mobileDevice({flexDirection:"column"})};

`;
const Left =  styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`;
const Logo=styled.h1`
    
`;
const Desc=styled.p`
margin: 20px 0px;
    
`;
const SocialConatiner=styled.div`
display: flex;
    
`;
const SocialIcon=styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${props=>props.color};
align-items: center;
display: flex;
justify-content: center;
margin-right: 20px;
    
`;

const Center =  styled.div`
flex: 1;
padding: 20px;
${mobileDevice({display:"none"})};
`;
const Title=styled.h3`
margin-bottom:30px;
`;
const List=styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`;
const ListItem=styled.li`
width: 50%;
margin-bottom: 10px;
`
const Right =  styled.div`
flex:1;
padding:20px;
${mobileDevice({backgroundColor:"#eee"})};
`;


const ContactItem= styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;


`;

const Payment=styled.img`
width: 100%;
`;


function Footer() {
  return (
    <Container>
      <Left><Logo>E-SHOP</Logo>
      <Desc>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat excepturi quasi error, dolorum rem reprehenderit minima nisi velit ipsam vel sit quam. Cupiditate voluptas soluta dolores dolorem, iure maiores quod.</Desc>
      <SocialConatiner>
      <SocialIcon color="3B5999">
<FacebookIcon/>
      </SocialIcon>
      <SocialIcon color="E4405F">
<InstagramIcon/>
      </SocialIcon>
      <SocialIcon color="55ACEE">
<TwitterIcon/>
      </SocialIcon>
      <SocialIcon color="3B5999">
<PinterestIcon/>
      </SocialIcon>
      </SocialConatiner>
      
      
      </Left>
      <Center>
      <Title>UseFull Links</Title>
      <List>
      <ListItem>Home</ListItem>
      <ListItem>Cart</ListItem>
      <ListItem>Man Fashion</ListItem>
      <ListItem>Women Fashion</ListItem>
      <ListItem>Acessories</ListItem>
      <ListItem>My Account</ListItem>
      <ListItem>Wishlist</ListItem>
      <ListItem>Tern and Condition</ListItem>

      </List>
      </Center>
      <Right>
      <Title>Contact</Title>
      <ContactItem>
      <RoomIcon style={{marginRight:"10px"}}/>
      622 DP Road, Aundh , pune 410007
      </ContactItem>
      <ContactItem>
      <LocalPhoneIcon style={{marginRight:"10px"}}/>
      +91 754 575 48568
      </ContactItem>
      <ContactItem>
      <EmailIcon style={{marginRight:"10px"}}/>
      contact@E-shop.com
      </ContactItem>
      <Payment src="https://www.pngitem.com/pimgs/m/133-1336697_all-major-credit-cards-accepted-accepted-major-credit.png"/>
      </Right>
    </Container>
  );
}

export default Footer;
