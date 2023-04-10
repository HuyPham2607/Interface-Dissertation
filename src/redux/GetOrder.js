import { createSlice } from '@reduxjs/toolkit';

const OrderSlice = createSlice({
    name: 'order',
    initialState: {
        Order: [],
    },
    reducers: {
        getOrdersStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        getOrdersSuccess: (state, action) => {
            state.isFetching = true;
            state.Order = action.payload;
        },
        getOrdersFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
    },
});

export const { getOrdersStart, getOrdersSuccess, getOrdersFailure } = OrderSlice.actions;
export default OrderSlice.reducer;
