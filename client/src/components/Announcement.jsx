import { LocalShippingSharp } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';

const Container= styled.div`
    height: 30px;
    background-color: #88AB8E;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size:14px;
`;

const Announcement = () => {
  return (
    <Container>
       <LocalShippingSharp/>  Super Deal! Free ship cho đơn hàng trên 299K xiền  <LocalShippingSharp/> 
    </Container>
  )
}

export default Announcement
