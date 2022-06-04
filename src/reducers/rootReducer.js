import { createSlice } from "@reduxjs/toolkit";



const mySlice = createSlice({
    name:'postits',
    initialState: [
        {idD: 1, title: 'postits1', deleted: false },
    ],
    reducers: {
        addPostit(state, action) {
            const newPostit = {
                idD: Date.now(),
                title: action.payload.title,
                deleted: false
            };
            state.push(newPostit);
        },
        deletePostit(state, action) {
            switch (action.type) {
                case 'REMOVE_ITEM':
                  return state.filter((item) => item.id !== action.id);
                default:
                  throw new Error();
            };
        }
    },
})

export const {
    addPostit,
    deletePostit
} = mySlice.actions

export default mySlice.reducer; 