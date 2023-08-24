import styled from "styled-components";
import logo from "../images/Frame 4.png";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  font-family: Open Sans;
  // background-color: white;
`;
const SmallCont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  // flex: 1;
  width: 55%;
  // border: 1px solid yellow;
  height: 2.5rem;
`;
const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 4rem;
  width: 100%;
  // border: 1px solid red;
`;
const ImgCont = styled.div`
  // background: white;
  height: 3.5rem;
  width: auto;
  display: flex;
  // flex: 1.1;
  align-items: center;
  flex-direction: column;
  color: white;
  justify-content: center;
  // border: 1px solid red;
`;
const Img = styled.img`
  background: white;
  margin-top: 1rem;
  height: 2.2rem;
`;
const Ul = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  gap: 2.5rem;
  margin-top: 1rem;
  position: relative;

  &::after {
    content: "";
    width: 0px;
    height: 3px;
    position: absolute;
    bottom: 0px;
    left: 50%;
    transform: translate(-50%);
    background: white;
    transition: width 0.5s ease;

    &hover::after {
      width: 20px;
      bottom: -1px;
  }
`;
const Li = styled.li`
  list-style: none;
  color: white;
  cursor: pointer;
  font-family: Open Sans;

  &:hover {
    color: #00b050;
  }
`;
const BtnCont = styled.div`
  // border: 1px solid red;
`;
const Button = styled.button`
  border: 0.5px solid white;
  margin-left: 0.5rem;
  padding: 0.6rem 1.5rem;
  border-radius: 10px;
  background: none;
  color: white;
  font-family: Open Sans;
  background-color: ${(props) =>
    props.type === "secondBtn" ? "#00b050" : "transparent"};
  // color: ${(props) => (props.type === "secondBtn" ? "white" : "#00b050")};

  &:hover {
    // background-color: #00b050;
  }
  &: hover~;
`;

const P = styled.p`
  color: white;
  font-family: Open Sans;
  font-size: 12px;
  // border: 1px solid red;
`;

const Navbar1 = () => {
  return (
    <Container>
      <Nav>
        <ImgCont>
          <Img src={logo} />
          <P>Afri-vote</P>
        </ImgCont>

        <SmallCont>
          <Ul className="list1">
            <Li className="list">Home</Li>
            <Li className="list">About</Li>
            <Li className="list">Contact</Li>
            <Li className="list">Election</Li>
            {/* <Li className="list">Election</Li>
            <Li className="list">Election</Li> */}
          </Ul>

          <BtnCont>
            <Button style={{}}>Sign In</Button>
            <Button type="secondBtn"> Register Now</Button>
          </BtnCont>
        </SmallCont>
      </Nav>
    </Container>
  );
};

export default Navbar1;
