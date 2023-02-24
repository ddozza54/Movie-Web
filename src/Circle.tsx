import styled from "styled-components";

interface ContainerProps {
  bgColor: string;
  borderColor?: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 3px solid ${(props) => props.borderColor};
  background-color: ${(props) => props.bgColor};
`;
interface CircleProps {
  bgColor: string;
  borderColor?: string;
}

function Circle({ bgColor, borderColor }: CircleProps) {
  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? "gold"}></Container>
  );
}

export default Circle;
