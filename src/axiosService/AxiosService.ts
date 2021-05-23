import axios from "axios";
import {Weather} from "../Types";

export const sendFiles = () => {
}

export function getData(page: number) {
   let data;
      axios.get(`http://localhost:8080/${page}`)
          .then((response ) => data = response);
      return data as unknown as Array<Weather>;
}

