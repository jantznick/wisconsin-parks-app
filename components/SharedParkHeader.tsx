import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';
import { parkImageAssets } from '../data/image_assets';
import { SharedParkHeaderProps } from '../interfaces/SharedParkHeader.interfaces';
import tailwindConfig from '../tailwind.config.js';
import AnimatedPressable from './AnimatedPressable';
import FavoriteHeartIcon from './FavoriteHeartIcon';

// Helper to get color from Tailwind config (copied from other files)
const getColor = (colorName: string) => {
  // @ts-ignore
  const [theme, shade] = colorName.split('-');
  // @ts-ignore
  return tailwindConfig.theme.extend.colors[theme]?.[shade] || '#000000';
};

export default function SharedParkHeader({
  park,
  leftIconName,
  onLeftIconPress,
  onSharePress,
  safeAreaTopInset = 0,
  containerClassName = ''
}: SharedParkHeaderProps) {
  const { effectiveTheme } = useTheme();

  if (!park) {
    // Minimal fallback if park data is somehow not available yet
    // Or, the parent component should ensure park is loaded before rendering this header
    return (
      <View 
        className={`h-24 bg-gray-200 dark:bg-charcoal-800 flex-row items-end px-4 pb-3 ${containerClassName}`}
        style={{ paddingTop: safeAreaTopInset }}
      >
        <AnimatedPressable onPress={onLeftIconPress} className="p-2 -ml-2">
          <Ionicons 
            name={leftIconName} 
            size={28} 
            color={getColor(effectiveTheme === 'dark' ? 'charcoal-300' : 'charcoal-700')} 
          />
        </AnimatedPressable>
      </View>
    );
  }

  let imageSource;
  if (park.downloaded_image_path && parkImageAssets[park.downloaded_image_path]) {
    imageSource = parkImageAssets[park.downloaded_image_path];
  } else if (park.downloaded_image_path) {
    console.warn(`SharedHeader: Image path "${park.downloaded_image_path}" not in assets. URI fallback.`);
    imageSource = { uri: park.downloaded_image_path };
  } else {
    imageSource = null;
  }

  const headerHeightStyle = leftIconName === 'arrow-back' ? 'h-56' : 'h-48';
  const parkNameStyle = leftIconName === 'arrow-back' ? 'text-3xl' : 'text-2xl';
  const showSubtitle = leftIconName === 'arrow-back';

  // Fallback header icon colors
  const fallbackLeftIconColor = effectiveTheme === 'dark' ? getColor('persian-100') : getColor('charcoal-50');
  const fallbackShareIconColor = effectiveTheme === 'dark' ? getColor('charcoal-300') : getColor('charcoal-600');
  const fallbackFavIconSize = 24;
  const fallbackHeaderIconSize = 24;

  // Image header icon colors/sizes
  const imageHeaderIconColor = "white";
  const imageHeaderIconSize = 28;

  return (
    <View className={containerClassName}>
      {imageSource ? (
        <ImageBackground
          source={imageSource}
          className={headerHeightStyle} // Dynamic height
          resizeMode="cover"
          onError={(e) => console.log('SharedHeader Image Error:', e.nativeEvent.error, park.id)}
        >
          <View 
            className={`flex-1 justify-between p-4 bg-black/30 ${showSubtitle ? 'items-center' : ''}`}
            style={{ paddingTop: safeAreaTopInset }}
          >
            {/* Top Row: Left icon and Right action icons */}
            <View className={`w-full flex-row ${showSubtitle ? 'justify-between' : 'justify-between'} items-start pt-1`}>
              <AnimatedPressable onPress={onLeftIconPress} className="p-2 -ml-2" scaleTo={0.9}>
                <Ionicons name={leftIconName} size={imageHeaderIconSize} color={imageHeaderIconColor} />
              </AnimatedPressable>
              <View className="flex-row items-center">
                <AnimatedPressable onPress={onSharePress} className="p-2 -mr-1" scaleTo={0.9}>
                  <Ionicons name="share-outline" size={imageHeaderIconSize} color={imageHeaderIconColor} />
                </AnimatedPressable>
                <View className="p-2">
                  <FavoriteHeartIcon parkId={park.id} size={imageHeaderIconSize} />
                </View>
              </View>
            </View>
            
				{/* Park Name */}
              <Text className={`${parkNameStyle} font-bold text-white mt-2 pb-1`}>{park.name}</Text>

            {/* Spacer for subtitle layout to push name to center */}
            {showSubtitle && <View className="w-full h-10" />} 

          </View>
        </ImageBackground>
      ) : (
        // Fallback Header (No Image)
        <View 
          className={`px-4 pb-3 flex-row items-center justify-between ${headerHeightStyle} ${effectiveTheme === 'dark' ? 'bg-charcoal-800' : 'bg-persian-800'}`}
          style={{ paddingTop: safeAreaTopInset }}
        >
          <AnimatedPressable onPress={onLeftIconPress} className="p-2">
            <Ionicons name={leftIconName} size={fallbackHeaderIconSize} color={fallbackLeftIconColor} />
          </AnimatedPressable>
          
          <View className="flex-1 items-center justify-center">
            <Text className={`${parkNameStyle} font-bold ${effectiveTheme === 'dark' ? 'text-white' : 'text-white'} text-center`}>{park.name}</Text>
            {showSubtitle && (
              <Text className={`text-base ${effectiveTheme === 'dark' ? 'text-charcoal-300' : 'text-persian-200'} mt-1`}>State Park</Text>
            )}
          </View>
          
          <View className="flex-row items-center">
            <AnimatedPressable onPress={onSharePress} className="p-2" scaleTo={0.9}>
              <Ionicons name="share-outline" size={fallbackFavIconSize} color={fallbackShareIconColor} />
            </AnimatedPressable>
            <View className="p-2 ml-1">
              <FavoriteHeartIcon parkId={park.id} size={fallbackFavIconSize} />
            </View>
          </View>
        </View>
      )}
    </View>
  );
} 