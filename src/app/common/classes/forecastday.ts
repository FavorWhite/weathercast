import { ForecastDate } from 'app/common/classes/forecastdate';
import { Temperature } from 'app/common/classes/temperature';
import { Precipitation } from 'app/common/classes/precipitation';
import { WindCharacteristics } from 'app/common/classes/windcharacteristics';

export class ForecastDay {
  public date: ForecastDate;
  public period: number;
  public high: Temperature;
  public low: Temperature;
  public conditions: string;
  public icon: string;
  public icon_url: string;
  public skyicon: string;
  public pop: number;

  public qpf_allday: Precipitation;
  public qpf_day: Precipitation;
  public qpf_night: Precipitation;
  public snow_allday: Precipitation;
  public snow_day: Precipitation;
  public snow_night: Precipitation;
  public maxwind: WindCharacteristics;
  public avewind: WindCharacteristics;
  public avehumidity: number;
  public maxhumidity: number;
  public minhumidity: number;

  constructor() { }
}
