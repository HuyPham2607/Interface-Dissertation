import { loginFailure, loginStart, loginSucees } from './Userredux';
import {
    getProductsStart,
    getProductsSuccess,
    getProductsFailure,
    DeleteProductsStart,
    DeleteProductsSuccess,
    DeleteProductsFailure,
    UpdateProductsStart,
    UpdateProductsSuccess,
    UpdateProductsFailure,
    AddProductsStart,
    AddProductsSuccess,
    AddProductsFailure,
} from './ProductsRedux';
import {
    getUsersStart,
    getUsersSuccess,
    getUsersFailure,
    DeleteUsersStart,
    DeleteUsersSuccess,
    DeleteUsersFailure,
} from './GetUser';
import { adminRequest, publicRequest } from '../requestMethods';
import { getOrdersFailure, getOrdersStart, getOrdersSuccess } from './GetOrder';

export const loginredux = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        if (user.success === false) {
            dispatch(loginFailure());
        } else {
            dispatch(loginSucees(user));
        }
    } catch (error) {
        dispatch(loginFailure());
    }
};

export const getProducts = async (dispatch) => {
    dispatch(getProductsStart());
    try {
        const res = await adminRequest.get('/products');
        dispatch(getProductsSuccess(res.data));
    } catch (error) {
        dispatch(getProductsFailure());
    }
};

export const DeleteProducts = async (id, dispatch) => {
    dispatch(DeleteProductsStart());
    try {
        const res = await adminRequest.delete(`/products/${id}`);
        dispatch(DeleteProductsSuccess(id));
    } catch (error) {
        dispatch(DeleteProductsFailure());
    }
};

export const UpdateProducts = async (id, user, dispatch) => {
    dispatch(UpdateProductsStart());
    try {
        const res = await adminRequest.put(`/products/`);
        dispatch(UpdateProductsSuccess({ id, user }));
    } catch (error) {
        dispatch(UpdateProductsFailure());
    }
};

export const AddProducts = async (data, dispatch) => {
    dispatch(AddProductsStart());
    try {
        // const res = await adminRequest.post(`/products/add`, product);
        dispatch(AddProductsSuccess(data));
    } catch (error) {
        dispatch(AddProductsFailure());
    }
};

export const GetUsers = async (dispatch, data) => {
    dispatch(getUsersStart());
    try {
        dispatch(getUsersSuccess(data));
        // const res = await adminRequest.get(`/users/`);
    } catch (error) {
        dispatch(getUsersFailure());
    }
};

export const DeleteUser = async (id, dispatch) => {
    dispatch(DeleteUsersStart());
    try {
        // const res = await adminRequest.delete(`/users/${id}`);
        dispatch(DeleteUsersSuccess(id));
    } catch (error) {
        dispatch(DeleteUsersFailure());
    }
};

export const getOrderUser = async (data, dispatch) => {
    dispatch(getOrdersStart());
    try {
        // const res = await publicRequest.get('/Order/order-status');
        dispatch(getOrdersSuccess(data));
    } catch (error) {
        dispatch(getOrdersFailure());
    }
};
