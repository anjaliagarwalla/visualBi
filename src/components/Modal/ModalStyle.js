import styled from "styled-components";

export const StyledModal = styled.div`
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
`;

export const StyledModalContent = styled.div`
  background-color: #fefefe;
  margin: 15% 30%; /* 15% from the top and centered */
  // padding: 20px;
  border: 1px solid #888;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  min-width: 400px;
  min-height: 100px;
  font-size: 16px;
  background: #f0f0f0;
  border: none;
  border-radius: 3px !important;
  color: #fff;

  ${props => props.styles}
`;

export const SecondRow = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: space-around;
`;
export const DocCancelButton = styled.button`
  background-color: #2e2e2e;
  border: none;
  color: #fff;
  margin-left: 200px;
`;

export const DocApproveButton = styled.button`
  width: 130px;
  height: 36px;
  color: #fff;
  border-radius: 3px !important;
  background-color: #015b70;
  border: none;
  margin-left: 30px;
  &:disabled {
    opacity: 0.65;
  }
`;
