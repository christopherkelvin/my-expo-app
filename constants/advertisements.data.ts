import Image1 from '../assets/AdvertiseImages/Image1.jpg';
import Image3 from '../assets/AdvertiseImages/Image3.jpg';
import Image2 from '../assets/AdvertiseImages/Image2.jpg'; // Fixed path typo
import { advertisementType } from '../types/advertisement.types';

export const AdvertisementData: advertisementType[] = [
  {
    id: 1,
    image: Image1,
    question: 'Je, unaishi mbali na Afisa Kilimo?',
    solution: 'Jaribu mshauri huyu',
  },
  {
    id: 2,
    image: Image2,
    question: 'Je, mazao yako ya nyanya yanakufa?',
    solution: 'Jaribu mshauri huyu',
  },
  {
    id: 3,
    image: Image3,
    question: 'Unahitaji msaada wa kupulizia dawa za kuua wadudu?',
    solution: 'Jaribu roboti yetu',
  },
];
