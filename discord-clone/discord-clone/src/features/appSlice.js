import { createSlice } from '@reduxjs/toolkit';

let selectChannelId2 = null
let selectChannelName2 = null

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    channelId: null,
    channelName: null,
  },
    reducers: {
      setChannelInfo: (state, action) => {

      //alert("hi")
      //alert(action.payload);
      
      state.channelId = action.payload.channelId;
      state.channelName = action.payload.channelName;
      
      console.log(state.channelId);
      console.log(state.channelName);

      selectChannelId2 = state.channelId
      selectChannelName2 = state.channelName
    },
  },
});

/*
const test = (state) =>{
  alert(state.app.ChannelId + " " + state.app.ChannelName)
}
*/
export const { setChannelInfo } = appSlice.actions;

export const selectChannelId = state => { 
  console.log("appSlice.ChannelName: ")
  console.log(appSlice.ChannelName)
  return state.app.ChannelId };
export const selectChannelName = state => { return state.app.ChannelName };

//export const selectChannelId = ( selectChannelId2 ) => { return selectChannelId2 }
//export const selectChannelName = ( selectChannelName2 ) => { return selectChannelName2 }
/*
export const stateChannel = () => {
  return {
  selectChannelId: selectChannelId2,
  selectChannelName: selectChannelName2
  }
}
*/
export default appSlice.reducer