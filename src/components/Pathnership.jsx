import styled from "styled-components";

const Container = styled.div`
  padding: 5rem;
  width: auto;
  margin: 3rem 0;
`;
const H3 = styled.h3``;
const SmallCont = styled.div`
  display: flex;
  flex-direction: column;
  width: 49%;
`;
const InnerCont = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
`;
const Box = styled.div`
  height: 10rem;
  width: auto;
  //   border: 1px solid black;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin: 0.5rem 0;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3), -1px -1px 1px rgba(0, 0, 0, 0.1);
`;
const TextBox = styled.div`
  display: flex;
  gap: 1rem;
  padding: 0 0.5rem;
`;
const Number = styled.div`
  flex: 1.5;
`;
const H5 = styled.h5`
  flex: 3.5;
  font-size: 1rem;
`;
const H6 = styled.h6``;
const P = styled.p`
  flex: 5;
  font-size: 10px;
  text-align: left;
`;
const Pathnership = () => {
  return (
    <Container>
      <H3>Partnerships and Trust</H3>
      <InnerCont>
        <SmallCont>
          <Box>
            National Democratic Alliance
            <H6>(NDA)</H6>
          </Box>
          <TextBox>
            <Number>1</Number>
            <H5>NDA</H5>
            <P>
              A fictional alliance of political parties supporting Afri-vote's
              mission for transparent elections.
            </P>
          </TextBox>
        </SmallCont>
        <SmallCont>
          <Box>
            TechSecure Solutions <H6>(NDA)</H6>
          </Box>
          <TextBox>
            <Number>2</Number>
            <H5>TCS</H5>
            <P>
              A cybersecurity company that has collaborated with Afri-vote to
              ensure the highest level of data security.
            </P>
          </TextBox>
        </SmallCont>
      </InnerCont>
      <InnerCont>
        <SmallCont>
          <Box>
            Africa Electoral Council
            <H6>(NDA)</H6>
          </Box>
          <TextBox>
            <Number>3</Number>
            <H5>ABC </H5>
            <P>
              AN organization endorsing Afri-vote for its contributions to
              modernizing the African electoral system.
            </P>
          </TextBox>
        </SmallCont>
        <SmallCont>
          <Box>
            United Citizen Advocacy Group <H6>(NDA)</H6>
          </Box>
          <TextBox>
            <Number>4</Number>
            <H5>CADS</H5>
            <P>
              A NGO that recognizes Afri-vote's efforts in promoting inclusivity
              and accessibility in voting.
            </P>
          </TextBox>
        </SmallCont>
      </InnerCont>
    </Container>
  );
};

export default Pathnership;
