import React, { Component } from 'react';
import './App.css';
import ZipInput from './ZipInput'
import ShowWeather from './ShowWeather'

class App extends Component {
  state = {
    zip: ''
  }

  getTheWeatherFunction = (e) => {
    this.setState({
      zip: e.target.value
    });
    const url = `http://api.openweathermap.org/data/2.5/weather?appid=cb7c71219cf09eb0bb414b932669be97&zip=${e.target.value}&units=imperial`;
    console.log(url);
    fetch(url)
      .then(response => response.json())
      .then(weatherData => {
        console.log('weatherData', weatherData);
        this.setState({
          weather: {
            name: weatherData.name,
            icon: weatherData.weather[0].icon,
            descriptionText: `${weatherData.main.temp} and ${weatherData.weather[0].description}`,
            date: new Date().toLocaleString()

          }
        });
      });
  }

  render() {
    console.log(this.state);
    const weather = this.state.weather ? <ShowWeather weather={this.state.weather} /> : null;
    return (
      // <div className="App">
      //   <ZipInput getTheWeatherFunction={this.getTheWeatherFunction} />
      //   {weather}
      // </div>
      <>
        <div className="container">
          <div className="jumbotron jumbotron-fluid" style={{ margin: 0 }}>
            <div className="container">
              <h1 className="display-4">Get Current Weather</h1>
              <ZipInput getTheWeatherFunction={this.getTheWeatherFunction} />
            </div>
          </div>
          {weather}
        </div>
      </>
    );
  }
}

export default App;
