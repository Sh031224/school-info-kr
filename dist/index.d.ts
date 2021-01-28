declare const _default: {
    search: (query: string) => Promise<import("./types/School").default[]>;
    meal: (schoolId: string, officeCode: string, date: Date, excludeAllergy?: boolean | undefined) => Promise<import("./types/Meal").default>;
    schedule: (schoolId: string, officeCode: string, date: Date) => Promise<string[]>;
};
export default _default;
