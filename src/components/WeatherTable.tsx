import React, {useEffect} from "react";
import Table from 'react-bootstrap/Table';
import {
    useFilters,
    usePagination,
    useTable,
} from "react-table";
import {WeatherTableProps} from "../Types";
import DefaultDateFilter from "./FilterUI";


const WeatherTable = ({columns, data, getMoreDataFunc}: WeatherTableProps) => {

    const defaultColumn = React.useMemo(() => ({
        Filter: DefaultDateFilter,
    }), [])

    const tableInstance = useTable({
            columns,
            data,
            defaultColumn,
            initialState: {pageIndex: 0, pageSize: 15},
            autoResetPage: false,
            autoResetFilters: false,
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
        state: {pageIndex, pageSize, filters},
    } = tableInstance;


    useEffect(() => {
        if (!canNextPage) {
            getMoreDataFunc();
        }
    }, [canNextPage])

    React.useEffect(() => {
        if (filters) {
            gotoPage(0)
        }
    }, [filters]);

    return (
        <>
            <Table striped bordered hover size="sm" variant="dark">
                <table {...getTableProps} >
                    <thead>
                    {headerGroups.map(headerGroup => <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => <th{...column.getHeaderProps()}>{column.render('Header')}
                            <div> {column.canFilter ? column.render('Filter') : null}</div>
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
            </Table>

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
                    {[15, 25, 50, 100].map(pageSize => (
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