import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
    );
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 50%;
    padding: 20px;
    background-color: white;
    ${mobile({ width: "75%" })}
`;

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`;

const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;

`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Tạo tài khoản mới</Title>
        <Form>
            <Input placeholder="Tên" type="text"/>
            <Input placeholder="Họ"type="text"/>
            <Input placeholder="Username"type="text"/>
            <Input placeholder="Email" type="email"/>
            <Input placeholder="Mật khẩu" type="password"/>
            <Input placeholder="Xác nhận mật khẩu" type="password"/>
            <Agreement>
                Bằng việc đăng ký, bạn đã đồng ý với s.Minit về <b>Điều khoản dịch vụ</b> và <b>Chính sách bảo mật</b>
            </Agreement>
            <Button>Đăng ký</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register
