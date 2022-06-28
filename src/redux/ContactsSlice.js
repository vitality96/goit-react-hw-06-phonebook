import { createSlice } from "@reduxjs/toolkit/dist/createSlice";

const initialState = {
    'items': [],
    'filter': ''
};


const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContact(state, action) {
            state.items.push(action.payload)
        },
        deleteContact(state, action) {
            state.items = state.items.filter(item => item.id !== action.payload)
        },
        changeFilter(state, action) {
            state.filter = action.payload
        },
    },
})

export const { increment, decrement, incrementByAmount } = contactsSlice.actions;
export default contactsSlice.reducer;