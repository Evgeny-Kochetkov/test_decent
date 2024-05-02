import { configureStore } from '@reduxjs/toolkit'

import { TypedUseSelectorHook, useSelector } from 'react-redux'

import menuReduser from './features/menuReduser'
import customTooltipReducer from '@/redux/features/customTooltipSlise'

export const store = configureStore({
    reducer: {
        menuReduser,
        customTooltipReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector