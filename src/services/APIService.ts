import { CarItem, EngineStartResponse, WinnerItem } from "../types";

const BACKEND_URL = 'http://localhost:3000/';
const ENDPOINTS = {
    'ENGINE': BACKEND_URL + 'engine',
    'GARAGE': BACKEND_URL + 'garage',
    'WINNERS': BACKEND_URL + 'winners'
}

export function getCarsList(): Promise<CarItem[]> {
    return fetch(ENDPOINTS.GARAGE, {
        method: 'GET',
    })
        .then(res => res.json())
        .then(data => data as CarItem[])
}

export const createCar = (params: Partial<CarItem>) => {
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


export const startEngine = (id: number): Promise<EngineStartResponse> => {
    return fetch(ENDPOINTS.ENGINE + '?id=' + id + '&status=started', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
      .then(data => data as EngineStartResponse)
}

export const driveEngine = (id: number, signal: AbortSignal | null = null) => {
    return fetch(ENDPOINTS.ENGINE + '?id=' + id + '&status=drive', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        signal
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

export const deleteWinner = (id: number) => {
    return fetch(ENDPOINTS.WINNERS + '/' + id, {
        method: 'DELETE',
    })
}

