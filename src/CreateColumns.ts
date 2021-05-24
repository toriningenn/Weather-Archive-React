import {Column} from "react-table";
import {Weather} from "./Types";

const createColumns = (): Array<Column<Weather>> => {
    return [
        {
            Header: 'Дата',
            accessor: 'date',
        },
        {
            Header: 'Время (московское)',
            accessor: 'time',
        },
        {
            Header: 'T',
            accessor: 't',
        },
        {
            Header: 'Отн. влажность воздуха, %',
            accessor: 'vlh',
        },
        {
            Header: 'Td',
            accessor: 'td',
        },
        {
            Header: 'Атм. давление, мм рт.ст.',
            accessor: 'pressure',
        },
        {
            Header: 'Направление ветра',
            accessor: 'wind',
        },
        {
            Header: 'Скорость ветра, м/с',
            accessor: 'speed',
        },
        {
            Header: 'Облачность, %',
            accessor: 'obl',
        },
        {
            Header: 'h',
            accessor: 'h',
        },
        {
            Header: 'VV',
            accessor: 'vv',
        },
        {
            Header: 'Погодные явления',
            accessor: 'weatherCond',
        },
    ]
}

export default createColumns;