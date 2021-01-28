import axios from "axios";
import { key } from "./config/config.json";
import School from "./types/School";

const search = async (query: string): Promise<School[]> => {
  if (!query) {
    return [];
  }

  const schoolApi = await axios.get("http://open.neis.go.kr/hub/schoolInfo", {
    params: {
      KEY: key,
      Type: "json",
      SCHUL_NM: query,
      pSize: 1000
    }
  });

  if (schoolApi.data.RESULT && schoolApi.data.RESULT.CODE !== "INFO-000") {
    return [];
  }

  const schoolList: School[] = [];

  const data = schoolApi.data.schoolInfo;
  const totalCount = data[0].head[0].list_total_count;

  for (let i = 0; i < totalCount; i++) {
    if (data[1].row[i]) {
      schoolList.push({
        schoolName: data[1].row[i].SCHUL_NM, //학교 이름
        schoolLocation: data[1].row[i].ORG_RDNMA, //도로명 주소
        officeCode: data[1].row[i].ATPT_OFCDC_SC_CODE, //시도 교육청 코드
        schoolId: data[1].row[i].SD_SCHUL_CODE //표준 학교 코드
      });
    }
  }

  return schoolList;
};

export default search;
