export function TimeElementDate(date) {
  const $time = document.createElement("time");
  const dateText = moment(date).format("MMMM Do, YYYY");
  const dateISO = date.toISOString().split("T")[0];
  $time.setAttribute("datetime", dateISO);
  $time.innerText = dateText;
  return $time;
}