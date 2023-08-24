import styled from "styled-components";
import logo from "../images/Frame 4.png";
import { Link } from "react-router-dom";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;
const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 4rem;
  width: 100%;
`;
const ImgCont = styled.div`
  background: white;
  height: 3rem;
  width: 50px;
  align-items: center;
  display: flex;
  justify-content: center;
  // border: 1px solid red;
`;
const Img = styled.img``;
const Ul = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  gap: 1.5rem;
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
  // color: white;
  font-family: Open Sans;

  background-color: ${(props) =>
    props.type === "secondBtn" ? "#00b050" : "transparent"};

  &:hover {
    // background-color: #00b050;
  }
  &: hover~;
`;

const Navbar1 = () => {
  return (
    <Container>
      <Nav>
        <ImgCont>
          <Img src={logo} />
        </ImgCont>

        <Ul className="list1">
          <Li className="list">Home</Li>
          <Li className="list">About</Li>
          <Li className="list">Contact</Li>
          <Li className="list">Election</Li>
        </Ul>

        <BtnCont>
          <Button style={{}}>Sign In</Button>
          <Button type="secondBtn"> Register Now</Button>
        </BtnCont>
      </Nav>
    </Container>
  );
};

export default Navbar1;
