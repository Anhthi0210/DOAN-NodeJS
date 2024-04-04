import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components"
import {sliderItems} from "../data"


const Container= styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: #E0F4FF;
    position: relative;
    overflow: hidden;
    z-index:2;
`;

const Wrapper= styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${props=>props.slideIndex * -100}vw);
    transition: all .5s ease-in-out;
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=>props.direction==="left" && "10px"};
    right: ${props=>props.direction==="right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 1;
`;

const Slide= styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props=>props.bg};
`;

const Image= styled.img`
    height: 80%;
`;

const ImagContainer= styled.div`
    flex: 1;
    height: 100%;
`;

const InfoContainer= styled.div`
    flex: 1;
    padding: 40px;
`;

const Title= styled.h1`
    font-size: 70px;
`;

const Desc= styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 3px;
`;

const Button= styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`;

const Slider = () => {

    const [slideIndex, setSlideIndex]= useState(0);
    const handleClick =(direction) => {
        if(direction ==="left"){
            setSlideIndex(slideIndex>0 ? slideIndex-1 : 2);
        }else{
            setSlideIndex(slideIndex<2 ? slideIndex+1 : 0);
        }

    };

  return (
    <Container>
      <Arrow direction="left" onClick={()=>handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item)=>(
            <Slide bg={item.bg} key={item.id}>
                <ImagContainer>
                    <Image src={item.img}/>
                </ImagContainer>
                <InfoContainer>
                    <Title>
                        {item.title}
                    </Title>
                    <Desc>
                        {item.desc}
                    </Desc>
                    <Button>
                        MUA NGAY
                    </Button>
                </InfoContainer>
            </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={()=>handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  )
}

export default Slider
