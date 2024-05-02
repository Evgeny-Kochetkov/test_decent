import { createSlice } from '@reduxjs/toolkit'

type InitialStateType = {
    menuState: boolean;
}

const initialState: InitialStateType = {
    menuState: false
}

const menuReduser = createSlice({
    name: 'menu',
    initialState: initialState,
    reducers: {
        toggleMenu: (state) => {
            state.menuState = !state.menuState
        }
    }
})

export const { toggleMenu } = menuReduser.actions
export default menuReduser.reducer