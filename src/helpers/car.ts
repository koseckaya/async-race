// @ts-nocheck

import { CarRequest } from "../types";

export const renderCar = car => {
    return `
        <li class="garage__item" data-id="${car.id}">${car.id}: <span style="color:${car.color}">${car.name}</span>
            <button class="btn btn-car btn-remove" >Remove</button>
            <button class="btn btn-car btn-update" >Update</button>
        </li>
    `;
}

export const renderWinner = car => {
    return `
        <li class="garage__item" data-id="${car.id}">
            ${car.id}: <span style="color:${car.color}">${car.name}</span>
            <span>${car.wins}</span>
            <span>Best time ${car.time}</span>
        </li>
        
    `;
}
const carBrands = [
    'Acura', 'Alfa Romeo', 'Alpine', 'Apollo', 'Apple', 'Aston Martin', 'Audi', 'Automobili Pininfarina', 'Bentley', 'BMW', 'Bollinger',
    'Brilliance', 'Bugatti', 'Buick', 'BYD', 'Cadillac', 'Chana', 'Chery', 'Chevrolet', 'Chrysler', 'Citroen', 'Continental', 'CUPRA',
    'Dacia', 'Daewoo', 'Daihatsu', 'Datsun', 'Detroit Electric', 'Dodge', 'DS Automobiles', 'FAW', 'Ferrari', 'Fiat', 'Fisker', 'Ford',
    'Foxtron', 'Geely', 'Genesis', 'GMC', 'Great Wall', 'Haval', 'Honda', 'Hummer', 'Hyundai', 'Ineos', 'Infiniti', 'Iran Khodro', 'JAC',
    'Jaguar', 'Jeep', 'JETOUR', 'KIA', 'Koenigsegg', 'Lada', 'Lamborghini', 'Lancia', 'Land Rover', 'Lexus', 'Lifan', 'Lincoln', 'Lordstown',
    'Lotus', 'Lucid', 'LvChi', 'Lynk & Co', 'Maserati', 'Maybach', 'Mazda', 'MCLaren', 'Mercedes-Benz', 'MG', 'MINI', 'Mitsubishi', 'Nikola',
    'NIO', 'Nissan', 'Opel', 'Pagani', 'Peugeot', 'Polestar', 'Porsche', 'Qoros', 'Range Rover', 'Renault', 'Rimac', 'Rivian',
    'Rolls-Royce', 'Saab', 'Saipa', 'SEAT', 'Skoda', 'smart', 'SsangYong', 'SSC North America', 'Stellantis', 'Subaru', 'Suzuki', 'Tata',
    'Tesla', 'Torsus', 'Toyota', 'VinFast', 'Volkswagen', 'Volvo', 'Xpeng', 'Zotye'
];

const carModels = [
    'Durango', 'Ram', 'Challenger', 'Charger', 'Grand Caravan', 'X7', 'X5', 'X3', 'X6 M', 'X6', 'X1', 'X4', 'Celica', 'Carrera', 'Lancer', 'CR-V', 'Corolla',
    'C4 Cactus', 'Impala', 'C1', 'C3', 'Studenta 1', 'DS4 Crossback', 'UX 250h', 'NX 300h', 'LC 500', 'RX 350/200t', 'Rapid', 'Largus',
    'Skyline', 'LS 500h', 'RX', 'ES 200/250/350', 'Hatchback', 'CX-5', 'Sedan', 'CX-30', 'CX-9', 'CX-3', 'MX-5 Roadster', 'Phantom', 'Camry', 'Polo',
    'Supra', 'Ghost', 'Dawn', 'Murcielago', 'M5', 'GTR', 'Camaro', 'M3', 'Aventador', 'Gallardo', 'Cayman', 'RAV4', 'Rio', 'Creta', 'Solaris'
];

const getRandomColor = () => { 
    const colorParts = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i += 1) {
        color += colorParts[Math.floor(Math.random() * 16)];
    }
    return color;
}

const getRandomName = (): string => {
    const carBrand = carBrands[Math.floor(Math.random() * carBrands.length)];
    const carModel = carModels[Math.floor(Math.random() * carModels.length)];
    return `${carBrand} ${carModel}`;
}
const getRandomCarData = (): CarRequest => {
    return { name: getRandomName(), color: getRandomColor() };
}
export const getRandomCarsList = (n = 10) => {
    const carsArray = []
    for (let i = 0; i < n; i++) {
        carsArray.push(getRandomCarData())
    }
    return carsArray;
}