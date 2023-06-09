import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    enclouresCase: [
        {
            id: 1,title: "Главный корпус",active: false,blure: true,color: "#FFB841"
        },
        {
            id: 2,title: "Лабораторный корпус",active: false,blure: true,color: "#D7FF83"
        },
        {
            id: 3,title: "Учебно-лабораторный корпус",active: false,blure: true,color: "#FFFCA9"
        },
        {
            id: 4,title: "Конгресс-центр",active: false,blure: true,color: "#FFB4E1"
        },
        {
            id: 5,title: "ДИСиТ",active: false,blure: true,color: "#F19E9E"
        },
        {
            id: 6,title: "Музей ",active: false,blure: true,color: "#B0434A"
        },
        {
            id: 7,title: "Библиотека",active: false,blure: true,color: "#8CA5FF"
        }
    ]
}
const enclouresSlice = createSlice({
    name: 'enclouresCase',
    initialState,
    reducers: {
        selectBilding: (state, action) => {
            state.enclouresCase.forEach(item => {
                item.blure = false
                if (item.id === action.payload) {
                    item.active = !item.active
                    if (item.active === false) {
                        item.blure = true
                    }
                }
                return item
            })
        },
        blureTrue: (state, action) => {
            state.enclouresCase.forEach(item => {
                item.blure = false;
                if (item.id === action.payload) {
                    item.blure = true
                }
                return item
            })
        },
        blureFalse: (state, action) => {
            state.enclouresCase.forEach(item => {
                if (item.id === action.payload) {
                    item.blure = false
                }
                return item
            })
        },
        blureAll: (state) => {
            state.enclouresCase.forEach(item => {
                item.blure = true
                return item
            })
        },
        reboot: (state) => {
            state.enclouresCase.forEach(item => {
                item.active = false
                item.blure = true
                return item
            })
        }
    }
});

const { actions, reducer } = enclouresSlice;


export const { selectBilding, blureTrue, blureFalse, blureAll, reboot } = actions;
export default reducer;