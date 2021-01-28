interface Meal {
  morning: null | {
    data: string;
    calories: string;
  };
  lunch: null | {
    data: string;
    calories: string;
  };
  dinner: null | {
    data: string;
    calories: string;
  };
}

export default Meal;
