export const formatDate = (dataString: string | Date): string => {
  let date;

  if (typeof dataString === "string") {
    const [year, month, day] = dataString.split("-");

    date = new Date(Date.UTC(Number(year), Number(month) - 1, Number(day)));
  } else {
    date = dataString;
  }

  const day = String(date.getUTCDate()).padStart(2, "0");
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const year = date.getUTCFullYear();

  return `${day}/${month}/${year}`;
};

