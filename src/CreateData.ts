import {getDataByPage} from "./axiosService/AxiosService";
import {Weather} from "./Types";


export default function createData(page: number) {
    return getDataByPage(page).then((result) => {
        if (result) {
            return result as Weather[];
        } else return Array<Weather>();
    });
}