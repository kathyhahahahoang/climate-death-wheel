import {
  poverty,
  capitalism,
  disease,
  drought,
  heatwave,
  permafrost,
  poorAirQuality,
  risingSeaLevels,
  superstorm,
  winner,
  InfoObject,
} from "./WheelInfo.tsx";

type WheelArray = InfoObject & {
  index: number;
};

export const wheelOptions: WheelArray[] = [
  {
    index: 1,
    ...poverty,
  },
  {
    index: 2,
    ...poverty,
  },
  {
    index: 3,
    ...poverty,
  },
  {
    index: 4,
    ...capitalism,
  },
  {
    index: 5,
    ...capitalism,
  },
  {
    index: 6,
    ...capitalism,
  },
  {
    index: 7,
    ...drought,
  },
  {
    index: 8,
    ...drought,
  },
  {
    index: 9,
    ...drought,
  },
  {
    index: 10,
    ...capitalism,
  },
  {
    index: 11,
    ...capitalism,
  },
  {
    index: 12,
    ...capitalism,
  },
  {
    index: 13,
    ...poorAirQuality,
  },
  {
    index: 14,
    ...poorAirQuality,
  },
  {
    index: 15,
    ...capitalism,
  },
  {
    index: 16,
    ...capitalism,
  },
  {
    index: 17,
    ...capitalism,
  },
  {
    index: 18,
    ...permafrost,
  },
  {
    index: 19,
    ...permafrost,
  },
  {
    index: 20,
    ...permafrost,
  },
  {
    index: 21,
    ...capitalism,
  },
  {
    index: 22,
    ...capitalism,
  },
  {
    index: 23,
    ...capitalism,
  },
  {
    index: 24,
    ...heatwave,
  },
  {
    index: 25,
    ...heatwave,
  },
  {
    index: 26,
    ...heatwave,
  },
  {
    index: 27,
    ...heatwave,
  },
  {
    index: 28,
    ...capitalism,
  },
  {
    index: 29,
    ...capitalism,
  },
  {
    index: 30,
    ...capitalism,
  },
  {
    index: 31,
    ...disease,
  },
  {
    index: 32,
    ...disease,
  },
  {
    index: 33,
    ...disease,
  },
  {
    index: 34,
    ...capitalism,
  },
  {
    index: 35,
    ...capitalism,
  },
  {
    index: 36,
    ...capitalism,
  },
  {
    index: 37,
    ...superstorm,
  },
  {
    index: 38,
    ...superstorm,
  },
  {
    index: 39,
    ...superstorm,
  },
  {
    index: 40,
    ...capitalism,
  },
  {
    index: 41,
    ...winner,
  },
  {
    index: 42,
    ...capitalism,
  },
  {
    index: 43,
    ...risingSeaLevels,
  },
  {
    index: 44,
    ...risingSeaLevels,
  },
  {
    index: 45,
    ...risingSeaLevels,
  },
  {
    index: 46,
    ...capitalism,
  },
  {
    index: 47,
    ...capitalism,
  },
  {
    index: 48,
    ...capitalism,
  },
];
