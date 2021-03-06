import {Column} from "react-table";

export type Weather = {
    date: string | number,
    time: number | Date,
    vlh: number,
    pressure: number,
    wind: string,
    speed: number | null,
    obl: number,
    h: number,
    vv: number | null,
    weatherCond: string,
    t: number,
    td: number,
}

export type WeatherTableProps = {
    columns: Array<Column<Weather>>,
    data: Array<Weather>,
    getMoreDataFunc: () => void,
}