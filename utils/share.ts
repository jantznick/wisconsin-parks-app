import { Alert, Share } from 'react-native';

interface ShareContentOptions {
  message: string;
  title: string;
  url?: string;
}

export const shareContent = async (options: ShareContentOptions) => {
  try {
    await Share.share(
      {
        message: options.message,
        title: options.title,
        url: options.url,
      },
      {
        dialogTitle: options.title,
        subject: options.title,
      }
    );
  } catch (error: any) {
    Alert.alert('Error', error.message || 'Failed to share content.');
  }
}; 