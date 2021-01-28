import axios from "axios";
import Meal from "./types/Meal";
import { key } from "./config/config.json";
import * as moment from "moment";

const meal = async (schoolId: string, officeCode: string, date: Date, excludeAllergy?: boolean): Promise<Meal> => {
  const mealList: Meal = {
    morning: null,
    lunch: null,
    dinner: null
  };

  const mealsApi = await axios.get("http://open.neis.go.kr/hub/mealServiceDietInfo", {
    params: {
      KEY: key,
      Type: "json",
      SD_SCHUL_CODE: schoolId,
      ATPT_OFCDC_SC_CODE: officeCode,
      MLSV_YMD: moment(date).format("yyyyMMDD")
    }
  });

  if (mealsApi.data.RESULT && mealsApi.data.RESULT !== "INFO-000") {
    return mealList;
  }

  const mealData = mealsApi.data.mealServiceDietInfo[1].row;

  for (let i = 0; i < mealData.length; i++) {
    const mealNum = parseInt(mealData[i].MMEAL_SC_CODE);
    const calories = mealData[i].CAL_INFO;
    let data = mealData[i].DDISH_NM;

    if (excludeAllergy) {
      data = data.replace(/([0-9])+\./g, "");
    }

    switch (mealNum) {
      case 1:
        mealList.morning = !data
          ? null
          : {
              data,
              calories
            };
        break;
      case 2:
        mealList.lunch = !data
          ? null
          : {
              data,
              calories
            };
        break;
      case 3:
        mealList.dinner = !data
          ? null
          : {
              data,
              calories
            };
        break;
    }
  }

  return mealData;
};

export default meal;
