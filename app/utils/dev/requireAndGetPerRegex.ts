/**
 * Copyright (c) 2022, Henrik Geißler
 */
export const requireAndGetPerRegex = (dir: string, pattern: RegExp) =>
  (r => r.keys().map(r))(require.context(dir, true, pattern))
