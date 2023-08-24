import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "react-bootstrap";
import ballotBox from "../images/Frame 922.png";
import ballotpaper from "../images/ballotpaper.png";
import flag from "../images/flag.png";
import voters from "../images/voters.png";
import trump from "../images/trump.png";
import styled from "styled-components";

const SliderView = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1.5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    appendDots: (dots) => (
      <div
        style={
          {
            // backgroundColor: "#ddd",
            // borderRadius: "10px",
            // padding: "10px"
          }
        }
      >
        {/* <ul style={{ margin: "0px" }}> {dots} </ul> */}
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          {
            // width: "30px",
            // color: "blue",
            // border: "1px blue solid"
          }
        }
      >
        {i + 1}
      </div>
    ),
  };

  const Img = styled.img`
    width: 12rem;
    height: 10rem;
    // border: 1px solid red;
    // margin-left: 4rem;
  `;
  const Container2 = styled.div``;
  const Cont = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 2rem 0;
    box-shadow: 0.5px 0.5px 5px rgba(0, 0, 0, 0.09),
      -0.5px -0.5px 10px rgba(0, 0, 0, 0.09);
    padding: 2rem 0.5rem;
    width: 20rem;
    heigth: 5rem;
    // border: 1px solid red;
    border-radius: 0.5rem;
    // margin-left: 0.5rem;
  `;
  const Button = styled.button`
    color: white;
    background-color: #00b050;
    padding: 0.5rem 2rem;
    border: none;
    border-radius: 0.5rem;
    margin: 1.5rem 0;
  `;
  return (
    <Container>
      <h3 style={{ fontFamily: "Montserrat" }}>Upcoming Elections Preview</h3>
      <Slider {...settings}>
        <Container2>
          <Cont>
            <p>
              The next election is <br /> scheduled for{" "}
              <span style={{ color: "#004080" }}> 10/05/2028 </span> in <br />
              <span style={{ color: "#004080" }}>Akwa Ibom. </span>
            </p>
            <p style={{ fontSize: "12px" }}>
              It's a crucial event that will shape our nation's future. Don't
              miss your chance to make your voice heard.
            </p>
            <Img src={ballotBox} />
            <Button>Learn More</Button>
            {/* <h3>1</h3> */}
          </Cont>
        </Container2>

        <Container2>
          <Cont>
            <p>
              The next election is <br /> scheduled for{" "}
              <span style={{ color: "#004080" }}>10/05/2028 </span>in <br />
              Akwa Ibom.{" "}
            </p>
            <p style={{ fontSize: "12px" }}>
              it's Election Day! Join us in{" "}
              <span style={{ color: "#004080" }}>Kwara State</span> as we come
              together to elect our leaders. Your vote matters.
            </p>
            <Img src={ballotpaper} />
            <Button>Learn More</Button>
            {/* <h3>1</h3> */}
          </Cont>
        </Container2>

        <Container2>
          <Cont>
            <p>
              The nation is gearing up for <br /> the upcoming election on{" "}
              <br />
              <span style={{ color: "#004080" }}> 23/09/2029 </span>
            </p>
            <p style={{ fontSize: "12px" }}>
              This event will shape our nation's future direction. Your
              participation counts!
            </p>
            <Img src={flag} />
            <Button>Learn More</Button>
            {/* <h3>1</h3> */}
          </Cont>
        </Container2>

        <Container2>
          <Cont>
            <p>
              Prepare for the <br /> upcoming election on <br />{" "}
              <span style={{ color: "#004080" }}>MAY 15 </span>in{" "}
              <span style={{ color: "#004080" }}>Tanke </span> <br />
            </p>
            <p style={{ fontSize: "12px" }}>
              This event shapes our democracy, and your participation is
              essential. Make your voice count!
            </p>
            <Img src={voters} />
            <Button>Learn More</Button>
            {/* <h3>1</h3> */}
          </Cont>
        </Container2>

        <Container2>
          <Cont>
            <p>
              Join us on <span style={{ color: "#004080" }}>June 20</span> in{" "}
              <br /> <span style={{ color: "#004080" }}> ASO ROCK </span>as we
              cast our votes to <br /> choose our leaders.{" "}
            </p>
            <p style={{ fontSize: "12px" }}>
              This is your chance to influence the future of our community.
            </p>
            <Img src={trump} />
            <Button>Learn More</Button>
            {/* <h3>1</h3> */}
          </Cont>
        </Container2>
      </Slider>
    </Container>
  );
};

export default SliderView;
