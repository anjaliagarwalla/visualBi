import React, { Component } from "react";
import { Button, Label, Input,  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle,Row,Col,Table
 } from "reactstrap";
 import RefreshIcon from "@material-ui/icons/Refresh";

class ViewPlaylist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search:"",
      showSearch:false,
      showButton:true,
      isSong:true,
      data:[{
        id: 1,
        songName: "kh gffj",
      
        alubum: "quidem molestiae enim",
        singer:"neha kakar, yashodahar"
      },
      {
        id: 2,
        songName: "hhh kkk",
       
        alubum: "quidem molestiae enim",
        singer:"neha kakar, yashodahar"
      }],
      songsData:[{
        id: 1,
        songName: "kh gffj",
      
        alubum: "quidem molestiae enim",
        singer:"neha kakar, yashodahar"
      },
      {
        id: 2,
        songName: "hhh kkk",
       
        alubum: "quidem molestiae enim",
        singer:"neha kakar, yashodahar"
      },
      {
          id: 3,
        songName: "hhhhhd jjakd",
        
        alubum: "quidem molestiae enim",
        singer:"neha kakar, yashodahar"
      },
      {
        id: 4,
      songName: "eteterthhhhhd jjakd",
      
      alubum: "quidem molestiae enim",
      singer:"neha kakar, yashodahar"
    },
    {
        id: 5,
      songName: "hrrtrthhhhd jjakd",
      
      alubum: "quidem molestiae enim",
      singer:"neha kakar, yashodahar"
    }],
      searchValue:""
    };
  }

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

    addSong=()=>{
        this.setState({showSearch:true,showButton:false})
    }

    addToList=(id,song,album,singer)=>{
        let newData = [...this.state.data]; 
        this.setState({showSearch:false,showButton:true})
        for(var i = 0; i<this.state.data.length; i++) {
            if(this.state.data[i].id === id){
           return false
          }
        } 
        newData.push({id:id,songName:song,alubum:album,singer:singer})        
        this.setState({ data:[...newData]});  
     }

    deleteFromList=(idd)=>{ 
        // var removeIndex = this.state.data.map(function(item) { return item.id }).indexOf(id);   
        // this.state.data.splice(removeIndex, 1); 
        let data = [...this.state.data]; 
        for(var i = 0; i < this.state.data.length; i++) {
            if(this.state.data[i].id == idd)
            data.splice(i,1);
          }     
        this.setState({ data:data,showButton:true,showSearch:false });  
    }

    shuffleList=()=>{
        return this.state.data.sort( () => Math.random() - 0.5);
    }

    reload=(name)=>{

        this.setState({isSong:false,showSearch:false,showButton:true});
        this.props.back(this.state.nam)
      }
      refreshDashboard = () => {
        this.setState({searchValue:""})
          };
  render() {
    const { search,data,songsData,showSearch,showButton,searchValue } = this.state;
    let renderedData =data;
    let songsDataa=songsData
    const button={
        backgroundColor: "#008CBA",
        color: "white",
        padding: "10px",
        textAlign: "center",
        display: "inlineBlock",
        fontSize: "16px",
        margin: "2px 2px",
        cursor: "pointer",
        borderRadius:"3px"
       }
    const input={
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
            <h1>{this.props.nam}</h1>
            {showSearch==true&& 
            <>
                <Button onClick={this.refreshDashboard} style={{float:"right"}}>
                    <RefreshIcon />
                </Button> 
                <Table>
                    <tr>
                        <td style={{ columnWidth: "400px",borderTop:"0px" }}>
                            <Input
                                type="text"
                                value={search}
                                onChange={this.setInputValue}
                                name="search"
                                placeholder="Search for Songs..."
                                onKeyDown={(event) => {
                                if (event.keyCode === 13) {
                                    this.searchAction()}}}
                                style={input}
                            />
                        </td>
                    </tr>
                </Table></> }
             {showButton===true && 
             <>  
                <Table>
                    <tr>
                        <td style={{borderTop:"0px"}}>
                                <Button style={{...button,marginLeft:"40px",padding:"5px"}} onClick={this.reload}>
                                    Back To Playlist           
                                </Button>
                            </td>
                            <td style={{borderTop:"0px"}}>
                                <Button style={{...button,marginLeft:"750px",padding:"5px"}} onClick={this.shuffleList}>
                                    Shuffle Song            
                                </Button>
                            </td>                            
                            <td style={{borderTop:"0px"}}>
                                <Button style={{...button,marginLeft:"10px",padding:"5px"}} onClick={this.addSong}>
                                    Add Song            
                                </Button>
                            </td>
                        </tr>
                    </Table>
                </>
                } 
                {showSearch==true ?
                    !!searchValue ? searchValue.map((item,i)=>{
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
                                        <td style={{width:"200px",borderTop:"0px"}}>  
                                            <Button onClick={()=>this.addToList(item.id,item.songName,item.alubum,item.singer)}>
                                                Add to list              
                                            </Button>
                                        </td> 
                                    </tr>
                                </Card>
                            </Table>
                        )}):
                    !!songsData &&songsData.map((item,i)=>{
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
                                        <td style={{width:"200px",borderTop:"0px"}}>  
                                            <Button onClick={()=>this.addToList(item.id,item.songName,item.alubum,item.singer)}>
                                                Add to list              
                                            </Button>
                                        </td> 
                                    </tr>
                                </Card>
                            </Table>
                        )}):renderedData &&renderedData.map((item,i)=>{
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
                                            <td  style={{width:"100px",borderTop:"0px"}}>3:10</td>
                                            <td style={{width:"200px",borderTop:"0px"}}>  
                                                <Button onClick={()=>(this.deleteFromList(item.id))} >
                                                    Delete  
                                                </Button>
                                            </td>
                                        </tr>
                                    </Card>
                                </Table>
                            )})
                }
        </div>
    );
  }
}
export default ViewPlaylist;
