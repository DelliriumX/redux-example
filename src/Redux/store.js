import { createStore } from 'redux'


const reducer = (state, action) => {

    if (action.type === 'CHANGE_VALUE') {
        return {
            value: action.payload
        }
    }

    return {
        value: 'dinosaurus'
    }
}

export const store = createStore(reducer)
