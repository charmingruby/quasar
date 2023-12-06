interface Cut {
  name: string
  value: string
  price: number
  amountOfTime: number
}

export const cuts: Cut[] = [
  {
    value: 'Barba',
    name: 'Barba',
    price: 2000,
    amountOfTime: 1,
  },
  {
    value: 'Raspar',
    name: 'Raspar',
    price: 1500,
    amountOfTime: 1,
  },
  {
    value: 'Cortar',
    name: 'Cortar',
    price: 3000,
    amountOfTime: 3,
  },
  {
    value: 'Raspar-Barba',
    name: 'Raspar + Barba',
    price: 3500,
    amountOfTime: 2,
  },
  {
    value: 'Corte-Barba',
    name: 'Corte + Barba',
    price: 5000,
    amountOfTime: 4,
  },
]
