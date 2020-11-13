import { createSlice } from '@reduxjs/toolkit';

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
    },
  },
});

/*
const test = (state) =>{
  alert(state.app.ChannelId + " " + state.app.ChannelName)
}
*/
export const { setChannelInfo } = appSlice.actions;

export const selectChannelId = (state) => state.app.ChannelId;
export const selectChannelName = (state) => state.app.ChannelName;
export default appSlice.reducer