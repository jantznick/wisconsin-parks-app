// Helper function to get a basic weather icon name from short forecast string
export const getBasicWeatherIconName = (shortForecast: string): string => {
	const forecast = shortForecast.toLowerCase();
	if (forecast.includes('sunny') || forecast.includes('clear')) return 'sunny-outline';
	if (forecast.includes('partly cloudy') || forecast.includes('mostly sunny')) return 'partly-sunny-outline';
	if (forecast.includes('cloudy') || forecast.includes('overcast')) return 'cloud-outline';
	if (forecast.includes('rain') || forecast.includes('showers')) return 'rainy-outline';
	if (forecast.includes('snow') || forecast.includes('flurries')) return 'snow-outline';
	if (forecast.includes('thunderstorm') || forecast.includes('t-storms')) return 'thunderstorm-outline';
	if (forecast.includes('windy') || forecast.includes('breezy')) return 'flag-outline'; // Using flag for wind as a general icon
	if (forecast.includes('fog')) return 'menu-outline'; // No direct fog icon, using menu as placeholder for low visibility
	return 'ellipse-outline'; // Default icon
};