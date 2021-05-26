import {Column, ColumnInstance, Row, UseColumnOrderState} from "react-table";

export default function DefaultDateFilter({column: {filterValue, preFilteredRows, setFilter,}}
                                       : { column: ColumnInstance }) {
    return (
        <input
            value={filterValue || ''}
            onChange={e => {
                setFilter(e.target.value || undefined)
            }}
            placeholder={'Начините вводить дату'}/>)
}