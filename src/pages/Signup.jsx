import styled from "styled-components";
import login from "../images/login.png";
import Navbar from "../components/Navbar";

const Container = styled.div``;
const SmallCont = styled.div`
  display: flex;
`;
const SmallCont1 = styled.div`
  flex: 1.1;
  justify-content: center;
  align-items: center;
`;
const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  //   border: 1px solid black;
  heigth: 100%;
  width: 100%;
  //   border: 1px solid blue;
`;
const ImgCont = styled.div`
  flex: 0.9;
  height: 100vh;
  background-position: contain;
`;
const Img = styled.img`
  height: 100vh;
  width: 100%;
  background-repeat: no-repeat;
`;
const SmallerCont = styled.div`
  //   border: 1px solid red;
  height: 99vh;
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 2rem;
`;
const Input = styled.input`
  padding: 0.5rem;
  width: 70%;
  margin-bottom: 0.7rem;
  border-radius: 0.2rem;
  font-size: 0.8rem;
  border: 0.5px solid gray;
  &::placeholder {
    // margin-left: 5rem;
    padding: 0.5rem;
    font-size: 12px;
    color: gray;
  }
  &:hover {
    border: 1px solid #00b050 !important;
  }
`;
// const Checkbox = styled.checkbox``;
const Button = styled.button`
  float: left;
  //   align-self: flex-end;
  margin-top: 1rem;
  margin-left: 12rem;
  color: white;
  width: 8rem;
  border: none;
  border-radius: 10%;
  background-color: #00b050;
  font-family: IBM Plex Sans;
  padding: 0.5rem 2rem;
  font-size: 0.8rem;
`;
const Signup = () => {
  return (
    <Container>
      <Navbar />
      <SmallCont>
        <SmallCont1>
          <Form>
            <SmallerCont>
              <Input placeholder="Enter Full Name"></Input>
              <Input placeholder="Enter Your Email"></Input>
              <Input
                type="password"
                placeholder="Enter Your Password(Min. 8 Character) "
              ></Input>
              <Input type="password" placeholder="Confirm Passowrd"></Input>
              {/* <Checkbox /> */}
              <Input placeholder="Identification Number (for verification purpose)"></Input>
              <Input placeholder="Address"></Input>
              {/* <Checkbox /> */}

              <Button>Next</Button>
            </SmallerCont>
          </Form>
        </SmallCont1>
        <ImgCont>
          <Img src={login} />
        </ImgCont>
      </SmallCont>
    </Container>
  );
};

export default Signup;
