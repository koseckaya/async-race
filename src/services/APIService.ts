import { CarItem, WinnerItem } from "../types";


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

export const createCar = (params: CarItem) => {
    return fetch(ENDPOINTS.GARAGE, {
        method: 'POST',
        body: JSON.stringify(params),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((data) => data.json())
}

export const deleteCar = (id: number) => {
    return fetch(ENDPOINTS.GARAGE + '/' + id, {
        method: 'DELETE',
    })
}

export const updateCar = (id: number, params: CarItem) => {
    return fetch(ENDPOINTS.GARAGE + '/' + id, {
        method: 'PUT',
        body: JSON.stringify(params),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((data) => data.json())
}


export const startEngine = (id: number) => {
    const startBtns = Array.from(document.querySelectorAll<HTMLButtonElement>('.btn-start') )
    startBtns.forEach(i => i.disabled = true)


    return fetch(ENDPOINTS.ENGINE + '?id=' + id + '&status=started', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((data) => data.json())
}

export const driveEngine = (id: number) => {
    return fetch(ENDPOINTS.ENGINE + '?id=' + id + '&status=drive', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((data) => data.json())
}

export const stopEngine = (id: number) => {
    return fetch(ENDPOINTS.ENGINE + '?id=' + id + '&status=stopped', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((data) => data.json())
}



export const getWinnersList = (): Promise<WinnerItem[]> => {
    return fetch(ENDPOINTS.WINNERS, {
        method: 'GET',
    }).then((data) => data.json())
}

export const getWinner = (id: number): Promise<WinnerItem> => {
    return fetch(ENDPOINTS.WINNERS + '/' + id, {
        method: 'GET',
    }).then((data) => data.json())
}

export const createWinner = (params: WinnerItem) => {
    return fetch(ENDPOINTS.WINNERS, {
        method: 'POST',
        body: JSON.stringify(params),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((data) => data.json())
}

export const updateWinner = (params: WinnerItem) => {
    return fetch(ENDPOINTS.WINNERS + '/' + params.id, {
        method: 'PUT',
        body: JSON.stringify(params),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((data) => data.json())
}

export const deleteWinner= (id: number) => {
    return fetch(ENDPOINTS.WINNERS + '/' + id, {
        method: 'DELETE',
    })
}