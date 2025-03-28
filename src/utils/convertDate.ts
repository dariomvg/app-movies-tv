export const convertDate = (date: string | undefined = ""): string => {
  const year = date?.split("-")[0];
  return year;
};
