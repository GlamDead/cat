export interface ICard {
  brand: string
  description: string
  tagline: string
  taste: string
  countPortions: number
  countMouse: number
  additionally?: string
  weight: string
  availability: boolean
  active: boolean
  id: string
}

export interface ICardActive {
  card: ICard
  setActive(id: string): void
}

export interface IPropsCSSCard {
  active?: boolean
  availability: boolean
  hover?: boolean
}
