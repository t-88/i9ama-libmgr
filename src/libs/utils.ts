type DateSelOption = "manual" | "week" | "2week" | "month";


function getDate(offset?: any) {
    offset = offset ?? 0;
    const today = new Date();
    const offseted = new Date();
    offseted.setDate(today.getDate() + offset);

    return offseted.toISOString().slice(0, 19).replace('T', ' ').replaceAll("-","/");
}

export {
    getDate
};
export type {
    DateSelOption
}