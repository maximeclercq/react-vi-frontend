import './App.css';
import React, {useEffect, useState} from "react";
import { BrowserRouter, Route, Routes, Link, Navigate } from 'react-router-dom';
import logo from './logo.svg';
import {SVGMap} from "react-svg-map";
import World from "@svg-maps/world";
import "react-svg-map/lib/index.css";
import {queryGov} from "./services/queryServices";
import GovComponent from "./component/govComponent/govComponent";


function AfficherCarte() {
    return (
        <SVGMap map={World}/>
    );
}

class AfficherCarteClass extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <SVGMap map={World}/>
        )
    }
}

function TestData() {
    // const [loading, items] = useFetch('http://localhost:3300/gov/france/mobile/comments?_limit=200');
    // console.log(items);
    console.log(queryGov("france", "broadband"));
    return null;
}

// function useFetch(url) {
//     const [state, setState] = useState({
//         items: [],
//         loading: true
//     })
//
//     useEffect(() => {
//         (async () => {
//             const response = await fetch(url);
//             const responseData = await response.json();
//             if (response.ok) {
//                 setState({
//                     items: responseData,
//                     loading: false
//                 })
//             } else {
//                 alert(JSON.stringify(responseData));
//                 setState(s => ({...s, loading: false}));
//             }
//         })();
//     }, [])
//
//     return [
//         state.loading,
//         state.items
//     ]
// }

function ReactStandardAffichage() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}


export default function App() {
    return (
        <div>
            <BrowserRouter>
                <nav className="navbar navbar-expand navbar-dark bg-dark">
                    <div className="navbar-nav">
                        <Link to="/home" className="nav-item nav-link">Home</Link>
                        <Link to="/gov" className="nav-item nav-link">Government</Link>
                        <Link to="/ong" className="nav-item nav-link">ONG</Link>
                    </div>
                </nav>
                <Routes>
                    <Route
                        path="/"
                       render={() => {
                           return (
                               <Navigate to="/home" />
                           )
                       }
                    }/>
                    <Route exact path="gov" element={<GovComponent/>}/>
                    <Route exact path="ong" element={<AfficherCarte/>}/>
                    <Route exact path="home" element={<ReactStandardAffichage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
