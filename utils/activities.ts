import { Activity } from '../interfaces/Activity.interface';

// const ACTIVITIES_DATA = require('../data/activities.json'); // Removed

// Note: Hooks like useActivities cannot be used directly in utility files.
// This function will need to be called from a component that has access to the ActivitiesContext,
// or the activities data needs to be passed to it.
// For now, we'll adjust it to accept activities as an argument.

export const getActivityName = (activityId: number, activities: Activity[]): string | null => {
    if (!activities || activities.length === 0) return null;
    const activity = activities.find((act: Activity) => act.id === activityId);
    return activity ? activity.name : null;
};

// If you need a version that uses the hook, it would typically be a custom hook itself,
// or part of a component, for example:
/*
import { useActivities } from '../contexts/ActivitiesContext';

export const useActivityLookup = () => {
  const { activities, loading, error } = useActivities();

  const getActivityNameById = (activityId: number): string | null => {
    if (loading || error || !activities) return null;
    const activity = activities.find((act: Activity) => act.id === activityId);
    return activity ? activity.name : null;
  };

  return { getActivityNameById, activitiesLoading: loading, activitiesError: error };
};
*/
