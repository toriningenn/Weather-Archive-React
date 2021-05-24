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
        usePagination
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

    return (
        <>
      <pre>
        <code>
          {JSON.stringify(
              {
                  pageIndex,
                  pageSize,
                  pageCount,
                  canNextPage,
                  canPreviousPage,
              },
              null,
              2
          )}
        </code>
      </pre>
        <table {...getTableProps}>
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
    </table>

            <div className="pagination">
                <button onClick={()=>gotoPage(0)} disabled={!canPreviousPage}>
                    {'<<'}
                </button>
                <button onClick={()=>previousPage()} disabled={!canPreviousPage}>
                    {'<'}
                </button>
                <button onClick={()=> nextPage()} disabled={!canNextPage}>
                    {'>'}
                </button>
                <button onClick={()=>gotoPage(pageCount-1)} disabled={!canNextPage}>
                    {'>>'}
                </button>
                <span>
                    Page <strong>{pageIndex + 1} of {pageOptions.length}</strong>
                </span>
                <span>
           | Go to page:{' '}
           <input type="number"
           defaultValue={pageIndex + 1}
           onChange={e=>{const page = e.target.value ? Number(e.target.value) - 1 : 0;
           gotoPage(page)}}
           style={{ width: '100px' }}/>
                    </span>
                <select value={pageSize}
                 onChange={e=>{setPageSize(Number(e.target.value))}}>
                    {[10,50,100].map(pageSize => (
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