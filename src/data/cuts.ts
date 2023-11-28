interface Cut {
  name: string
  value: string
  price: number
}

export const cuts: Cut[] = [
  {
    value: 'barba',
    name: 'Barba',
    price: 1500,
  },
  {
    value: 'raspar',
    name: 'Raspar',
    price: 1500,
  },
  {
    value: 'cortar',
    name: 'Cortar',
    price: 1500,
  },
  {
    value: 'raspar-barba',
    name: 'Raspar + Barba',
    price: 1599,
  },
  {
    value: 'corte-barba',
    name: 'Corte + Barba',
    price: 1500,
  },
]
