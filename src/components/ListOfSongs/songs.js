import React, { Component } from "react";
import { Button, Label, Input,  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle,Row,Col,Table
 } from "reactstrap";

import isEmpty from "lodash/isEmpty";
 import RefreshIcon from "@material-ui/icons/Refresh";
 import Container from "../../redux/containers";
// let isDelete = false;
class ViewAllSongs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search:"",
      data:[{
        songName: "kh gffj",
        id: 1,
        alubum: "quidem molestiae enim",
        singer:"neha kakar, yashodahar"
      },
      {
        songName: "hhh kkk",
        id: 1,
        alubum: "quidem molestiae enim",
        singer:"neha kakar, yashodahar"
      },
      {
        songName: "hhhhhd jjakd",
        id: 1,
        alubum: "quidem molestiae enim",
        singer:"neha kakar, yashodahar"
      }],
      searchValue:"",
    };
  }
  componentDidMount() {
    const { getSongs } = this.props;
    getSongs();
  }
  handlePageChange = (pageNumber = 1) => {
    this.setState({ activePage: pageNumber });
  };

  setInputValue = (event) => {
    let propName = event.target.name;
    let propValue = event.target.value;
    this.setState({
      [propName]: propValue,
    });
  };
 
updateInput = (input) => {
    const filtered=this.state.data.filter(country => {
     return country.songName.toLowerCase().includes(input.toLowerCase())
    })
    this.setSearch(filtered)
  }

  searchAction=()=>{
    this.updateInput(this.state.search)
   }

    setSearch=(val)=>{
      this.setState({searchValue:val})
    }
  refreshDashboard = () => {
this.setState({searchValue:""})
  };
  render() {
  const {search,searchValue,data } = this.state;
  const searchStyle={
      width: "1300px",
      fontSize: "1rem",
      fontWeight: "400",
      color: "#495057",
      backgroundColor: "#fff",               
      border: "1px solid #ced4da",
      borderRadius: ".25rem"
  }
  const cardBody={border:"1px solid",margin:"5px",height:"100px",padding:"1rem",width:"1200px",marginLeft:"50px",marginRight:"50px"}
  const cardTitle={fontSize:"20px",fontWeight:"bold",marginBottom:"0px"}
  const cardText={marginBottom:"0px",fontSize:"12px"}
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
       <Button onClick={this.refreshDashboard} style={{float:"right"}}>
            <RefreshIcon />
          </Button> 
      <Table>
        <tr>
          <td style={{border:"0px"}}>
            <Input
              type="text"
              value={search}
              onChange={this.setInputValue}
              name="search"
              placeholder="Search for Songs..."
              onKeyDown={(event) => {
              if (event.keyCode === 13) {
                 this.searchAction();
              }
              }}
              style={searchStyle}
            />
          </td>
        </tr>
      </Table>
      
       
     
      {!!searchValue ? searchValue.map((item,i)=>{
        return(
          <Table>  
          <Card body style={cardBody}>
              <tr>
                  <td style={{width:"1000px",borderTop:"0px"}}>
                      <CardTitle style={cardTitle}>{item.songName}</CardTitle>
                      <CardText style={cardText}>{item.alubum}</CardText>
                      <CardText style={cardText}>{item.singer}</CardText>
                  </td>
                  <td  style={{width:"100px", borderTop:"0px"}}>3:10</td>
                   
              </tr>
          </Card>
      </Table>
        )}):
        !!data &&data.map((item,i)=>{
          return( 
            <Table>  
            <Card body style={cardBody}>
                <tr>
                  <td> 
                    <img
                      src={require("../../assets/images/test.png").default}
                      alt="index"
                      style={headImage}/></td>
                    <td style={{width:"1000px",borderTop:"0px"}}>
                   
                        <CardTitle style={cardTitle}>{item.songName}</CardTitle>
                        <CardText style={cardText}>{item.alubum}</CardText>
                        <CardText style={cardText}>{item.singer}</CardText>
                    </td>
                    <td  style={{width:"100px", borderTop:"0px"}}>3:10</td>
                  
                </tr>
            </Card>
        </Table>
          )})
      } 
    </div>
    );
  }
}
export default Container(ViewAllSongs);
