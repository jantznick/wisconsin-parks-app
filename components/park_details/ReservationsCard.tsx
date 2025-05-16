import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Alert, Linking, Modal, Pressable, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Park } from '../../interfaces/Park.interface';
import { getColor } from '../../utils/colors';
import { formatDateForDisplay, formatDateForUrl } from '../../utils/date';
import AnimatedPressable from '../AnimatedPressable';

interface ReservationsCardProps {
    park: Park;
    effectiveTheme: string | undefined;
}

const equipmentOptions = [
    "Tent",
    "Truck Camper",
    "Pop-Up",
    "Trailer/RV up to 20'",
    "Trailer/RV up to 25'",
    "Trailer/RV up to 30'",
    "Trailer/RV up to 35'",
    "Trailer/RV 35+'",
    "Other",
];

const ReservationsCard: React.FC<ReservationsCardProps> = ({ park, effectiveTheme }) => {
    const [selectedStartDate, setSelectedStartDate] = useState<Date | undefined>(undefined);
    const [selectedEndDate, setSelectedEndDate] = useState<Date | undefined>(undefined);
    const [selectedEquipment, setSelectedEquipment] = useState<string>('');
    const [isStartDatePickerVisible, setIsStartDatePickerVisible] = useState<boolean>(false);
    const [isEndDatePickerVisible, setIsEndDatePickerVisible] = useState<boolean>(false);
    const [isEquipmentPickerVisible, setIsEquipmentPickerVisible] = useState<boolean>(false);

    const showStartDatePicker = () => setIsStartDatePickerVisible(true);
    const hideStartDatePicker = () => setIsStartDatePickerVisible(false);
    const showEndDatePicker = () => {
        if (!selectedStartDate) {
            Alert.alert("Select Check-in", "Please select a check-in date first.");
            return;
        }
        setIsEndDatePickerVisible(true);
    };
    const hideEndDatePicker = () => setIsEndDatePickerVisible(false);

    const handleConfirmStartDate = (date: Date) => {
        setSelectedStartDate(date);
        hideStartDatePicker();
        if (selectedEndDate && selectedEndDate <= date) {
            setSelectedEndDate(undefined);
        }
    };

    const handleConfirmEndDate = (date: Date) => {
        setSelectedEndDate(date);
        hideEndDatePicker();
    };

    const openReservationLink = () => {
        if (!selectedStartDate) {
            Alert.alert("Missing Information", "Please select a check-in date.");
            return;
        }
        if (!selectedEndDate) {
            Alert.alert("Missing Information", "Please select a check-out date.");
            return;
        }
        if (selectedEndDate <= selectedStartDate) {
            Alert.alert("Invalid Dates", "Check-out date must be after the check-in date.");
            return;
        }

        let equipmentId = -32768;
        let subEquipmentId = -32767;

        if (selectedEquipment === "Truck Camper") {
            equipmentId = -32766;
            subEquipmentId = -32765;
        } else if (selectedEquipment === "Pop-Up") {
            equipmentId = -32764;
            subEquipmentId = -32763;
        } else if (selectedEquipment.startsWith("Trailer/RV")) {
            equipmentId = -32762;
            subEquipmentId = -32761;
        }

        const startDateStr = formatDateForUrl(selectedStartDate);
        const endDateStr = formatDateForUrl(selectedEndDate);
        const nights = Math.round((selectedEndDate.getTime() - selectedStartDate.getTime()) / (1000 * 60 * 60 * 24));
        if (nights <= 0) {
            Alert.alert("Invalid Dates", "Number of nights must be at least 1.");
            return;
        }

        const now = new Date();
        const searchTime = `${formatDateForUrl(now)}T${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}.${now.getMilliseconds().toString().padStart(3, '0')}`;

        const params = new URLSearchParams({
            resourceLocationId: park.resourceLocationId,
            mapId: park.mapId,
            searchTabGroupId: "0",
            bookingCategoryId: "0",
            startDate: startDateStr,
            endDate: endDateStr,
            nights: nights.toString(),
            isReserving: "true",
            equipmentId: equipmentId.toString(),
            subEquipmentId: subEquipmentId.toString(),
            peopleCapacityCategoryCounts: "[[-32768,null,1,null]]",
            searchTime: searchTime,
            flexibleSearch: "[false,false,null,1]",
        });

        const reservationUrl = `https://wisconsin.goingtocamp.com/create-booking/results?${params.toString()}`;

        Linking.openURL(reservationUrl).catch(err => {
            console.error("Failed to open URL:", err);
            Alert.alert("Error", "Could not open the reservation website. Ensure you have selected a date and equipment type.");
        });
    };

    return (
        <View className="bg-white dark:bg-charcoal-800 rounded-xl p-4 shadow-lg mb-6 border-l-4 border-emerald-600 dark:border-emerald-400">
            <Text className="text-xl font-semibold text-emerald-600 dark:text-emerald-400 mb-4">Plan Your Stay</Text>
            <View className="flex-row justify-between mb-4">
                <View className="flex-1 mr-2">
                    <Text className="text-sm font-medium text-charcoal-700 dark:text-charcoal-300 mb-1">Check-in</Text>
                    <Pressable onPress={showStartDatePicker}>
                        <View className="bg-charcoal-50 dark:bg-charcoal-700 p-3 rounded-md flex-row justify-between items-center">
                            <Text className={`text-base ${selectedStartDate ? 'text-charcoal-800 dark:text-charcoal-100' : 'text-charcoal-400 dark:text-charcoal-500'}`}>
                                {formatDateForDisplay(selectedStartDate)}
                            </Text>
                            <Ionicons name="calendar-outline" size={20} color={getColor(effectiveTheme === 'dark' ? 'charcoal-300' : 'charcoal-500')} />
                        </View>
                    </Pressable>
                </View>
                <View className="flex-1 ml-2">
                    <Text className="text-sm font-medium text-charcoal-700 dark:text-charcoal-300 mb-1">Check-out</Text>
                    <Pressable onPress={showEndDatePicker} disabled={!selectedStartDate}>
                        <View className={`bg-charcoal-50 dark:bg-charcoal-700 p-3 rounded-md flex-row justify-between items-center ${!selectedStartDate ? 'opacity-50' : ''}`}>
                            <Text className={`text-base ${selectedEndDate ? 'text-charcoal-800 dark:text-charcoal-100' : 'text-charcoal-400 dark:text-charcoal-500'}`}>
                                {formatDateForDisplay(selectedEndDate)}
                            </Text>
                            <Ionicons name="calendar-outline" size={20} color={getColor(effectiveTheme === 'dark' ? 'charcoal-300' : 'charcoal-500')} />
                        </View>
                    </Pressable>
                </View>
            </View>
            <DateTimePickerModal
                isVisible={isStartDatePickerVisible}
                mode="date"
                onConfirm={handleConfirmStartDate}
                onCancel={hideStartDatePicker}
                minimumDate={new Date()}
            />
            <DateTimePickerModal
                isVisible={isEndDatePickerVisible}
                mode="date"
                onConfirm={handleConfirmEndDate}
                onCancel={hideEndDatePicker}
                minimumDate={selectedStartDate ? new Date(new Date(selectedStartDate).setDate(selectedStartDate.getDate() + 1)) : new Date()}
            />
            <View className="mb-4">
                <Text className="text-sm font-medium text-charcoal-700 dark:text-charcoal-300 mb-1">Equipment</Text>
                <Pressable onPress={() => setIsEquipmentPickerVisible(true)}>
                    <View className="bg-charcoal-50 dark:bg-charcoal-700 p-3 rounded-md flex-row justify-between items-center">
                        <Text className={`text-base ${selectedEquipment ? 'text-charcoal-800 dark:text-charcoal-100' : 'text-charcoal-400 dark:text-charcoal-500'}`}>
                            {selectedEquipment || "Select equipment type"}
                        </Text>
                        <Ionicons name="chevron-down" size={20} color={getColor(effectiveTheme === 'dark' ? 'charcoal-300' : 'charcoal-500')} />
                    </View>
                </Pressable>
            </View>
            <AnimatedPressable
                onPress={openReservationLink}
                className="bg-emerald-600 dark:bg-emerald-500 px-4 py-3 rounded-lg flex-row items-center justify-center shadow-md active:opacity-80"
            >
                <Text className="text-white dark:text-emerald-50 font-semibold text-base">Open Reservation Link</Text>
                <Ionicons name="exit-outline" size={20} color="white" style={{ marginLeft: 8 }} />
            </AnimatedPressable>

            {/* Equipment Picker Modal */}
            {isEquipmentPickerVisible && (
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={isEquipmentPickerVisible}
                    onRequestClose={() => setIsEquipmentPickerVisible(false)}
                >
                    <Pressable
                        className="flex-1 justify-end bg-black/50"
                        onPress={() => setIsEquipmentPickerVisible(false)}
                    >
                        <Pressable
                            className="w-full bg-white dark:bg-charcoal-800 rounded-t-2xl pt-5 pb-safe"
                            onPress={() => { /* Prevent closing modal when pressing inside the content */ }}
                        >
                            <Text className="text-lg font-semibold text-center mb-2 text-charcoal-900 dark:text-charcoal-100 px-5">Select Equipment Type</Text>
                            <View className="h-px bg-charcoal-200 dark:bg-charcoal-700 mb-3" />
                            <ScrollView style={{ maxHeight: 300 }} contentContainerStyle={{ paddingBottom: 10 }}>
                                {equipmentOptions.map((option, index) => (
                                    <TouchableOpacity
                                        key={index}
                                        onPress={() => {
                                            setSelectedEquipment(option);
                                            setIsEquipmentPickerVisible(false);
                                        }}
                                        className="px-5 py-3.5 flex-row items-center"
                                    >
                                        <Ionicons
                                            name={selectedEquipment === option ? "radio-button-on-outline" : "radio-button-off-outline"}
                                            size={22}
                                            color={getColor(effectiveTheme === 'dark' ? (selectedEquipment === option ? 'persian-400' : 'charcoal-400') : (selectedEquipment === option ? 'persian-600' : 'charcoal-500'))}
                                            style={{ marginRight: 12 }}
                                        />
                                        <Text className="text-base text-charcoal-800 dark:text-charcoal-200 flex-1">{option}</Text>
                                    </TouchableOpacity>
                                ))}
                            </ScrollView>
                            <TouchableOpacity
                                onPress={() => setIsEquipmentPickerVisible(false)}
                                className="mt-3 mb-3 py-3 bg-charcoal-200 dark:bg-charcoal-700 rounded-lg mx-5 active:opacity-75"
                            >
                                <Text className="text-charcoal-800 dark:text-charcoal-100 text-center font-semibold text-base">Cancel</Text>
                            </TouchableOpacity>
                        </Pressable>
                    </Pressable>
                </Modal>
            )}
        </View>
    );
};

export default ReservationsCard; 