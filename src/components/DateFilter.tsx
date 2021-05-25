import {FilterProps} from "react-table";
import {Weather} from "../Types";
import React from "react";

export default function DateFilter({column: { filterValue, setFilter, preFilteredRows, id },}: FilterProps<Weather>) {
const options = React.useMemo(()=> {
    const options = new Set();
    preFilteredRows.forEach(row=>{options.add(row.values[id])})
    return [...options.values()]
}, [id, preFilteredRows])
    return( <select
        value={filterValue}
        onChange={e=> {setFilter(e.target.value || undefined)}}>
<option value="">All</option>
            { //@ts-ignore
                options.map((option,i)=>(<option key={i} value={option}>{option}</option>))}
        </select>)
}