import React, { Component } from "react";
import { Button, Label, Input,  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle,Row,Col,Table
 } from "reactstrap";
 import Modal from "../Modal/modals";
 import {
  DocCancelButton,
  DocApproveButton,
} from "../Modal/ModalStyle";
import { NavLink as Link } from "react-router-dom";


class CreatePlayList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search:"",
      add:false,
      isSong:false,
      nam:"",
       data:[{id:1,songName:"tera bin",date:"16/10/2016 10:04:45"}],
    };
   
  }
//   componentDidMount() {
//     const { getSongs } = this.props;
//     getSongs();
//   }

  setInputValue = (event) => {
    let propName = event.target.name;
    let propValue = event.target.value;
    this.setState({
      [propName]: propValue,
    });
  };
    addPlaylist =()=>{
      this.setState({add:true})
    }
    createList=(e)=>{
      var currentdate=new Date();
      this.setState({add:false,search:""})

      this.state.data.push({id:1,songName: this.state.search,date:currentdate.getDate() + "/"
      + (currentdate.getMonth()+1)  + "/" 
      + currentdate.getFullYear() + "  "  
      + currentdate.getHours() + ":"  
      + currentdate.getMinutes() + ":" 
      + currentdate.getSeconds()});
    }

    cancelList=()=>{
      this.setState({add:false,search:""})
    }
    reload=(name)=>{

      this.setState({isSong:true,nam:name});
      this.props.search(this.state.nam)
    }

  render() {
    const {search,searchValue ,add,data} = this.state;
    const button={
      backgroundColor: "#008CBA",
      color: "white",
      padding: "10px",
      textAlign: "center",
      display: "inlineBlock",
      fontSize: "16px",
      margin: "2px 2px",
      cursor: "pointer",
      borderRadius:"3px",
      marginLeft: "500px",
    }
    const disabled=search?false:true;  
    const cardBody={border:"1px solid",height:"100px",width:"1200px",marginLeft:"50px",marginRight:"50px",margitnTop:"2px",marginBottom:"2px"}
    const headImage = {
      color: "rgba(0, 0, 0, 0.54)",
      display: "inlineFlex",
      width: "40px",
      height: "40px",
      flexShrink: "0",
      position: "sticky",
      top: 11
    };
return (
  <div style={{ padding: "30px" }}>
    {add==true &&
      <Modal
        message="Add Playlist Name"
        onDismiss={this.cancelList}
        down={(event) => {
          if (event.keyCode === 13) {
          this.createList();
          }
        }}
        isOpen={add}
        button={
          <DocCancelButton onClick={this.cancelList}>
            CANCEL
          </DocCancelButton>
        }
        button1={
          <DocApproveButton
            onClick={this.createList}
            disabled={disabled}
          >
            SUBMIT
          </DocApproveButton>
        }
      >
      <div style={{ margin: 10 }}>
        <Input
          type="textarea"
          rows="6"
          cols="30"
          onChange={this.setInputValue}
          value={search}
          name="search"
          placeholder="Playlist Name"
        />
      </div>
    </Modal>
    }
     {!!data && data.map((item,i)=>{
       return(
        <Table style={{borderBottom:"0px"}}>
          <Card body style={cardBody}>
            <tr>
              <td style={{width:"1000px",border:"0px"}}>
              <Button onClick={()=>{this.reload(item.songName)}}>
                 <CardTitle tag="h5">{item.songName}</CardTitle></Button>
              </td> 
              <td style={{width:"50px",border:"0px"}}>
                <CardTitle >{item.date}</CardTitle>
              </td>
            </tr>
          </Card>
        </Table>
      )})}
      <Button style={button} onClick={this.addPlaylist}>
              Create Playlist              
      </Button>
  </div>
);
}
}
export default CreatePlayList;
