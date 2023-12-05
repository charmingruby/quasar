interface WorkTimeHour {
  value: string
  available: boolean
}

interface WorkTimeMinute {
  value: string
}

export const workTimeHours: WorkTimeHour[] = [
  {
    available: true,
    value: '8',
  },
  {
    available: true,
    value: '9',
  },
  {
    available: true,
    value: '10',
  },
  {
    available: true,
    value: '11',
  },
  {
    available: false,
    value: '12',
  },
  {
    available: false,
    value: '13',
  },
  {
    available: true,
    value: '14',
  },
  {
    available: true,
    value: '15',
  },
  {
    available: true,
    value: '16',
  },
  {
    available: true,
    value: '17',
  },
]

export const workTimeMinutes: WorkTimeMinute[] = [
  {
    value: '00',
  },
  {
    value: '15',
  },
  {
    value: '30',
  },
  {
    value: '45',
  },
]
