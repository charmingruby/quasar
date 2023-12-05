export function useDateRules() {
  const currentDate = new Date()
  const yesterdayDate = new Date(currentDate.setDate(currentDate.getDate() - 1))
  const oneMonthInTheFuture = new Date(
    currentDate.setMonth(currentDate.getMonth() + 1),
  )
  const oneMonthInTheFutureDate = new Date(
    oneMonthInTheFuture.setDate(currentDate.getDate() + 1),
  )

  return { yesterdayDate, oneMonthInTheFutureDate }
}
