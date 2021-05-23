import axios from "axios";
import {Weather} from "../Types";

export const sendFiles = () => {
}

export function getData(page: number) {
   return axios.get(`http://localhost:8080/${page}`)
       .then((response)=> response.data as unknown as Iterable<Weather>)
}

