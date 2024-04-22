import React, { useState } from 'react';
import styled from 'styled-components';
import { mobileDevice } from '../responsive';
import { useNavigate } from 'react-router-dom';
import { login } from '../redux/apiCalls';
import { useDispatch, useSelector } from 'react-redux';

const Container=styled.div`
width: 100vw;
height: 100vh;
background:  linear-gradient(rgba(255,255,255,0.5),
rgba(255,255,255,0.5)),  url("https://i.pinimg.com/736x/6e/f5/10/6ef5108ea2f75d7b34e1a732cee57737.jpg") center;
display: flex;
align-items: center;
justify-content: center;
background-size: cover;


`;
const Wrapper=styled.div`
width: 25%;
padding: 20px;
background-color: white;
${mobileDevice({width:"75%"})}




`;
const Title=styled.h1`
font-size: 24px;
font-weight: 300;

`;
const Form=styled.form`
display: flex;
flex-direction: column;
`;
const Input=styled.input`
flex:1;
min-width: 40%;
margin: 10px 0px;
padding: 10px;

`;

const Button=styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: teal;
color: white;
cursor: pointer;
margin: 10px;
&:disabled{
  color: green;
  cursor: not-allowed;
}
`; 
const Link=styled.a`
margin: 5px 0px;
font-size: 12px;
text-decoration: underline;
cursor: pointer;

`;

const Error = styled.span`
  color: red;
`



function LogIn() {
  const navigate = useNavigate()
  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")
  const dispatch = useDispatch();
  const {error} = useSelector(state => state.user)
  console.log("-------------")

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await login(dispatch, { username, password });
      console.log("Login response:", response);
      
      if (response) {
        navigate("/");
      } 
    } catch (error) {
      console.error("Login error:", error);
    }
  };
  return (
    <Container>
    <Wrapper>
      <Title>SIGN IN</Title>
      <Form>
          <Input placeholder="ENTER USERNAME" value={username} onChange={(e)=>setUsername(e.target.value)}/>
          <Input placeholder="ENTER PASSWORD" value={password} onChange={(e)=>setPassword(e.target.value)}/>
          <Button onClick={handleLogin}>LOG IN</Button>
          {error && <Error>Something went wrong........</Error>}
          <Link>DO NOT YOU REMEBER THE PASSWORD</Link>
          <Link onClick={()=>navigate("/register")}>CREATE NEW ACCOUNT</Link>
      </Form>
    </Wrapper>
  </Container>
  );
}

export default LogIn;
