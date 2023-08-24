import styled from "styled-components";
import backgrd from "../images/backgrd.png";
import apple from "../images/apple.png";
import compass from "../images/compass.png";
import playstore from "../images/playstore.png";
const Container = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${backgrd});
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  margin-bottom: 2rem;
  border: 1px solid red;
  // opacity: 40%;
  z-index: -1;
`;
const SmallCont = styled.div`
  // background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  border: 1px solid red;
`;
const H2 = styled.h1``;
const P = styled.p``;
const BtnCont = styled.div`
  display: flex;
  gap: 1rem;
`;
const Button = styled.button`
  height: 3rem;
  width: 10rem;
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  //   text-align: center;
  align-items: center;
  flex-wrap: wrap;
  border: none;

  font-size: 0.8rem;
  //   line-height: 32.68px;
  font-family: Open Sans;
  background-color: white;
  border-radius: 10px;
  //   border: 1px solid red;
  gap: 0.5em;
`;
const Img = styled.img`
  height: 1.5rem;
  //   border: 1px solid red;
`;
const TextCont = styled.div`
  height: 2.3rem;
  width: auto;
  line-height: 0.8rem;
  //   border: 1px solid green;
`;
const Compass = styled.img`
  postion: absolute;
  top: 40px;
  left: 80px;
`;
const ImgCont = styled.div`
  postion: absolute;
  top: 70px;
  right: 100px;
  border: 1px solid red;
`;
// const P = styled.p``
// const P = styled.p``

const HeroSection = () => {
  return (
    <Container>
      <ImgCont>{/* <Compass src={compass} /> */}</ImgCont>
      <SmallCont>
        <H2>
          Empower Democracy <br /> with Afri-vote
        </H2>
        <P>
          Modernizing African Elections <br /> Through Digitalisation
        </P>
        <BtnCont>
          <Button>
            <Img src={playstore} />
            <TextCont>
              <p
                style={{
                  fontSize: "10px",
                  //   border: "1px solid blue",
                  marginTop: ".2rem",
                }}
              >
                Download on <br />
                <span
                  style={{
                    fontSize: "16px",
                    fontWeight: "700",
                  }}
                >
                  Playstore
                </span>
              </p>
            </TextCont>
          </Button>
          <Button>
            <Img src={apple} />
            <TextCont>
              <p
                style={{
                  fontSize: "10px",
                  //   border: "1px solid blue",
                  marginTop: ".2rem",
                }}
              >
                Download on <br />
                <span
                  style={{
                    fontSize: "16px",
                    fontWeight: "700",
                  }}
                >
                  Applestore
                </span>
              </p>
            </TextCont>
          </Button>
        </BtnCont>
      </SmallCont>
    </Container>
  );
};

export default HeroSection;
