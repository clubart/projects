import React, { Component } from 'react';

export default class ZipInput extends Component {
    render() {
        return (
            <div className="input-group input-group-lg w-50 p-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-lg">enter zipcode</span>
                </div>
                <input type="number" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" onBlur={this.props.getTheWeatherFunction} />
            </div>
        );
    }
}
