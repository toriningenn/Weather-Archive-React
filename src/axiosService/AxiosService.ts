import axios from "axios";
import {Weather} from "../Types";

export const sendFiles = () => {
}


export async function getDataByPage(page: number) {
    let response = await axios.get(`http://app:8080/${page}`)
    return await response.data as unknown as Iterable<Weather>
}

