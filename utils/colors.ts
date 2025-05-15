import tailwindConfig from '../tailwind.config.js';

// Helper to get color from Tailwind config
export const getColor = (colorName: string): string => {
	// @ts-ignore
	const [theme, shade] = colorName.split('-');
	// @ts-ignore
	return tailwindConfig.theme.extend.colors[theme]?.[shade] || '#000000';
}; 