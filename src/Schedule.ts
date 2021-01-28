import axios from "axios";
import * as moment from "moment";
import { key } from "./config/config.json";

const schedule = async (schoolId: string, officeCode: string, date: Date): Promise<Array<string>> => {
  const scheduleApi = await axios.get("http://open.neis.go.kr/hub/SchoolSchedule", {
    params: {
      KEY: key,
      Type: "json",
      SD_SCHUL_CODE: schoolId,
      ATPT_OFCDC_SC_CODE: officeCode,
      AA_YMD: moment(date).format("yyyyMMDD")
    }
  });

  if (scheduleApi.data.RESULT && scheduleApi.data.RESULT !== "INFO-000") {
    return [];
  }

  const scheduleList: Array<string> = [];
  const scheduleData = scheduleApi.data.SchoolSchedule[1].row;

  for (let i = 0; i < scheduleData.length; i++) {
    scheduleList.push(scheduleData[i].EVENT_NM);
  }

  return scheduleList;
};

export default schedule;
