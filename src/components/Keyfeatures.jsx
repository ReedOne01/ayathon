import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 0.5rem 5rem;
  margin: 2rem 0;
  font-family: Montserrat;
  // border: 1px solid purple;
`;
const SmallContain = styled.div`
  display: flex;
  // border: 1px solid red;
  // align-items: right;
  // flex-wrap: wrap;
  // justify-content: center;
  // width: 100%;
  // height: auto;
  gap: 2rem;
  margin: 1rem 0;
  // padding: 0.5rem 0;
`;
const H3 = styled.h3`
  font-weight: 400;
  margin-bottom: 15px;
`;
const Box = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  // flex-wrap: wrap;
  gap: 1rem;
  font-size: 85%;
  padding: 2rem;
  //   padding-right:2rem
  justify-content: space-between;
  align-items: center;
  // border: 1px solid yellow;
  border-radius: 5px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3), -1px -1px 2px rgba(0, 0, 0, 0.1);
`;
const ImgCont = styled.div`
  height: 65px;
  width: 150px;
  border-radius: 50%;
  background-color: lightgray;
`;
const Img = styled.div``;
const SmallerCont = styled.div``;
const P = styled.p``;

const Keyfeatures = () => {
  return (
    <Container>
      <H3 style={{ marginLeft: "2rem" }}>Key features of Afri-Vote</H3>
      <SmallContain>
        <Box>
          <ImgCont>
            <Img />
          </ImgCont>
          <SmallerCont>
            <H3 style={{ color: "#004080" }}>Voter Registration Simplified</H3>
            <P>
              Easily become part of the democratic process. Our platform
              streamlines voter registration, ensuring that every eligible
              citizen can participate in elections without hassle.
            </P>
          </SmallerCont>
        </Box>
        <Box>
          <ImgCont>
            <Img />
          </ImgCont>
          <SmallerCont>
            <H3 style={{ color: "#00B050" }}>Secure Biometric Verification</H3>
            <P>
              Trust in your vote's security. Our advanced biometric verification
              ensures that only authorized individuals can cast their votes,
              protecting the integrity of the election.
            </P>
          </SmallerCont>
        </Box>
      </SmallContain>
      <SmallContain>
        <Box>
          <ImgCont>
            <Img />
          </ImgCont>
          <SmallerCont>
            <H3 style={{ color: "#00B050" }}>Convenient Online Voting</H3>
            <P>
              Vote from the comfort of your home. Our user-friendly online
              voting system empowers you to cast your vote conveniently,
              removing geographical barriers and long lines.
            </P>
          </SmallerCont>
        </Box>
        <Box>
          <ImgCont>
            <Img />
          </ImgCont>
          <SmallerCont>
            <H3 style={{ color: "#004080" }}>Real-time Election Tracking</H3>
            <P>
              Stay informed as it happens. Our real-time tracking feature
              provides up-to-the-minute updates on voter turnout, counting
              progress, and election results, ensuring transparency
            </P>
          </SmallerCont>
        </Box>
      </SmallContain>
    </Container>
  );
};

export default Keyfeatures;
