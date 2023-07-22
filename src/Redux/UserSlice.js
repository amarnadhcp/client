import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    id: "",
    username:"",
    email: "",
    image: "",
    isSeller:""
  
}

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setUserDetails: (state, action) => {
            state.id = action.payload.id;
            state.username = action.payload.username;
            state.email = action.payload.email;
            state.image = action.payload.image;
            state.isSeller = action.payload.isSeller

          } ,

          LogoutDetails: (state, action) => {
            state.id ="";
            state.email = "";
            state.username = "";
            state.email="";
            state.isSeller="";
          }   
    }
})

export const { setUserDetails ,LogoutDetails} = userSlice.actions;
export default userSlice.reducer;