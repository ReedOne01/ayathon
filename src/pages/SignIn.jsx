import styled from "styled-components";
import login from "../images/signIn.png";
import Navbar from "../components/Navbar";

const Container = styled.div`
  height: 100%;
  width: auto;
`;
const SmallCont = styled.div`
  display: flex;
`;
const SmallCont1 = styled.div`
  flex: 1.1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  //   border: 1px solid red;
`;
const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  //   border: 1px solid black;
  height: 25rem;
  width: 100%;
  //   border: 1px solid blue;
`;
const H2 = styled.h2`
  font-family: Montserrat;
  letter-spacing: 4%;
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
    // border: 1px solid #00b050 !important;
  }
`;
// const Checkbox = styled.checkbox``;
const Button = styled.button`
  float: left;
  margin-top: 1rem;
  color: white;
  width: 70%;
  height: 3rem;
  border: none;
  border-radius: 5%;
  background-color: #00b050;
  font-family: IBM Plex Sans;
  padding: 0.5rem 2rem;
  font-size: 0.9rem;
`;
const OrContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 0.7rem;
  //   border: 1px solid red;
  //   height: 1rem;
  font-size: 0.8rem;
`;
const Hr = styled.hr`
  height: 0.7rem;
  width: 9rem;
  color: #0e0e0e80;
  //   border: 1px solid black;
  align-self: center;
`;
const TextCont = styled.div``;
const P = styled.p`
  color: gray;
  font-size: 0.8rem;
`;
const SignIn = () => {
  return (
    <Container>
      <Navbar />
      <SmallCont>
        <SmallCont1>
          <Form>
            <H2>
              {" "}
              Welcome back, <span>Shone</span>
            </H2>
            <SmallerCont>
              <Input placeholder="Enter Your Email"></Input>
              <Input
                type="password"
                placeholder="Enter Your Password(Min. 8 Character) "
              ></Input>
              {/* <Checkbox /> */}

              <Button>Sign In</Button>
              <OrContainer>
                <Hr /> OR <Hr />
              </OrContainer>
              <Button>Contin ue with Google</Button>
            </SmallerCont>
          </Form>
          <TextCont>
            <P>
              Don’t have an Afri-vote account?{" "}
              <span style={{ color: "#00b050" }}>Register Now</span>
            </P>
          </TextCont>
        </SmallCont1>
        <ImgCont>
          <Img src={login} />
        </ImgCont>
      </SmallCont>
    </Container>
  );
};

export default SignIn;
