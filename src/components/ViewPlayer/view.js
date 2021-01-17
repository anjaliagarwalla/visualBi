import React, { Component } from "react";
import { TabContent,TabPane,Nav,NavItem,NavLink,Button,Input,Table} from "reactstrap";
import classnames from "classnames";
import { Link } from "react-router-dom";
import ViewAllSongs from "../ListOfSongs/songs";
import {ViewStyled} from "./index";
import CreatePlayList from "../CreatePlayList/playlist"
import ViewPlaylist from "../CreatePlayList/viewPlaylist";

class ViewPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "songs",
      visible: false,
      actionSongs: false,
      actionPlaylist: false,
      disabled: true,
      isSong:false,
      song:"",
      open:false,
      nam:""
    };
  }
  componentDidMount() {
   
   
  }
 

  setInputValue = (event) => {
    let propName = event.target.name;
    let propValue = event.target.value;
    this.setState({
      [propName]: propValue,
    });
  };


  openDoc = (propName) => {
    if (propName === "songs") {
      this.setState({ actionSongs: true });
    } else if (propName === "playlist") {
      this.setState({ actionPlaylist: true });
    }
  };

  toggleView = (tab) => {
    if (this.state.activeTab !== tab) {
      if (tab === "") {
        this.setState({
          activeTab: tab,
          visible: false,
        });
      } else {
        this.setState({ activeTab: tab, visible: false });
      }
    }
  };
  
  onClickApproveModal = (value) => {
   if (value === "songs") {
      this.setState({
        actionSongs: false,
      });
    } else if (value === "playlist") {
      this.setState({
        actionPlaylist: false,
      });
    } 
  };

  onClickCancelModal = () => {
    this.setState({
      actionSongs: false,
      actionPlaylist: false
    });
  };
  
  onSearch = (name) => {
    this.setState({
        open:true,nam:name
    });
}
onPressBack=()=>{
  this.setState({
    open:false
});
      
}
  render() {
    const {
      actionChangeStatus,
      activeTab
    } = this.state;
    const table={
      border: "1px solid #1f1d1d",
      padding: "30px",
      minHeight: "300px",
    }
    const nav={
      alignItems: "center",
      justifyContent: "center",
      marginTop: "6px",
      borderTop:"0px"
    }
    const navItem={
      color: " #015b70",
      fontSize: "20px",
      fontFamily: "Times New Roman",
      border:"1px solid",
      cursor: "pointer",
      borderRadius:"1px"
    }
    const tabPane={width: "100%", paddingLeft: "10px"}
    return (
      <div style={{ padding: "30px" }}>
          <ViewStyled>
          <div>
          
            <Table style={table}>
              <Nav tabs style={nav}> 
                <tr>
                  <td style={{border:"0px"}}>
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: activeTab === "songs"
                        })}
                        onClick={() => {
                          this.toggleView("songs");
                        }}
                        style={navItem}
                      >
                         All Songs
                      </NavLink>
                    </NavItem>
                  </td>
                  <td style={{border:"0px"}}>
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active:activeTab === "playlist",
                        })}
                        activeClassName="active"
                        onClick={() => {
                          this.toggleView("playlist");
                        }}
                        style={navItem}>
                         Playlist
                      </NavLink>
                    </NavItem>
                  </td> 
                </tr>
              </Nav>
              <TabContent activeTab={activeTab} >
                <TabPane
                  style={tabPane}
                  tabId="songs">
                  <ViewAllSongs/> 
                </TabPane>
                <TabPane style={tabPane} tabId="playlist">
                  {this.state.open==true?
                  <ViewPlaylist back={this.onPressBack}/>:
                  <CreatePlayList search={this.onSearch} nam={this.state.name} /> }
                </TabPane>
              </TabContent>
            </Table>
            </div>
            </ViewStyled>  
    </div>
    );
  }
}
export default ViewPlayer;