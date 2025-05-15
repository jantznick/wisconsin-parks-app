const ACTIVITIES_DATA = require('../data/activities.json');

export const getActivityName = (activityId: number) => {
    const activity = ACTIVITIES_DATA.find((activity: any) => activity.id === activityId);
    return activity ? activity.name : null;
};
