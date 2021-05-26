import {Column, FilterProps} from "react-table";
import {Weather} from "./Types";
import {JSXElementConstructor} from "react";

const createColumns = (): Array<Column<Weather>> => {
    return [
        {
            Header: 'Дата',
            accessor: 'date',
        },
        {
            Header: 'Время (московское)',
            accessor: 'time',
            disableFilters: true,
        },
        {
            Header: 'T',
            accessor: 't',
            disableFilters: true,
        },
        {
            Header: 'Отн. влажность воздуха, %',
            accessor: 'vlh',
            disableFilters: true,
        },
        {
            Header: 'Td',
            accessor: 'td',
            disableFilters: true,
        },
        {
            Header: 'Атм. давление, мм рт.ст.',
            accessor: 'pressure',
            disableFilters: true,
        },
        {
            Header: 'Направление ветра',
            accessor: 'wind',
            disableFilters: true,
        },
        {
            Header: 'Скорость ветра, м/с',
            accessor: 'speed',
            disableFilters: true,
        },
        {
            Header: 'Облачность, %',
            accessor: 'obl',
            disableFilters: true,
        },
        {
            Header: 'h',
            accessor: 'h',
            disableFilters: true,
        },
        {
            Header: 'VV',
            accessor: 'vv',
            disableFilters: true,
        },
        {
            Header: 'Погодные явления',
            accessor: 'weatherCond',
            disableFilters: true,
        },
    ]
}

export default createColumns;