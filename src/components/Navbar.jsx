import styled from "styled-components";
import logo from "../images/Frame 4.png";
import { useParams, Routes, Link, NavLink } from "react-router-dom";
import SignIn from "../pages/SignIn";
import Signup from "../pages/Signup";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  color: white;
  // background-color: white;
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
  margin-left: 5rem;
  border: 1px solid red;
  // width: 24rem;
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
  margin-left: 1rem;
  padding: 0.6rem 1.5rem;
  border-radius: 10px;
  background: none;
  color: white;
  font-family: Open Sans;
  transition: all 0.5s ease;

  background-color: ${(props) =>
    props.type === "secondBtn" ? "#00b050" : "transparent"};

  &:hover {
    transform: scaleX(1.1);
    background-color: ${(props) =>
      props.type === "firstBtn" ? "#00b050" : "white"};
    color: ${(props) => (props.type === "secondBtn" ? "#00b050" : "white")};
    border: ${(props) => props.type === "secondBtn" && "1px solid #00b050"};
  }
  &:hover ~ Li {
    color: black;
  }
`;
const Navbar1 = () => {
  return (
    <Container>
      <Nav>
        <ImgCont>
          <Img src={logo} />
        </ImgCont>

        <Ul className="list1">
          <NavLink to="/">
            <Li className="list">Home</Li>
          </NavLink>
          <NavLink to="/about">
            <Li className="list">About</Li>
          </NavLink>
          <NavLink to="/contact">
            <Li className="list">Contact</Li>
          </NavLink>
          <NavLink to="/election">
            <Li className="list">Election</Li>
          </NavLink>
        </Ul>

        <BtnCont>
          <Link to="signin">
            <Button className="btn1" type="firstBtn">
              Sign In
            </Button>
          </Link>
          <Link to="signup">
            <Button type="secondBtn"> Register Now</Button>
          </Link>
        </BtnCont>
      </Nav>
    </Container>
  );
};

export default Navbar1;
