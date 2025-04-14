// hooks/useImagePicker.ts
import * as FileSystem from 'expo-file-system';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

export const UseImagePicker = () => {
  const [image, setImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const imgDir = FileSystem.documentDirectory + 'images/';

  const ensureDirExists = async () => {
    const dirInfo = await FileSystem.getInfoAsync(imgDir);
    if (!dirInfo.exists) {
      await FileSystem.makeDirectoryAsync(imgDir, { intermediates: true });
    }
  };

  const options: ImagePicker.ImagePickerOptions = {
    mediaTypes: ImagePicker.MediaTypeOptions.Images, // Deprecated-safe
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  };

  const selectImage = async () => {
    setIsLoading(true);
    const result = await ImagePicker.launchImageLibraryAsync(options);
    if (!result.canceled) {
      const savedUri = await saveImage(result.assets[0].uri);
      setImage(savedUri);
    }
    setIsLoading(false);
  };

  const saveImage = async (uri: string): Promise<string> => {
    await ensureDirExists();
    const fileName = new Date().getTime() + '.jpg';
    const destination = imgDir + fileName;
    await FileSystem.copyAsync({ from: uri, to: destination });
    return destination;
  };

  return { image, setImage, selectImage, isLoading };
};
