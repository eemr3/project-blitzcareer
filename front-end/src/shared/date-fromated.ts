export function convertDate(date: Date) {
  const newDate = new Date(date);
  const dateFormated = newDate.toLocaleDateString('pt-BR');
  const hours = newDate.getHours();
  const minutes = newDate.getMinutes();

  return `${dateFormated} ${hours}:${minutes}`;
}
