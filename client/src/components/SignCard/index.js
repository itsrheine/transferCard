import styled from "styled-components";

export const CardWrapper = styled.div`
  background: #00000093;  
  overflow: hidden;
  padding: 0 0 32px;
  margin: 48px auto 0;
  width: 300px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
`;

export const CardHeading = styled.h2`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

export const CardBody = styled.div`
  padding-right: 32px;
  padding-left: 32px;
`;

export const CardInput = styled.input`
  padding: 7px 0;
  font-family: inherit;
  font-size: 14px;
  border-top: 0;
  border-right: 0;
  border-bottom: 1px solid #ddd;
  border-left: 0;
  transition: border-bottom-color 0.25s ease-in;

  &:focus {
    border-bottom-color: #e5195f;
    outline: 0;
  }
`;

export const CardButton = styled.button`
  display: block;
  font-family: inherit;
  font-size: 14px;
  font-weight: 200;
  color: #000;
  width: 270px;
  text-decoration: none;
  border: none;
  outline: none;
  cursor: pointer;
  margin: 2px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
  margin: 2px;
  padding: 5px;
  background-color: var(--secondary);
  

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
    opacity: .8;
  }
`;

export const OrderStyle = styled.div`
  float: left;
  width: 100%;
  margin: 25px 0px 0px;
  padding: 25px;
  background-color:#ddd;
  opacity: 1;
  text-align: center;
`;