import React, {useEffect, useState} from "react";
import {Weather} from "../Types";
import createData from "../CreateData";
import createColumns from "../CreateColumns";
import WeatherTable from "./WeatherTable";


const App = () => {
    const [weatherInfo, setWeatherInfo] = useState(Array<Weather>());
    const [pageNumber, setPageNumber] = useState(1 as number)

    useEffect(() => {
        (async function () {
            console.log("getting data...");
            let data = await createData(pageNumber);
            setWeatherInfo(data);
        })()
    }, [])

    useEffect(() => {
        (async function () {
            let oldWeatherArr = weatherInfo;
            console.log("getting more data...");
            let data = await createData(pageNumber);
            setWeatherInfo(oldWeatherArr.concat(data));
        })()
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
