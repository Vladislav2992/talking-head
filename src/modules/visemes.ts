export interface IVisemeAnimation {
  scaleX: number
  scaleY: number
  round?: string
  subClass?: string
}

export const visemes: { [key: string]: IVisemeAnimation } = {
  round: {
    scaleX: 0.9,
    scaleY: 1.5,
    round: '50%'
  },
  open: {
    scaleX: 1.3,
    scaleY: 1.8,
  },
  tube: {
    scaleX: 0.6,
    scaleY: 0.8,
    round: '50%'
  },
  wide: {
    scaleX: 1.5,
    scaleY: 0.5,
  },
  close: {
    scaleX: 0.5,
    scaleY: 0.7,
  },
  teeth: {
    scaleX: 0.8,
    scaleY: 0.4,
    subClass: 'teeth',
  },
  tongue: {
    scaleX: 1.5,
    scaleY: 1.2,
    subClass: 'tongue',
  },
  default: {
    scaleX: 1,
    scaleY: 1,
  },
}
