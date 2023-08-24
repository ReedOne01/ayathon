import lefthand from "../images/lefthand.png";
import styled from "styled-components";

const Container = styled.div`
  padding: 0.5rem 5rem;
  margin: 3rem 0;
`;
const Casing = styled.div`
  //   display: Grid;
  //   grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  gap: 2rem;
  //   text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  //   padding: 2rem;
`;
const Box = styled.div`
  //   width: 35rem;
  // border: 1px solid red;
  border-radius: 10px;
`;
const Img = styled.img`
  height: 25rem;
  width: 35rem;
  border-radius: 10px;
`;
const H3 = styled.h3`
  font-size: 17px;
  padding: 0.2rem 0;
`;
const P = styled.p`
  font-size: 15px;
`;
const Button = styled.button`
  background-color: #00b050;
  border-radius: 0.5rem;
  //   height: 1.5rem;
  padding: 0.8rem;
  color: white;
  border: none;
  font-size: 14px;
`;

const History = () => {
  return (
    <Container>
      <Casing>
        <Box>
          <H3> Ready to be part of history? </H3>
          <P>
            Embrace the future of voting with Afri-vote! Say goodbye to long
            queues and hello to secure, convenient online voting.
          </P>
          <P>
            Your voice matters, and it's time to make it heard. Join the
            movement, and let's shape the destiny of our nations together.
          </P>
          <Button>Join the Future of Voting</Button>
        </Box>
        <Box>
          <Img src={lefthand} />
        </Box>
      </Casing>
    </Container>
  );
};

export default History;
