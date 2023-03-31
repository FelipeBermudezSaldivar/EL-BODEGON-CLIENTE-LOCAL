import axios from "axios"

export const GET_ALLDISHES = 'GET_ALLDISHES'
export const GET_DISH_BY_ID = 'GET_DISH_BY_ID'
export const GET_DISHES_BY_NAME = 'GET_DISHES_BY_NAME'
export const GET_CATEGORIES = 'GET_CATEGORIES'
export const SET_PAGINATION = 'SET_PAGINATION'
export const SET_FLTEDDISHES = 'SET_FLTEDDISHES'
export const SET_CATEGORY = 'SET_CATEGORY'
export const SET_ORDERINGS = 'SET_ORDERINGS'
export const CREATE_DISH = 'CREATE_DISH'
export const CREATE_PAYMENT = 'CREATE_PAYMENT'
// Auth0
export const CREATE_NEW_AUTH0_USER = 'CREATE_NEW_AUTH0_USER'
export const GET_AUTH0_USER_BY_ID = 'GET_AUTH0_USER_BY_ID'
export const GET_AUTH0_USERS = 'GET_AUTH0_USERS'
// 
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const REMOVE_ALL_PRODUCTS = 'REMOVE_ALL_PRODUCTS'
export const UPLOAD_PRODUCTS = 'UPLOAD_PRODUCTS'

export const ADD_TOTAL_PRICE = 'ADD_TOTAL_PRICE'
export const REDUCE_TOTAL_PRICE = 'REDUCE_TOTAL_PRICE'
export const REMOVE_MANY_PRODUCTS = 'REMOVE_MANY_PRODUCTS'
// CARRITO
export const GET_CARRITO = 'GET_CARRITO'
export const SAVE_CARRITO = 'SAVE_CARRITO'
export const SET_LOCAL_CARRITO = 'SET_LOCAL_CARRITO'
export const SET_SAVED_CARRITO = 'SET_SAVED_CARRITO'
export const CREATE_USER = "CREATE_USER"
//DASHBOARD
export const GET_ALL_USERS = 'GET_ALL_USERS'

export const USER_LOGIN_DATA = "USER_LOGIN_DATA"

//login
export const postLogin = (payload) => {
  console.log(payload)
  return async function (dispatch) {
    try {
      let result = await axios.post("http://localhost:3001/users/login", payload)
      // let result = await axios.post("http://el-bodegon-api-wine.vercel.app/users/login", payload)
      
      return result.data
    } catch (error) {
      dispatch({ type: USER_LOGIN_DATA, payload: error.response.data.user })
      return error.response.data
    }
  }
}


export function getAllDishes () {
    return async (dispatch) => {
      try {
        const response = await axios(`https://el-bodegon-api-wine.vercel.app/foods`)
        return dispatch({
          type: GET_ALLDISHES,
          payload: response.data
        })
      } catch (error) {
        throw Error(error)
      }
    }
  }

export const getDishesById = (id) => {
  return async function (dispatch) {
      const response = await axios(`https://el-bodegon-api-wine.vercel.app/foods/${id}`)
      return dispatch({type: GET_DISH_BY_ID, payload: response.data})
  }
}

export const getDishesByName = (payload) => {
    return async function (dispatch) {
      console.log("funciona");
        const foodsByName = await axios.get(`https://el-bodegon-api-wine.vercel.app/foods?name=${payload}`);
        return dispatch({type: GET_DISHES_BY_NAME, payload: foodsByName.data})
    }
}

export const updateDish = ({id, price, stock}) => {
  return async function (dispatch) {
    await axios.put(`http://localhost:3001/foods/${id}`, {price, stock})
  }
}

export const createDish = (payload) => {

  try {   
    return async function () {
      await axios.post("http://localhost:3001/foods", payload
      ,
       {
        headers: {
          "Content-Type": "multipart/form-data",
        }
      })
    }
  } catch (error) {
    console.log(error.message)
  }
}


export const createUser = (payload) => {

  try {   
    return async function () {
      // await axios.post("http://localhost:3001/users", payload)
      // , {
        await axios.post("https://el-bodegon-api-wine.vercel.app/users", payload)
      //   headers: {
      //     "Content-Type": "multipart/form-data"
      //   }
      // })
    }
  } catch (error) {
    console.log(error.message)
  }
}

export const saveCarrito = (payload) => {
  return async function (dispatch) {
    console.log(payload);
    try {
      //funciona desde local host
      // await axios.put(`http://localhost:3001/cart/${payload.id}`, payload.cart)
      await axios.put(`https://el-bodegon-api-wine.vercel.app/cart/${payload.id}`, payload.cart)
      console.log("funciona");
  } catch (error) {
    console.log(error.message);
  }
}
}

export const setSavedCarrito = (id) => {
  return async function(dispatch) {
    try {
      //funciona desde local host
      // const carrito = await axios.get(`http://localhost:3001/cart/${id}`)
      const carrito = await axios.get(`https://el-bodegon-api-wine.vercel.app/cart/${id}`)
      console.log(carrito.data.items);
      dispatch({type: SET_SAVED_CARRITO, payload: carrito.data.items})
    } catch (error) {
      
    }
  }
} 

export const createPayment = (payload) => {
  try {
      return async function () {            
        await axios.post('https://el-bodegon-api-wine.vercel.app/payment', payload)       
        // await axios.post('https://el-bodegon-api-wine.vercel.app/payment', payload)       
        .then((res)=>window.location.href= res.data.response.body.init_point)
      }
  } catch (error) {
    console.log(error.message)
  }
}


export function getCategories () {
  return async (dispatch) => {
    try {
      const categories = await axios.get(`https://el-bodegon-api-wine.vercel.app/categories`);       
      const parsedCategories = categories.data.map(category => category.name)
      return dispatch({type: GET_CATEGORIES, payload: parsedCategories})
    } catch (error) {
      throw Error(error)
    }
  }
}
  
export function setCategory (category) {
  return async (dispatch) => {
    return dispatch({type: SET_CATEGORY, payload: category})
  }
}

export function setFltedDishes (category) {
    return async (dispatch) => {
      try {
        return dispatch({
          type: SET_FLTEDDISHES,
          payload: category
        })
      } catch (error) {
        throw Error(error)
      }
    }
  }

export function setOrderings (order) {
    return async (dispatch) => {    
      return dispatch({type: SET_ORDERINGS, payload: order})
  }
}

export function getAuth0Users () {
  return async(dispatch)=>{
    const auth0Users = await axios.get(`https://el-bodegon-api-wine.vercel.app/auth0Users`)

    return dispatch({type: GET_AUTH0_USERS, payload: auth0Users.data})
  }
}

export function getAuth0User(sub) {
  return async dispatch => {
    try {
      const auth0User = await axios.get(`https://el-bodegon-api-wine.vercel.app/auth0Users/${sub}`)
      // const auth0User = await axios.get(`https://el-bodegon-api-wine.vercel.app/auth0Users/${sub}`)
      console.log(auth0User.data[0]);
      return dispatch({type: GET_AUTH0_USER_BY_ID, payload: auth0User.data[0]})
    } catch (error) {
      console.log(error);
    }
  }
}
export function createAuth0User (user) {
  return async dispatch => {
    try {
      const {name, nickname, email, sub} = user;
      const newAuth0User = {name, nickname, email, sub}
      console.log(newAuth0User);
      // await axios.post(`http://localhost:3001/auth0Users`, newAuth0User)
      await axios.post(`http://el-bodegon-api-wine.vercel.app/auth0Users`, newAuth0User)

      return dispatch({type:CREATE_NEW_AUTH0_USER, payload:newAuth0User})
    } catch (error) {
      console.log(error);
    }
  }
}

export function setLocalCarrito (carrito) {
  return async dispatch => {
    return dispatch({type: SET_LOCAL_CARRITO, payload: carrito})
  }
}

export function addProduct (product) {
  return async dispatch => {
    return dispatch({type: ADD_PRODUCT, payload: product})
  }
}

export function removeProduct (product) {
  return async dispatch => {
    return dispatch({type:REMOVE_PRODUCT, payload: product})
  }
}

export function removeManyProducts (product) {
  console.log(product);
  return async dispatch => {
    return dispatch({type: REMOVE_MANY_PRODUCTS, payload: product})
  }
}

export function removeAllProducts (product) {
  return async dispatch => {
    return dispatch({type: REMOVE_ALL_PRODUCTS, payload: product})
  }
}

export function addTotalPrice (product) {
  return async dispatch => {
    return dispatch({type: ADD_TOTAL_PRICE, payload: product})
  }
}

export function reduceTotalPrice (product) {
  return async dispatch => {
    return dispatch({type: REDUCE_TOTAL_PRICE, payload: product})
  }
}

export function getAllUsers () {
  return async dispatch => {
    try {
      const users = await axios.get(`https://el-bodegon-api-wine.vercel.app/users`);       
      return dispatch({type: GET_ALL_USERS, payload: users.data})
    } catch (error) {
      console.log(error);
    }
  }
}