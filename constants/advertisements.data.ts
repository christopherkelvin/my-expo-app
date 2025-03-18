import Image1 from '../assets/AdvertiseImages/Image1.jpg';
import Image3 from '../assets/AdvertiseImages/Image3.jpg';
import Image2 from '../assetsAdvertiseImages/Image2.jpg';
import { advertisementType } from '../types/advertisement.types';
export const AdvertisementData: advertisementType[] = [
  {
    id: 1,
    image: Image1,
    question: 'Are you living away from an Agricultural Officer ?',
    solution: 'Try out this advisor',
  },
  {
    id: 2,
    image: Image1,
    question: 'Are your tomato crops dying ?',
    solution: 'Try out this advisor',
  },
  {
    id: 3,
    image: Image3,
    question: 'Do you need help in applying pesticides ?',
    solution: 'Try out our robot',
  },
];
