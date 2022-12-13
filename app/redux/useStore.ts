/**
 * Copyright (c) 2022, Henrik Geißler
 */
import {
  TypedUseSelectorHook,
  useSelector as useReduxSelector,
} from 'react-redux'

import { RootState } from './store'

export const useStore: TypedUseSelectorHook<RootState> = useReduxSelector
