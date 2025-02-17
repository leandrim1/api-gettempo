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

export const formatData = (dateString: string): string => {
    const date =
      typeof dateString === "string" ? new Date(dateString) : dateString;
  
    const day = String(date.getDate()).padStart(2, "0"); // Dia com 2 dígitos
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Mês com 2 dígitos (base 0)
    const year = date.getFullYear(); // Ano com 4 dígitos
  
    return `${day}/${month}/${year}`;
  };
