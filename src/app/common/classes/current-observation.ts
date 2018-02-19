import { DisplayLocation } from "./dispalylocation";

export class CurrentObservation {
    display_location: DisplayLocation;
    observation_time:string;
    weather: string;
    temp_c: number;
    relative_humidity: string;
    wind_dir: string;
    wind_kph: number;
    wind_gust_kph: string;
    feelslike_c: string;
    visibility_km: string;
    UV: string;
    icon: string;
    icon_url:string;
}
