import React, {useEffect, useState} from "react";
import {Column} from "react-table";
import {Weather} from "../Types";
import createData from "../CreateData";
import createColumns from "../CreateColumns";
import WeatherTable from "./WeatherTable";
import UploadForm from "./UploadForm";

const App = () => {
    const [weatherInfo, setWeatherInfo] = useState(Array<Weather>());
    const [pageNumber, setPageNumber] = useState(1 as number)

    useEffect(() => {
        console.log("getting data...");
        createData(pageNumber).then(response => setWeatherInfo(response));
    }, [])

    useEffect(() => {
        let oldWeatherArr = weatherInfo;
        console.log("getting more data...");
        createData(pageNumber).then(response => setWeatherInfo(oldWeatherArr.concat(response)));
    }, [pageNumber])


    const data = React.useMemo(
        () => weatherInfo
        , [weatherInfo]
    )

    const columns = React.useMemo(() => createColumns(),
        []
    );

    function getNextData() {
        let newPageNumber = pageNumber + 1;
        setPageNumber(newPageNumber);
    }

    return <WeatherTable data={data} columns={columns} getMoreDataFunc={getNextData}/>
}
export default App;
