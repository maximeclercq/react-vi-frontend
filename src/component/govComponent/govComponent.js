import { React, useEffect, useState, useCallback } from 'react';
import {SVGMap} from "react-svg-map";
import World from "@svg-maps/world";
import "react-svg-map/lib/index.css";
import {queryGov} from "../../services/queryServices";
import {dataToArray, yearsToArray} from "../../helpers/helper";

export default function GovComponent() {
    const [broadBand, setBroadband] = useState([]);
    const [mobile, setMobile] = useState([]);
    const [share, setShare] = useState([]);
    const [years, setYears] = useState([]);

    const [location, setLocation] = useState("");

    useEffect(() => {
        if (location !== ""){
            queryGov(location, "broadband").then(data => {
                setYears(yearsToArray(data));
                setBroadband(dataToArray(data, "broadBand"));
            });

            queryGov(location, "mobile").then(data => {
                setMobile(dataToArray(data, "mobile"));
            });

            queryGov(location, "share").then(data => {
                setShare(dataToArray(data, "share"));
                console.log(years)
                console.log(share);
            });
        }
    }, [location]);


    return (
        <SVGMap map={World} onLocationClick={(location) => setLocation(location.target.getAttribute('name'))}/>

    );
}
