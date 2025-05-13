import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface IsModalState {
  modalFavorite: boolean,
  modalBasket: boolean,
  modalProfile: boolean,
  modalNotification: boolean
}

type PaloadAction = 'modalFavorite' | 'modalBasket' | 'modalProfile' | 'modalNotification'

const initialState:IsModalState = {
    modalFavorite: false,
    modalBasket: false,
    modalProfile: false,
    modalNotification: false
}

 const ModalSlice = createSlice({
    name:'Modal',
    initialState,
    reducers: {
        changeModal(state,action:PayloadAction<PaloadAction>) {
            
            (Object.keys(state) as (keyof IsModalState)[]).forEach(item =>{
                if(state[action.payload]){
                    return
                }
                state[item] = false
            })
            state[action.payload] = !state[action.payload]
        },
        closeModal(state) {
            (Object.keys(state) as (keyof IsModalState)[]).forEach(item =>{
                state[item] = false
        })
    }

}})

export const {changeModal,closeModal} = ModalSlice.actions
export const modalReducer  = ModalSlice.reducer