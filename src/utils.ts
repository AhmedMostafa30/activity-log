import { data } from "./data";

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

export const headers = [
  "actor_name",
  "actor_id",
  "target_name",
  "location",
  "occurred_at",
  "description",
];
export const mappedData = data.map((item) => ({
  actor_name: item.actor_name,
  actor_id: item.actor_id,
  target_name: item.target_name,
  location: item.location,
  occurred_at: item.occurred_at,
  description: item.metadata.description,
}));

export const exportToCsv = (
  filename: string,
  headers: string[],
  rows: any[]
) => {
  const csvRows = [
    headers.join(","),
    ...rows.map((row) => headers.map((header) => row[header]).join(",")),
  ];

  const csvContent = csvRows.join("\n");

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");

  link.setAttribute("href", url);
  link.setAttribute("download", filename);
  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);
};
