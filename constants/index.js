
import { Dimensions } from 'react-native';

export const WIDTH = Dimensions.get('window').width;
export const HEIGHT = Dimensions.get('window').height;


export const MEALS = {
  key: "Today",
  breakfast: [],
  lunch: [],
  snacks: [],
  dinner: [],
  before: [],
  after: []
};

export const TARGET_TYPE = [
  {
    key: "bulking",
    text: "增肌"
  },
  {
    key: "maintenance",
    text: "维持"
  },
  {
    key: "cutting",
    text: "减脂"
  }
];

export const GENDER_MAP = {
  "0": "女",
  "1": "男"
};

export const CUSTOM_MAP = {
  Sedentary: { label: "久坐", value: 1 },
  LightExercise: { label: "轻运动", value: 1.2 },
  ModerateExercise: { label: "适当运动", value: 1.3 },
  HeavyExercise: { label: "剧烈运动", value: 1.4 },
  Athlete: { label: "运动员", value: 1.5 }
};

export const MEAL_MAP = {
  breakfast: "早餐",
  lunch: "午餐",
  dinner: "晚餐",
  snacks: "其他",
  water: "喝水"
};

export const GRADE_MAP = {
  A: "推荐食用",
  B: "推荐食用",
  C: "不推荐"
};

export const GRADE_COLOR_MAP = {
  A: "#b5c4b1",
  B: "#bfbfbf",
  C: "#656565"
};
// grade
// BMR = 370 + (21.6 x Lean Body Mass(kg) )

// Lean Body Mass = (Weight(kg) x(100 - (Body Fat))) /100

export const DAY_GRADE_MAP = {
  1: "A",
  2: "B",
  3: "C",
  4: "D",
  5: "E"
};
