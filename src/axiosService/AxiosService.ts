import axios from "axios";
import {Weather} from "../Types";

export const sendFiles = () => {
}


export function getDataByPage(page: number) {
    return axios.get(`http://localhost:8080/${page}`)
        .then((response) => response.data as unknown as Iterable<Weather>)
}

export function getAllData() {
    return axios.get(`http://localhost:8080/data`)
        .then((response) => response.data as unknown as Iterable<Weather>)
        .then(response=> {console.log(response)
        return response;})
}

