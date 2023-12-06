interface Data {
  id: string
  date: Date
  time: string
  endAt: string
  status: string
  name: string
  price: number
  age_category: string
  timeInAQuarterOfAnHourQuantity: number
  observation: string | null
  free: boolean | null
  barberAccountId: string
  customerAccountId: string
  promoCodeId: string | null
  createdAt: Date
  updatedAt: Date
}

export interface ChartData {
  name: string
  total: number
}

export function assignChartData(data: Data[]) {
  const chartData: ChartData[] = [
    {
      name: 'Jan',
      total: 0,
    },
    {
      name: 'Fev',
      total: 0,
    },
    {
      name: 'Mar',
      total: 0,
    },
    {
      name: 'Abr',
      total: 0,
    },
    {
      name: 'Maio',
      total: 0,
    },
    {
      name: 'Jun',
      total: 0,
    },
    {
      name: 'Jul',
      total: 0,
    },
    {
      name: 'Ago',
      total: 0,
    },
    {
      name: 'Set',
      total: 0,
    },
    {
      name: 'Out',
      total: 0,
    },
    {
      name: 'Nov',
      total: 0,
    },
    {
      name: 'Dez',
      total: 0,
    },
  ]

  data.forEach(({ date }) => {
    const month = date.getMonth()

    switch (month) {
      case 0:
        chartData[0].total++
        break
      case 1:
        chartData[0].total++
        break
      case 2:
        chartData[2].total++
        break
      case 3:
        chartData[3].total++
        break
      case 4:
        chartData[4].total++
        break
      case 5:
        chartData[5].total++
        break
      case 6:
        chartData[6].total++
        break
      case 7:
        chartData[7].total++
        break
      case 8:
        chartData[8].total++
        break
      case 9:
        chartData[9].total++
        break
      case 10:
        chartData[10].total++
        break
      case 11:
        chartData[11].total++
        break
    }
  })

  return chartData
}
