import styled, { css } from "styled-components";

export const ViewStyled = styled.div`
.active {
  color:  #015b70 !important;
  background-color:#dee2e6 !important
}
  .grid-container {
    display: grid;
    grid-template-columns: auto auto auto auto;
    padding: 25px;
  }
  .grid-item {
    border-bottom: 1px solid lightgrey;
    text-align: center;
    padding: 20px;
  }

  tr > td {
    border-top: none;
  }
  .dropbtn {
    background-color: #4caf50;
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
    cursor: pointer;
  }

  /* The container <div> - needed to position the dropdown content */
  .dropdown {
    position: relative;
    display: inline-block;
  }

  /* Dropdown Content (Hidden by Default) */
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 200px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  /* Links inside the dropdown */
  .dropdown-content a {
    color: black;
    padding: 10px 10px;
    text-decoration: none;
    display: block;
  }

  /* Change color of dropdown links on hover */
  .dropdown-content a:hover {
    background-color: #f1f1f1;
  }

  /* Show the dropdown menu on hover */
  .dropdown:hover .dropdown-content {
    display: block;
  }

  /* Change the background color of the dropdown button when the dropdown content is shown */
  .dropdown:hover .dropbtn {
    background-color: #3e8e41;
  }
`;

export const stylesModal = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 500px;
  min-height: 100px;
  font-size: 16px;
  background: #f0f0f0;
  border: none;
  border-radius: 3px !important;
  color: #fff;
`;

