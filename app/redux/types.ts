/**
 * Copyright (c) 2022, Henrik Geißler
 */
export type Thunk = () => (dispatch: any, getState: any) => Promise<any>
