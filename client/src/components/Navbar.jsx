import React from 'react'
import styled from 'styled-components'
import { SearchSharp, ShoppingCartSharp } from '@material-ui/icons'
import { Badge, IconButton } from '@material-ui/core';

const Container= styled.div`
    height: 80px;
    margin-top:-25px;
`;

const Wrapper= styled.div`
    padding: 10px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const Left= styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;
const Languaged= styled.div`
    font-size: 14px;
    cursor: pointer;
`;
const Center= styled.div`
    flex: 1;
    text-align: center;
`;

const Right= styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const Input= styled.input`
    border: none;
`;

const Logo= styled.h1`

`;

const MenuItem= styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`;

const SearchContainer= styled.div`
    border: .5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left:25px;
    padding:5px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
            <Languaged>VI</Languaged>
            <SearchContainer>
                <Input/>
                <SearchSharp style={{color:"gray", fontSize:16}}/>
            </SearchContainer>
        </Left>
        <Center>
          <Logo>s.Minit</Logo>
        </Center>
        <Right>
          <MenuItem>Đăng kí</MenuItem>
          <MenuItem>Đăng nhập</MenuItem>
          <MenuItem>
            <IconButton aria-label='cart'>
              <Badge badgeContent={4} color='primary'>
                <ShoppingCartSharp/>
              </Badge>
            </IconButton>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
