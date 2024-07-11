export const colorIndex = () => {
  return Math.floor(Math.random() * 3);
};

export const formatDateString = (dateString: string): string => {
  const date = new Date(dateString);

  const month = date.getUTCMonth();
  const dayOfMonth = date.getUTCDate();
  let hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();

  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;

  const formattedString = `${getMonthAbbreviation(
    month
  )} ${dayOfMonth}, ${hours}:${minutes.toString().padStart(2, "0")} ${ampm}`;

  return formattedString;
};

function getMonthAbbreviation(month: number): string {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return months[month];
}
