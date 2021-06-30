import axios from "axios";
import { ADD_INGREDIENT, FETCH_INGREDIENTS } from "./types";

export const addIngredient = (ingredient , categoryId)=> {
    return async(dispatch)=>{
        try {
            const formData= new FormData();
            for(const key in ingredient)
               formData.append(key,ingredient[key])

           const res= await axios.post(`http://localhost:8080/categories/${categoryId}/ingredients`,formData)

            dispatch({
                type:ADD_INGREDIENT,
                payload: {
                    ingredient:res.data,
                }
            })
        } catch (error) {
            console.log(error.message)
        }

}}

export const fetchIngredients = ()=>{
    return async (dispatch)=>{
    try {
        const res = await axios.get(`http://localhost:8080/ingredients`);
        console.log(res.data)
        dispatch({
            type:FETCH_INGREDIENTS,
            payload: res.data,
        })
    } catch (error) {
        console.log(error.message)
    }

}}