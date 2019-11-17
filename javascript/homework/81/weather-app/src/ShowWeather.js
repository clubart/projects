import React, { Component } from 'react';

export default class ShowWeather extends Component {
    render() {
        const { name, icon, descriptionText, date } = this.props.weather
        return (
            <div className="container {/*border border-primary rounded*/}p-3 mb-2 bg-light text-dark">
                <div className="row">
                <div className="mx-auto">{date}</div>
                </div>
                <div className="row">
                <div className="mx-auto">{name}</div>
                </div>
                <div className="row">
                <img className="mx-auto" src={`http://openweathermap.org/img/wn/${icon}@2x.png`}></img>
                </div>
                <div className="row">
                <div className="mx-auto">{descriptionText}</div>
                </div>
            </div>
        );
    }
}