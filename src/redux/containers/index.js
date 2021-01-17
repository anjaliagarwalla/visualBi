import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Actions from "../actions";

const MapStateToProps = (state) => {
  const { Common} = state;
console.log("common", Common.allSongs)
  return {
 
    allSongs: Common.allSongs|| [],
  };
};

const MapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      ...Actions,
    },
    dispatch
  );
};

export default connect(MapStateToProps, MapDispatchToProps);