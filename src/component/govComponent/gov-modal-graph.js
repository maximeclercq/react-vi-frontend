import React from "react";
import ReactModal from 'react-modal';
import GovChart from "../graph/govGraph";
import Plot from 'react-plotly.js';

export default class GovModalGraph extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            data: {
                "year": [
                    2004,
                    2005,
                    2006,
                    2007,
                    2008,
                    2009,
                    2010,
                    2011,
                    2012,
                    2013,
                    2014,
                    2015,
                    2016,
                    2017,
                    2018,
                    2019
                ],
                "mobile": [
                    51.16733273,
                    83.52351405,
                    105.0701387,
                    119.4978199,
                    139.2838126,
                    160.5071896,
                    165.6610167,
                    141.7866096,
                    144.4957561,
                    151.2556334,
                    152.7878864,
                    156.7665611,
                    157.718498,
                    156.187408,
                    157.431312,
                    164.3876311
                ],
                "broadband": [
                    0.468487637,
                    1.105990532,
                    2.022269285,
                    3.420206294,
                    6.478240887,
                    9.000403155,
                    10.94234698,
                    12.27170131,
                    14.53068301,
                    16.45263962,
                    17.24714162,
                    18.54085073,
                    18.94519321,
                    21.37237509,
                    22.0008863,
                    22.52492345
                ],
                "share": [
                    12.8593889,
                    15.2266732,
                    18.02327746,
                    24.66,
                    26.83,
                    29,
                    43,
                    49,
                    63.8,
                    67.97,
                    70.52,
                    70.09924123,
                    73.09143462,
                    76.00813853,
                    80.86472187,
                    82.64216187
                ]
            }
        }
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    };

    handleOpenModal() {
        this.setState({showModal: true});
    }

    handleCloseModal() {
        this.setState({showModal: false});
    }

    render() {
        return (
            <div>
                <button onClick={this.handleOpenModal}>Open window</button>
                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel="Minimal Modal Example">
                    {/*<GovChart data={this.state.data}/>*/}
                    <Plot
                        data = {[
                            {
                                x:this.state.data["year"],
                                y:this.state.data["mobile"],
                                type: 'scatter',
                            },
                            {
                                x:this.state.data["year"],
                                y:this.state.data["broadband"],
                                type: 'scatter',
                            },
                            {
                                x:this.state.data["year"],
                                y:this.state.data["share"],
                                type: 'scatter',
                            }
                        ]}
                        />
                    <button onClick={this.handleCloseModal}>Close window</button>
                </ReactModal>
            </div>
        );
    }

}