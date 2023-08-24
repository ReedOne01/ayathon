import styled from "styled-components";
import righthand from "../images/righthand.png";

const Container = styled.div`
  padding: 5rem;
  width: auto;
`;
const Casing = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  //   text-align: center;
  align-items: center;
  //   border: 1px solid blue;
  padding: 0 1rem;
  width: auto;
`;
const Box = styled.div`
  //   border: 1px solid red;
  border-radius: 10px;
  padding: 0 1rem;
`;
const Img = styled.img`
  //   height: 20rem;
  //   width: 40rem;
  //   margin-left: 5rem;
`;

const P = styled.p`
  font-size: 16px;
  font-family: open sans;
`;
const SmallerBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: auto;
  //   justify-content: center;
`;
const ImageCont = styled.div`
  height: 30px;
  width: 30px;
  padding: 0.9rem;
  border-radius: 50%;
  background-color: lightgray;
`;
const TextCont = styled.div``;
const H4 = styled.h5`
  font-family: Montserrat;
`;
const H3 = styled.h3`
  margin-bottom: 2rem;
  margin-left: 1rem;
  font-family: Montserrat;
`;
const WhyChoseAfri = () => {
  return (
    <Container>
      <H3>Why Choose Afri-vote</H3>
      <Casing>
        <Box>
          <Img src={righthand} />
        </Box>
        <Box>
          <SmallerBox>
            <ImageCont></ImageCont>
            <TextCont>
              <H4 style={{ color: "#004080" }}>Transparency and Security</H4>
              <P>
                Empowering Democracy with Unwavering Security and Transparency
              </P>
            </TextCont>
          </SmallerBox>
          <SmallerBox>
            <ImageCont></ImageCont>
            <TextCont>
              <H4 style={{ color: "#00B050" }}>
                Accessibility for All Citizens
              </H4>
              <P>Every Voice Counts: Democracy for All, Anywhere</P>
            </TextCont>
          </SmallerBox>
          <SmallerBox>
            <ImageCont></ImageCont>
            <TextCont>
              <H4 style={{ color: "#004080" }}>
                {" "}
                Efficient and Timely Results
              </H4>
              <P>Swift Democracy: Your Vote, Real-time Results</P>
            </TextCont>
          </SmallerBox>
        </Box>
      </Casing>
    </Container>
  );
};

export default WhyChoseAfri;

// Transparency and Security
// Empowering Democracy with Unwavering Security and Transparency
