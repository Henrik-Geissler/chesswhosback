/**
 * Copyright (c) 2022, Henrik Geißler
 */
export type TRepresentation = {
  images: TImage[]
}

export type TImage = {
  classes: string[]
  height: number
  src: string
  width: number
}
