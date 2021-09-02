import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 740px;
  height: 350px;
  border: 1px solid #e2e3e5;
  position: relative;
  margin: 20px 0px;
  border-radius: 2%;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.p`
  font-size: 20px;
  font-weight: 600;
  text-align: start;
  color: darkgrey;
  margin: 15px;
`;

export const ChooseAuthor = styled.select`
  min-width: 450px;
  height: 35px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border: 1px solid gray;
  margin-left: 10px;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

export const Input = styled.input`
  height: 30px;
  min-width: 450px;
  text-align: center;
  box-sizing: border-box;
`;

export const Button = styled.button`
  text-decoration: none;
  display: inline-block;
  padding: 10px 15px;
  margin: 20px 20px;
  position: relative;
  color: black;
  border: 1px solid gray;
  background: lightgray;
  font-weight: 300;
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
`;
