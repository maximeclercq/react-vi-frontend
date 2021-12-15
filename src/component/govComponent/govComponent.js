import {React, useEffect, useState, useCallback} from 'react';
import {SVGMap} from "react-svg-map";
import World from "@svg-maps/world";
import "react-svg-map/lib/index.css";
import {queryGov} from "../../services/queryServices";
import {broadbandToArray, dataToArray, mobileToArray, shareToArray, yearsToArray} from "../../helpers/helper";
import GovModalGraph from "./gov-modal-graph";


export default function GovComponent() {
    const [broadBand, setBroadband] = useState([]);
    const [mobile, setMobile] = useState([]);
    const [share, setShare] = useState([]);
    const [years, setYears] = useState([]);

    const [location, setLocation] = useState("");

    useEffect(() => {
        if (location !== "") {
            queryGov(location).then(data => {
                setYears(yearsToArray(data));
                setBroadband(broadbandToArray(data));
                setMobile(mobileToArray(data));
                setShare(shareToArray(data))
            });
            console.log("years : " + years);
            console.log("mobile : " + mobile);
            console.log("share : " + share);
            console.log("broadBand : " + broadBand);
        }
    }, [location]);

    return (
        <>
            <SVGMap map={World} onLocationClick={(location) => setLocation(location.target.getAttribute('name'))}/>
            <GovModalGraph/>
        </>
    );
}

function reset(state) {

}

