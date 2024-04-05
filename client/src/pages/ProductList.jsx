import styled from "styled-components"
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";


const Container= styled.div`

`;

const Title= styled.h1`

`;

const FilterContainer= styled.div`

`;

const Filter= styled.div`

`;

const ProductList = () => {
  return (
    <Container>
        <Announcement/> 
        <Navbar/>
        <Title>Sản phẩm</Title>
        <FilterContainer>
            <Filter>filter1</Filter>
            <Filter>filter2</Filter>
        </FilterContainer>
    </Container>
  )
}

export default ProductList
