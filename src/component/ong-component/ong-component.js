import React, {useEffect, useRef, useState} from 'react';
import {queryOng} from "../../services/queryServices";
import BubbleChart from '@weknow/react-bubble-chart-d3';
import ReactHTMLDatalist from "react-html-datalist";

function OngComponent() {

    const [data, setData] = useState([]);
    const [dataBubbleChart, setDataBubbleChart] = useState([]);
    const [year, setYear] = useState(2017);

    useEffect(() => {
        queryOng(year).then(data => {
            // setYear(yearsToArray(data));
            // setBroadbandData(broadbandToArray(data));
            // setMobileData(mobileToArray(data));
            // setShareData(shareToArray(data));
            console.log("data receive : " + data[0]["country"]);
            setData(data);
            transformDataToBubbleChartData(data);
        });
    }, [year]);

    const bubbleClick = (label) => {
        console.log("Custom bubble click func")
    }

    const legendClick = (label) => {
        console.log("Customer legend click func")
    }

    const transformDataToBubbleChartData = (data) => {

        data = data.filter(item => item.country !== 'total' && item.country !== "World");
        setDataBubbleChart(data.map(item => {
            return {label: item["country"], value: item["numberUser"]}
        }));
    }

    useEffect(() => {
        if (dataBubbleChart.length > 0) {
            console.log("data for BubbleChart = " + dataBubbleChart[0].label + " value " +dataBubbleChart[0].value);
        }

    }, [dataBubbleChart])

    /*const handleChange = e => {
        console.log(e.target.value);
        setYear(e.target.value);
    }*/

    const handleButtonClick = () => {
        console.log(input.current.value);
        setYear(input.current.value);
    }

    const input = useRef(null);

    return (
        <>
            {/*<form >
                <label> Choose your years: </label>
                <input list="years" type="text" onClick={handleChange} />
                <datalist id="years">
                    <option value="2003"/>
                    <option value="2004"/>
                    <option value="2005"/>
                    <option value="2006"/>
                    <option value="2007"/>
                    <option value="2008"/>
                    <option value="2009"/>
                    <option value="2010"/>
                    <option value="2011"/>
                    <option value="2012"/>
                    <option value="2013"/>
                    <option value="2014"/>
                    <option value="2015"/>
                    <option value="2016"/>
                    <option value="2017"/>
                </datalist>
            </form>*/}
            <p>Select the year :
                <input type="text" ref={input} value={year}/>
                <button onClick={handleButtonClick}>submit</button>
            </p>
            {/*<ReactHTMLDatalist name="years-list"
                               onChange={handleChange}
                               options={[
                                   {text: "2003", value: "2003"},
                                   {text: "2004", value: "2004"},
                                   {text: "2005", value: "2005"},
                                   {text: "2006", value: "2006"},
                                   {text: "2007", value: "2007"},
                                   {text: "2008", value: "2008"},
                                   {text: "2009", value: "2009"},
                                   {text: "2010", value: "2010"},
                                   {text: "2011", value: "2011"},
                                   {text: "2012", value: "2012"},
                                   {text: "2013", value: "2013"},
                                   {text: "2014", value: "2014"},
                                   {text: "2015", value: "2015"},
                                   {text: "2016", value: "2016"},
                                   {text: "2017", value: "2017"}
                               ]}
            />*/}
            <BubbleChart
                graph={{
                    zoom: 1.1,
                    offsetX: -0.05,
                    offsetY: -0.01,
                }}
                width={1000}
                height={800}
                padding={0} // optional value, number that set the padding between bubbles
                showLegend={true} // optional value, pass false to disable the legend.
                legendPercentage={20} // number that represent the % of with that legend going to use.
                legendFont={{
                    family: 'Arial',
                    size: 12,
                    color: '#000',
                    weight: 'bold',
                }}
                valueFont={{
                    family: 'Arial',
                    size: 12,
                    color: '#fff',
                    weight: 'bold',
                }}
                labelFont={{
                    family: 'Arial',
                    size: 16,
                    color: '#fff',
                    weight: 'bold',
                }}
                //Custom bubble/legend click functions such as searching using the label, redirecting to other page
                bubbleClickFunc={bubbleClick}
                legendClickFun={legendClick}
                /*data={[
                    {label: 'CRM', value: 1},
                    {label: 'API', value: 1},
                    {label: 'Data', value: 1},
                    {label: 'Commerce', value: 1},
                    {label: 'AI', value: 3},
                    {label: 'Management', value: 5},
                    {label: 'Testing', value: 6},
                    {label: 'Mobile', value: 9},
                    {label: 'Conversion', value: 9},
                    {label: 'Misc', value: 21},
                    {label: 'Databases', value: 22},
                    {label: 'DevOps', value: 22},
                    {label: 'Javascript', value: 23},
                    {label: 'Languages / Frameworks', value: 25},
                    {label: 'Front End', value: 26},
                    {label: 'Content', value: 26},
                ]}*/
                data={dataBubbleChart}
            />
        </>
    );
}

export default OngComponent;

