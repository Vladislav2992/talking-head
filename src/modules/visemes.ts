export interface IVisemeAnimation {
  scaleX: number
  scaleY: number
  subClass?: string
}

export const visemes: { [key: string]: IVisemeAnimation } = {
  round: {
    scaleX: 0.9,
    scaleY: 20,
  },
  open: {
    scaleX: 1.3,
    scaleY: 25,
  },
  tube: {
    scaleX: 0.6,
    scaleY: 11,
  },
  wide: {
    scaleX: 2,
    scaleY: 2.7,
  },
  close: {
    scaleX: 0.5,
    scaleY: 0.5,
  },
  teeth: {
    scaleX: 0.5,
    scaleY: 3.5,
    subClass: 'teeth',
  },
  tongue: {
    scaleX: 1.5,
    scaleY: 6,
    subClass: 'tongue',
  },
  default: {
    scaleX: 1,
    scaleY: 1,
  },
}
