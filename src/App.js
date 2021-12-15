import './App.css';
import React, {useEffect, useState} from "react";
import {Routes, Route} from "react-router-dom";
import logo from './logo.svg';
// import {AfficherCarte} from "./main";
import {SVGMap} from "react-svg-map";
import World from "@svg-maps/world";
import "react-svg-map/lib/index.css";


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


function fetchData(url) {
      new Promise((res, rej) => {
        res(1); // pareil que res(1);
    }).then(val => {
        console.log(val);
    });


    return fetch(url, {
        mode: 'no-cors',
    }).then((val) => {
        console.log(val);
        return val; // pour la passer à un autre then()
        // throw new Error("Ceci est une erreur");
    }).catch(err => {
        console.error(err);
    })
}


function TestData() {
    // const [loading, items] = useFetch('http://localhost:3300/gov/france/mobile/comments?_limit=200');
    // console.log(items);
    fetchData('http://localhost:3300/gov/france/mobile');
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
        <Routes>
            <Route path="/"/>
            <Route path="gov" element={<> <AfficherCarteClass/> <TestData/> </>}/>
            <Route path="ong" element={<AfficherCarte/>}/>
            <Route path="home" element={<ReactStandardAffichage/>}/>
        </Routes>
    )
}
