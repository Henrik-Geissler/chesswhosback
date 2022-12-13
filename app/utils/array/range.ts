/**
 * Copyright (c) 2022, Henrik Geißler
 */
export const range = (length, offset = 0) =>
  Array.from({ length }, (_, i) => i + offset)
