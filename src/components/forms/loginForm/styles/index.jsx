import styled from "styled-components";

export const FormTag = styled.form`
  width: 450px;
  height: 500px;
  background: #ffffff;
  border-radius: 15px;
  padding: 2em 5em 4em 3em;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  h2 {
    font-style: normal;
    font-weight: 700;
    line-height: 65px;
    font-size: 2.8em;
    color: #000000;
    text-transform: capitalize;
    margin-bottom: 40px;
  }

  fieldset {
    border: 0;
    display: flex;
    width: 100%;
    margin-bottom: 110px;

    select {
      width: 30%;
      border: 1px solid #323232;
      background: transparent;
      height: 46px;
      border-radius: 15px;
      font-size: 1.2em;
      margin: 0 3px 0 0;
      color: #32232;
      padding: 3px;
    }

    input {
      width: 70%;
      border-radius: 15px;
      border: 1px solid #323232;
      margin: 0 0 0 3px;
      padding: 12px 3px 10px 14px;

      :placeholder {
        color: #e4e4e4;
      }
    }
  }

  button {
    width: 100%;
    height: 46px;
    border-radius: 20px;
    background: #000000;
    color: #cccccc;
    text-transform: capitalize;
    border: 1px solid transparent;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 768px) {
    width: 90%;
    height: auto;
    padding: 20px;

    h2 {
      font-size: 24px;
    }
  }
`;
