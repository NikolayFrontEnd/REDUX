import { createSlice } from '@reduxjs/toolkit'
const initialSate = []

export const favoriteSlice = createSlice(
    {
        name: 'favorites',
        initialSate,
        reducers: {
            addToFavorites: (state, {payload:recipe}) => {
state.push(recipe)
            }
        }
    }
)