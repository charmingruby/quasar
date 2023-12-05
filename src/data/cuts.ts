interface Cut {
  name: string
  value: string
  price: number
  amountOfTime: number
}

export const cuts: Cut[] = [
  {
    value: 'barba',
    name: 'Barba',
    price: 1500,
    amountOfTime: 1,
  },
  {
    value: 'raspar',
    name: 'Raspar',
    price: 1500,
    amountOfTime: 3,
  },
  {
    value: 'cortar',
    name: 'Cortar',
    price: 1500,
    amountOfTime: 1,
  },
  {
    value: 'raspar-barba',
    name: 'Raspar + Barba',
    price: 1599,
    amountOfTime: 1,
  },
  {
    value: 'corte-barba',
    name: 'Corte + Barba',
    price: 1500,
    amountOfTime: 1,
  },
]
