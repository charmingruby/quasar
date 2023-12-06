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
    price: 1500,
    amountOfTime: 1,
  },
  {
    value: 'Raspar',
    name: 'Raspar',
    price: 1500,
    amountOfTime: 3,
  },
  {
    value: 'Cortar',
    name: 'Cortar',
    price: 1500,
    amountOfTime: 1,
  },
  {
    value: 'Raspar-Barba',
    name: 'Raspar + Barba',
    price: 1599,
    amountOfTime: 1,
  },
  {
    value: 'Corte-Barba',
    name: 'Corte + Barba',
    price: 1500,
    amountOfTime: 1,
  },
]
