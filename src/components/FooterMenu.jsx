import styled from "styled-components";
import logo from "../images/Frame 4.png";
import insta from "../images/Group 1.png";
import facebook from "../images/Vector.png";
import twitter from "../images/Vector (1).png";
import linkedIn from "../images/Vector (2).png";

// Linear-Gradient
//   #060709
//   100%
//   #1A2129

const Container = styled.div`
  height: 100%;
  padding: 1rem 2rem;
  margin-top: 8rem;
  // background-color: linear-gradient(45deg, #060709, #1a2129);
  background-color: #1a2129;
  color: white;
  font-family: "Poppins", sans-serif;
  font-family: "Urbanist", sans-serif;
`;
const SmallCont = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center
  flex-wrap: wrap;
`;
const Casing = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  gap: 1.5rem;
  height: 100%;
  width: 100%;
  padding-right: 2rem;
  // border: 1px solid red;
`;
const Title = styled.p`
  margin-bottom: 1rem;
  font-size: 18px;
  font-weight: 600;
  font-family: IBM Plex Sans;
`;
const Content = styled.div`
  border: 1px dash blue;
  padding: 2rem;
  font-size: 12px;
`;
const Content1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // border: 1px solid red;
  height: 8rem;
  width: auto;
  font-size: 12px;
`;
const List = styled.li`
  list-style-type: none;
  font-size: 14px;
  margin-bottom: 1rem;
  font-family: Open Sans;
`;
const Img = styled.img`
  height: 3.5rem;
  width: 2rem;
`;
const Input = styled.input`
  border-radius: 5px;
  height: 2.5rem;
  width: 15rem;
`;
const Text = styled.p`
  font-size: 12px;
`;
const Container2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  // text-align: center;
  color: gray;
  // flex-wrap: wrap;
  gap: 1.5em;
  width: 87%;
  border-top: 1px solid gray;
  // padding-top: 2rem;
  // border: 1px solid gray;
`;
const Container3 = styled.div`
  display: flex;
  // border: 1px solid gray;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 1rem;
`;
const Cont = styled.p``;
const LogoCont = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  // border: 1px solid gray;
`;
const Img2 = styled.img``;
const FooterMenu = () => {
  return (
    <Container>
      <Casing>
        <Content1>
          <Img src={logo} />
          Afri-Vote
        </Content1>
        <Content>
          <Title>Navigation</Title>
          <List>Home</List>
          <List>About</List>
          <List>Contact Us</List>
          <List>Login/Register</List>
        </Content>
        <Content>
          <Title>Contact/Support</Title>
          <List>support@afri-vote.com </List>
          <List>+123567890</List>
          <List>Mon-fri, 9AM - 6PM (UTC)</List>
        </Content>
        <Content>
          <List>Subcribe </List>
          <List>
            <Input placeholder="example@gmail.com" className="input" />
          </List>
          <List>
            <Text>
              Join our newsletter to stay up to date on feature and releases
            </Text>
          </List>
        </Content>
      </Casing>
      <SmallCont>
        <Container2>
          <Container3>
            <Cont> &copy; 2024 Afri-Vote. All right reserved.</Cont>
            <Cont>Privacy Policy</Cont>
            <Cont>Terms of Services</Cont>
          </Container3>
          <LogoCont>
            <Img2 src={insta} />
            <Img2 src={facebook} />
            <Img2 src={twitter} />
            <Img2 src={linkedIn} />
          </LogoCont>
        </Container2>
      </SmallCont>
    </Container>
  );
};

export default FooterMenu;
