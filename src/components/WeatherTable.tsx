import React, {useEffect, useState} from "react";
import {Column, useTable} from "react-table";
import {Weather} from "../Types";
import {getData} from "../axiosService/AxiosService";

const WeatherTable = () => {
   const [dataState, setDataState] = useState(Array<Weather>())
   const [page,setPage] = useState(1)

    useEffect(() => {
        let weatherInformation = getData(page);
        if(weatherInformation){
       setDataState(weatherInformation)
        }
        }, []
    )

    useEffect(() => {
        let weatherInformation = getData(page);
        if(weatherInformation){
            setDataState(weatherInformation)
        }
        }, [page]
    )

    const data = React.useMemo(
        () => dataState
        , [dataState]
    )

    const columns: Array<Column<Weather>> = React.useMemo(() => [
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
        ], [dataState]
    );



    const tableInstance = useTable({columns, data})
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = tableInstance;
    //25 рядов на страницу возвращать каким-то циклом
    //а ячеек столько сколько строчек в объекте дата
    return (<table {...getTableProps}>
        <thead>
        {headerGroups.map(headerGroup => <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => <th{...column.getHeaderProps}>{column.render('Header')}</th>)}
        </tr>)}
        </thead>
        <tbody {...getTableBodyProps}>
        {rows.map(row => {
            prepareRow(row);
            return <tr{...row.getRowProps}>{row.cells.map(cell =>
                <td{...cell.getCellProps}>{cell.render('Cell')}</td>)}</tr>
        })}
        </tbody>
    </table>)
}

export default WeatherTable;