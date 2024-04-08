import styled from 'styled-components'
import { SearchSharp, ShoppingCartSharp } from '@material-ui/icons'
import { Badge, IconButton } from '@material-ui/core';
import { mobile } from '../responsive';

const Container= styled.div`
    height: 75px;
    margin-top:-25px;
    ${mobile({ height: "50px" , marginBottom: "15px"})}
`;

const Wrapper= styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ padding: "10px 0px" })}
`;
const Left= styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    ${mobile({ marginLeft: "-25px" })}
`;
const Language= styled.div`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: "none" })}
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
    ${mobile({ flex: 2, justifyContent: "center"})}
`;

const Input= styled.input`
    border: none;
    ${mobile({ width: "50px" })}
`;

const Logo= styled.h1`
    font-weight: bold;
    ${mobile({ fontSize: "24px" })}
`;

const MenuItem= styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const SearchContainer= styled.div`
    border: 0.5px solid lightgray;
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
            <Language>VI</Language>
            <SearchContainer>
                <Input placeholder='Tìm kiếm'/>
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
