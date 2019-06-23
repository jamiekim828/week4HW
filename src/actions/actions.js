export const ADD_MODEL = 'ADD_MODEL'

export function addModel(data) {
    return {
        type: 'ADD_MODEL',
        payload: data
    }
}
