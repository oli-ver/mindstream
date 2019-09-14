export function dateToString(date: Date): string {
    // Compatible with jsTodoTxt
    const year = date.getFullYear();
    const month = ((date.getMonth() + 1 < 10) ? '0' : '') + (date.getMonth() + 1);
    const day = ((date.getDate() < 10) ? '0' : '') + date.getDate();
    return `${year}-${month}-${day}`;
}

export function stringToDate(dateStr: string): Date {
    // Compatible with jsTodoTxt
    const datePieces = dateStr.split('-');
    return new Date(
        parseInt(datePieces[0]),
        parseInt(datePieces[1]) - 1,
        parseInt(datePieces[2]),
    );
}

function compare(v1: any, v2: any): number {
    // Default cmp function from the thenBy module
    return v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
}

export function compareEmptyGreater(v1: any, v2: any): number {
    // This cmp function assumes that empty value is greater then non-empty
    if (v1 && v2) {
        return compare(v1, v2);
    } else {
        return v2 ? 1 : v1 ? -1 : 0;
    }
}
