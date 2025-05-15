
// Define an interface for a single forecast period from the NWS API
export interface ForecastPeriod {
	number: number;
	name: string;
	startTime: string;
	endTime: string;
	isDaytime: boolean;
	temperature: number;
	temperatureUnit: string;
	temperatureTrend: string | null;
	probabilityOfPrecipitation: {
		unitCode: string;
		value: number | null;
	} | null;
	dewpoint: {
		unitCode: string;
		value: number | null;
	} | null;
	relativeHumidity: {
		unitCode: string;
		value: number | null;
	} | null;
	windSpeed: string;
	windDirection: string;
	icon: string;
	shortForecast: string;
	detailedForecast: string;
}

// Interface for the summarized daily forecast
export interface DailyForecastSummary {
	dayName: string;
	date: Date;
	highTemp: number | null;
	lowTemp: number | null;
	iconName: string;
	representativePeriod: ForecastPeriod;
}

export interface AnimatedForecastTileProps {
  summary: DailyForecastSummary;
  index: number;
  onPressTile: (period: ForecastPeriod) => void;
  currentTheme: string | undefined;
} 