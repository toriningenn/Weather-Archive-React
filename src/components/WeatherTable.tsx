import React, {useEffect, useState} from "react";
import {
    Column, defaultColumn, FilterProps,
    useFilters, useGlobalFilter,
    usePagination,
    useTable,
} from "react-table";
import {Weather, WeatherTableProps} from "../Types";


const WeatherTable = ({columns, data, getMoreDataFunc}: WeatherTableProps) => {


    const tableInstance = useTable({
            columns,
            data,
            initialState: {pageIndex: 0},
            autoResetPage: false,
        },
        useFilters,
        usePagination,
    );


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

    useEffect(() => {
        if (!canNextPage) {
            getMoreDataFunc();
        }
    }, [canNextPage])

    return (
        <>
            <table {...getTableProps}>
                <thead>
                {headerGroups.map(headerGroup => <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => <th{...column.getHeaderProps()}>{column.render('Header')}
                    </th>)}
                </tr>)}
                </thead>
                <tbody {...getTableBodyProps}>
                {page.map(row => {
                    prepareRow(row);
                    return <tr{...row.getRowProps}>{row.cells.map(cell =>
                        <td{...cell.getCellProps}>{cell.render('Cell')}</td>)}</tr>
                })}
                </tbody>
            </table>

            <div className="pagination">
                <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                    {'<<'}
                </button>
                <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                    {'<'}
                </button>
                <button onClick={() => nextPage()} disabled={!canNextPage}>
                    {'>'}
                </button>
                <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                    {'>>'}
                </button>
                <span>
                    Page <strong>{pageIndex + 1} of {pageOptions.length}</strong>
                </span>
                <span>
           | Go to page:{' '}
                    <input type="number"
                           defaultValue={pageIndex + 1}
                           onChange={e => {
                               const page = e.target.value ? Number(e.target.value) - 1 : 0;
                               gotoPage(page)
                           }}
                           style={{width: '100px'}}/>
                    </span>
                <select value={pageSize}
                        onChange={e => {
                            setPageSize(Number(e.target.value))
                        }}>
                    {[25, 50, 100].map(pageSize => (
                        <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                        </option>
                    ))}
                </select>
            </div>
        </>
    )
}

export default WeatherTable;