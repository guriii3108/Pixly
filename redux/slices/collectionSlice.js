import { createSlice } from "@reduxjs/toolkit";
import { Flip, toast } from "react-toastify";

const initialState = {
    items: JSON.parse(localStorage.getItem("collection")) || [],
};

const connectionSlice = createSlice({
    name: "connection",
    initialState,
    reducers: {
        addCollection: (state, action) => {
            const alreadyExists = state.items.find(
                (item) => item.id === action.payload.id
            );
            if (!alreadyExists) {
                state.items.push(action.payload);
                localStorage.setItem("collection", JSON.stringify(state.items));
            }
        },
        removeCollection: (state, action) => {
            state.items = state.items.filter(
                (item) => item.id !== action.payload
            );
            localStorage.setItem("collection", JSON.stringify(state.items));
        },
        addedToast: (state) => {
            toast.success("Added to collection", {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Flip,
            });
        },
        removedToast: (state) => {
            toast.error("Removed from collection", {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Flip,
            });
        },
    },
});

export const {
    addCollection,
    removeCollection,
    addedToast,
    removedToast,
} = connectionSlice.actions;
export default connectionSlice.reducer;
