export const capitalizeFirstLetter = (str: string) => {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const trimString = (str: string, maxLength: number = 10): string => {
  return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
};
