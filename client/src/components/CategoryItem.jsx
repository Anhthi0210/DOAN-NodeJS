import styled from "styled-components"

const Container = styled.div`
    flex: 1;
    margin: 5px;
    height: 80vh;
    position: relative;
`;

const Image = styled.img`
    width: 90%;
    height: 100%;
    object-fit: cover;
`;

const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.h1`
    color:#c4a691 ;
    margin-bottom:20px;
    background-color:  white;
    padding: 1px 3px;
    border: 1px solid #c4a691;
`;

const Button = styled.button`
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`;

const CategoryItem = ({item}) => {
  return (
    <Container>
      <Image src={item.img}/>
      <Info>
        <Title>{item.title}</Title>
        <Button>MUA NGAY</Button>
      </Info>
    </Container>
  )
}

export default CategoryItem
