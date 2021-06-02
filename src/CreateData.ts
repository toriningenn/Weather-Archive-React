import {getDataByPage} from "./axiosService/AxiosService";
import {Weather} from "./Types";


function convertDate(unixTime: string | number) {
    return new Date(unixTime).toLocaleDateString("en-BZ");
}


export default function createData(page: number) {
    return getDataByPage(page).then((result) => {
        if (result) {
            let resultArray = result as Weather[]
            resultArray.forEach(weather =>  weather.date = (convertDate(weather.date)))
            return resultArray;
        } else return Array<Weather>();
    });
}