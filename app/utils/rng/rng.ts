/**
 * Copyright (c) 2022, Henrik Geißler
 */
export const oneOf = <Type>(value?: Type[]): Type | undefined =>
  value?.length ? value[Math.floor(Math.random() * value.length)] : undefined
