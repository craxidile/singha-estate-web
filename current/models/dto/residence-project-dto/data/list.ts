import type ResidenceProject from "~/models/types/residence-project";

import imgBanner01 from '~/assets/images/page-front/discover-01.png';
import imgBanner02 from '~/assets/images/page-front/discover-02.png';
import imgBanner03 from '~/assets/images/page-front/discover-03.png';
import imgBanner04 from '~/assets/images/page-front/discover-04.png';

const residenceProjects: ResidenceProject[] = [
  {
    id: 1,
    banner: imgBanner01,
    title: 'S’RIN',
    location: 'RATCHAPHRUEK-SAI1',
    slogan: 'INFINITE LIVING',
    mainColor: '#003B5E',
    subColor: '#004670',
  },
  {
    id: 2,
    banner: imgBanner02,
    title: 'SMYTH\'S',
    location: 'RAMINTRA',
    slogan: 'TELL YOUR TALE',
    mainColor: '#875B51',
    subColor: '#936358',
  },
  {
    id: 3,
    banner: imgBanner03,
    title: 'THE ESSE',
    location: 'SUKHUMVIT 36',
    slogan: 'LIVE HIGHEST, LIVE FINEST',
    mainColor: '#1A2F4D',
    subColor: '#1F385C',
  },
  {
    id: 4,
    banner: imgBanner04,
    title: 'SIRANINN Residences',
    location: 'PATTANAKARN',
    slogan: 'TRUE LEGACY LIVE NOW',
    mainColor: '#B49A81',
    subColor: '#BCA58F',
  },
];

export default residenceProjects;
