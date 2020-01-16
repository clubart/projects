export interface WeatherServerData {
    name: string;
    weather: [{ description: string, icon: string }];
    main: { temp: number };
    sys: {sunrise: number, sunset: number}
}

export interface Weather {
    place: string;
    temp: number;
    description: string;
    picture: string;
}

export interface WeatherDetails {
    weather: Weather;
    sunrise: number;
    sunset: number
}