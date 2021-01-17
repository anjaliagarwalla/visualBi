import React from "react";
import ReactDOM from "react-dom";
import { StyledModal, StyledModalContent, SecondRow } from "./ModalStyle";
import ClearIcon from '@material-ui/icons/Clear';
class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      isOpen: props.isOpen
    };
  }

  static getDerivedStateFromProps(prevProps, prevState) {
    return {
      isOpen: prevProps.isOpen
    };
  }
  render() {
    const { message, button, button1, onDismiss, icon, down } = this.props;
    const { isOpen } = this.state;
    if (!isOpen) return null;
    return(
      <StyledModal>
        <StyledModalContent>
          <div style={{ textAlign: "left", color: "black" }}>
            {message}  <ClearIcon style={{ marginLeft: "500px" }} onClick={onDismiss} />
            {!!message && <hr style={{ border: "1px solid #1f1d1d " }} />}
            {this.props.children}{onkeydown = down}
          </div>
          <SecondRow>
            {button}
            {button1}
          </SecondRow>
        </StyledModalContent>
      </StyledModal>
    );
  }
}

export default Modal;
