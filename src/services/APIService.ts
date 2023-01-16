// @ts-nocheck

const BACKEND_URL = 'http://localhost:3000/';
const ENDPOINTS = {
    'ENGINE': BACKEND_URL + 'engine',
    'GARAGE': BACKEND_URL + 'garage',
    'WINNERS': BACKEND_URL + 'winners'
}

export const getCarsList = () => {
    return fetch(ENDPOINTS.GARAGE, {
        method: 'GET',
    })
}

export const createCar = (params) => {
    return fetch(ENDPOINTS.GARAGE, {
        method: 'POST',
        body: JSON.stringify(params),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((data) => data.json())
}

export const deleteCar = (id) => {
    return fetch(ENDPOINTS.GARAGE +'/'+ id, {
        method: 'DELETE',
    })
}

export const updateCar = (id, params) => {
    return fetch(ENDPOINTS.GARAGE + '/' + id, {
        method: 'PUT',
        body: JSON.stringify(params),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((data) => data.json())
}



export const getWinnersList = () => {
    return fetch(ENDPOINTS.WINNERS, {
        method: 'GET',
    }).then((data) => data.json())
}