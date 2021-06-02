import {getDataByPage} from "./axiosService/AxiosService";
import {Weather} from "./Types";


function convertDate(unixTime: string | number) {
    return new Date(unixTime).toLocaleDateString("en-BZ");
}


export default async function createData(page: number) {
    let data = await getDataByPage(page) as Weather[];
    if (data) {
        data.forEach(weather => weather.date = (convertDate(weather.date)))
        return data;
    } else return Array<Weather>();
}