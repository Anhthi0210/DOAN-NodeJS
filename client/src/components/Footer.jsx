import { Facebook, Instagram, MailOutline, Phone, Room, Twitter } from "@material-ui/icons";
import styled from "styled-components"
import { mobile } from "../responsive";

const Container= styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })}
`;

const Left= styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo= styled.h1`

;`

const Description= styled.p`
    margin: 20px 0px;
;`

const SocialContainer= styled.div`
    display: flex;
;`

const SocialIcon= styled.h1`
    width: 40px;
    height: 40px;
    border-radius:50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
;`
const Center= styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })}
`;

const Title= styled.h3`
    margin-top: 30px;
`;

const List= styled.ul`
    margin:0;
    padding:0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem= styled.div`
    width: 50%;
    margin-bottom: 10px;
`;

const Right= styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem= styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Payment=styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>s.Minit</Logo>
        <Description>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, temporibus aut maiores soluta id iusto dolores in laboriosam possimus cupiditate inventore ipsum rerum autem unde. Molestias itaque reiciendis officia adipisci!
        </Description>
        <SocialContainer>
            <SocialIcon color="385995">
                <Facebook/>
            </SocialIcon>
            <SocialIcon color="E4405F">
                <Instagram/>
            </SocialIcon>
            <SocialIcon color="55ACEE"> 
                <Twitter/>
            </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Truy cập hữu dụng</Title>
        <List>
            <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Liên hệ</Title>
        <ContactItem><Room style={{marginRight:"10px"}}/>Thu Duc, Ho Chi Minh</ContactItem>
        <ContactItem><Phone style={{marginRight:"10px"}}/>+84 338 443 192</ContactItem>
        <ContactItem><MailOutline style={{marginRight:"10px"}}/>contact@s.minit</ContactItem>
        <Payment src="https://t4.ftcdn.net/jpg/05/44/11/61/360_F_544116186_wMwylR2U7NpAx90eZJlAyLkbnravVpCW.jpg"/>
      </Right>
    </Container>
  )
}

export default Footer
