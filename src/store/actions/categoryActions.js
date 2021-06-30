import axios from "axios";
import { ADD_CATEGORY , FETCH_CATEGORIES} from "./types";

export const addCategory = (category)=> {
    return async(dispatch)=>{
        try {
            const formData= new FormData();
            for(const key in category)
               formData.append(key,category[key])

           const res= await axios.post(`http://localhost:8080/categories`,formData)

            dispatch({
                type:ADD_CATEGORY,
                payload: {
                    category:res.data,
                }
            })
        } catch (error) {
            console.log(error.message)
        }

}}

export const fetchCategories = ()=>{
    return async (dispatch)=>{
    try {
        const res = await axios.get(`http://localhost:8080/categories`);
        console.log(res.data)
        dispatch({
            type:FETCH_CATEGORIES,
            payload: res.data,
        })
    } catch (error) {
        console.log(error.message)
    }

}}