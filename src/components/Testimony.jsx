import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "react-bootstrap";
import styled from "styled-components";

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#004080" }}
      onClick={onClick}
    />
  );
}

const Testimony = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    // speed: 2000,
    autoplaySpeed: 4000,
    swipeToSlide: true,
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

    cssEase: "linear",
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
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
  };

  const Img = styled.img`
    // width: 12rem;
    // height: 10rem;
    // border: 1px solid red;
    // margin-left: 4rem;
  `;
  const Container2 = styled.div``;
  const Cont = styled.div`
    // text-align: center;
    display: flex;
    flex-direction: column;
    // justify-content: center;
    // align-items: center;
    margin: 2rem 0;
    box-shadow: 0.5px 0.5px 5px rgba(0, 0, 0, 0.09),
      -0.5px -0.5px 10px rgba(0, 0, 0, 0.09);
    padding: 1rem 2rem;
    width: 22rem;
    heigth: 5rem;
    // border: 1px solid red;
    border-radius: 0.5rem;
    // margin-left: 0.5rem;
  `;

  const H6 = styled.h6`
    padding: 0.5rem 0;
    font-weight: 400;
  `;
  const P = styled.p`
    font-size: 12px;
  `;
  const SmallCont = styled.div`
    display: flex;
    gap: 10px;
    // text-align: center;
    // justify-content: center;
    align-items: center;
    // border: 1px solid red;
    padding: 0.5em 0;
  `;
  const ImageCont = styled.div`
    height: 35px;
    width: 35px;
    border-radius: 50%;
    background-color: lightGray;
  `;

  return (
    <Container>
      <h3>User Testimonials</h3>
      <p>
        Here is what a few of our happy clients and users have <br /> to say
        about us.
      </p>
      <Slider {...settings}>
        <Container2>
          <Cont>
            <H6 style={{ color: "#004080" }}>Confidence in Every Vote</H6>
            <P>
              "Afri-vote's efficient process meant that results were available
              in record time. This not only enhances trust in elections but also
              allows for timely decision-making."
            </P>
            <SmallCont>
              <ImageCont>
                <Img></Img>
              </ImageCont>
              <P>
                Sarah Osei,
                <span style={{ color: "#004080" }}> Election Observer </span>
              </P>
            </SmallCont>
          </Cont>
        </Container2>

        <Container2>
          <Cont>
            <H6 style={{ color: "#004080" }}>Confidence in Every Vote</H6>
            <P>
              "Afri-vote's efficient process meant that results were available
              in record time. This not only enhances trust in elections but also
              allows for timely decision-making."
            </P>
            <SmallCont>
              <ImageCont>
                <Img></Img>
              </ImageCont>
              <P>
                Barbara Owen,
                <span style={{ color: "#004080" }}> Election Observer </span>
              </P>
            </SmallCont>
          </Cont>
        </Container2>

        <Container2>
          <Cont>
            <H6 style={{ color: "#004080" }}>Confidence in Every Vote</H6>
            <P>
              "Afri-vote's efficient process meant that results were available
              in record time. This not only enhances trust in elections but also
              allows for timely decision-making."
            </P>
            <SmallCont>
              <ImageCont>
                <Img></Img>
              </ImageCont>
              <P>
                Micheal Oseni,
                <span style={{ color: "#004080" }}> Election Observer </span>
              </P>
            </SmallCont>
          </Cont>
        </Container2>

        <Container2>
          <Cont>
            <H6 style={{ color: "#004080" }}>Confidence in Every Vote</H6>
            <P>
              "Afri-vote's efficient process meant that results were available
              in record time. This not only enhances trust in elections but also
              allows for timely decision-making."
            </P>
            <SmallCont>
              <ImageCont>
                <Img></Img>
              </ImageCont>
              <P>
                Tunde Awele,
                <span style={{ color: "#004080" }}> Election Observer </span>
              </P>
            </SmallCont>
          </Cont>
        </Container2>

        <Container2>
          <Cont>
            <H6 style={{ color: "#004080" }}>Confidence in Every Vote</H6>
            <P>
              "Afri-vote's efficient process meant that results were available
              in record time. This not only enhances trust in elections but also
              allows for timely decision-making."
            </P>
            <SmallCont>
              <ImageCont>
                <Img></Img>
              </ImageCont>
              <P>
                Bayo Tayo,
                <span style={{ color: "#004080" }}> Election Observer </span>
              </P>
            </SmallCont>
          </Cont>
        </Container2>
      </Slider>
    </Container>
  );
};

export default Testimony;
