import Meal from "./types/Meal";
declare const meal: (schoolId: string, officeCode: string, date: Date, excludeAllergy?: boolean | undefined) => Promise<Meal>;
export default meal;
