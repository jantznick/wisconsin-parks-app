// Helper function to get day abbreviation
export const getDayAbbreviation = (date: Date): string => {
	const today = new Date();
	const tomorrow = new Date();
	tomorrow.setDate(today.getDate() + 1);

	if (date.toDateString() === today.toDateString()) return "Today";

	return date.toLocaleDateString(undefined, { weekday: 'short' }); // e.g., "Mon"
};

export const formatDateForDisplay = (date: Date | undefined): string => {
    if (!date) return "Select a date";
    return date.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
};

export const formatDateForUrl = (date: Date): string => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
}; 