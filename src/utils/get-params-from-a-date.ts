export function getParamsFromADate(date: string) {
  const hours = date.substring(0, 2)
  const minutes = date.substring(3, 5)

  const hoursInNumber = Number(hours)
  const minutesInNumber = Number(minutes)

  return { hours: hoursInNumber, minutes: minutesInNumber }
}

// format: 04/12/2023, 13:20:00
export function clearDate(date: string) {
  const pieces = date.split(/[\/,\s:]+/)

  // Extraia as partes relevantes (horas e minutos)
  const hour = pieces[3]
  const minutes = pieces[4]

  // Construa a string de hora no formato desejado
  const formatted = `${hour}:${minutes}`

  return formatted
}
