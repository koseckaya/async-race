// @ts-nocheck

import { CarRequest } from "../types";

export const renderCar = car => {
    return `
        <li class="garage__item" data-id="${car.id}">
            <div class="car__btns">
                <button class="btn btn-car btn-remove" >Remove</button>
                <button class="btn btn-car btn-update" >Update</button>
                <span class="car__name" style='color: ${car.color}'>${car.id}:  ${car.name}</span>
            </div>

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

export const renderCarSvg = (color = '#000') => {
    return `
    <?xml version="1.0" encoding="iso-8859-1"?>
    <svg fill="${color}" height="800px" width="800px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
        viewBox="0 0 47.032 47.032" xml:space="preserve">
    <g>
        <path d="M29.395,0H17.636c-3.117,0-5.643,3.467-5.643,6.584v34.804c0,3.116,2.526,5.644,5.643,5.644h11.759
            c3.116,0,5.644-2.527,5.644-5.644V6.584C35.037,3.467,32.511,0,29.395,0z M34.05,14.188v11.665l-2.729,0.351v-4.806L34.05,14.188z
            M32.618,10.773c-1.016,3.9-2.219,8.51-2.219,8.51H16.631l-2.222-8.51C14.41,10.773,23.293,7.755,32.618,10.773z M15.741,21.713
            v4.492l-2.73-0.349V14.502L15.741,21.713z M13.011,37.938V27.579l2.73,0.343v8.196L13.011,37.938z M14.568,40.882l2.218-3.336
            h13.771l2.219,3.336H14.568z M31.321,35.805v-7.872l2.729-0.355v10.048L31.321,35.805z"/>
    </g>
    </svg>
    `
}