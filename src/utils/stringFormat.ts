const maxLength = 25

export const truncateString = (str: string): string => {
    return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
};
