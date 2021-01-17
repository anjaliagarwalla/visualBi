import * as types from "../constants";

export function getSongs(data) {
    console.log("i am called",data)
  return {
    type: types.GET_ALL_SONGS_REQUEST,
    data
  };
}

export function getAlbums(data) {
    return {
      type: types.GET_ALL_ALBUMS_REQUEST,
      data
    };
  }