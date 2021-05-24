import React, {useEffect, useState} from "react";
import {
    Column,
    usePagination,
    useTable,
} from "react-table";
import {Weather} from "../Types";
import {getData} from "../axiosService/AxiosService";

const WeatherTable = (props: {}) => {
  const  [dataState, setDataState] = useState(Array<Weather>());
  //const [page,setPage] = useState(1 as number);


    useEffect(() => {
    getData(1).then((result)=> {if(result) {
        setDataState(result as Weather[])
    } else setDataState(Array<Weather>())})
  }, []
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


    const tableInstance = useTable({
            columns,
            data,
            initialState: {pageIndex: 2},
        },
        usePagination);


    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: {pageIndex, pageSize},
    } = tableInstance;
    
    return (<table {...getTableProps}>
        <thead>
        {headerGroups.map(headerGroup => <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => <th{...column.getHeaderProps}>{column.render('Header')}</th>)}
        </tr>)}
        </thead>
        <tbody {...getTableBodyProps}>
        {page.map(row => {
            prepareRow(row);
            return <tr{...row.getRowProps}>{row.cells.map(cell =>
                <td{...cell.getCellProps}>{cell.render('Cell')}</td>)}</tr>
        })}
        </tbody>
    </table>)
}

export default WeatherTable;