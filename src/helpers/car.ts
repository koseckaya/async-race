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
        <div class="garage__item" data-id="${car.id}">
            ${car.id}: <span style="color:${car.color}">${car.name}</span>
            <span>Wins: ${car.wins}</span>
            <span>Best time ${car.time}</span>
        </div>
        
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
<svg
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:xlink="http://www.w3.org/1999/xlink"
   version="1.1"
   width="100%"
   height="100%"
   viewBox="0 0 960 476"
   id="svg2">
  <title
     id="title3968">Red Car - Top View</title>
  <defs
     id="defs4">
    <linearGradient
       id="linearGradient3759">
      <stop
         id="stop3761"
         style="stop-color:#1a1a1a;stop-opacity:1"
         offset="0" />
      <stop
         id="stop3763"
         style="stop-color:#000000;stop-opacity:0"
         offset="1" />
    </linearGradient>
    <linearGradient
       x1="871.33002"
       y1="842.29999"
       x2="848.15997"
       y2="834.67999"
       id="linearGradient4149"
       xlink:href="#linearGradient3759"
       gradientUnits="userSpaceOnUse"
       gradientTransform="translate(8.3085,-2.6518)" />
    <linearGradient
       x1="879.90002"
       y1="537.5"
       x2="812.14001"
       y2="533.5"
       id="linearGradient4153"
       xlink:href="#linearGradient3759"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(0.89332,0,0,0.89332,80.349,365.15)" />
    <linearGradient
       x1="879.90002"
       y1="537.5"
       x2="815.82001"
       y2="531.90997"
       id="linearGradient4155"
       xlink:href="#linearGradient3759"
       gradientUnits="userSpaceOnUse"
       gradientTransform="translate(27.625,296.49)" />
    <linearGradient
       x1="871.33002"
       y1="842.29999"
       x2="848.15997"
       y2="834.67999"
       id="linearGradient4185"
       xlink:href="#linearGradient3759"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(1,0,0,-1,8.3085,1452)" />
    <linearGradient
       x1="887.90002"
       y1="528.35999"
       x2="876.14001"
       y2="528.41998"
       id="linearGradient4187"
       xlink:href="#linearGradient3759"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(1,0,0,-1,21.438,1151.5)" />
    <linearGradient
       x1="879.90002"
       y1="537.5"
       x2="815.82001"
       y2="531.90997"
       id="linearGradient4189"
       xlink:href="#linearGradient3759"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(1,0,0,-1,27.625,1152.9)" />
    <linearGradient
       x1="897.21997"
       y1="542.40002"
       x2="883.76001"
       y2="535.37"
       id="linearGradient4191"
       xlink:href="#linearGradient3759"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(1,0,0,-1,21.438,1151.5)" />
    <linearGradient
       x1="880.71002"
       y1="552.04999"
       x2="835.98999"
       y2="501.07999"
       id="linearGradient4193"
       xlink:href="#linearGradient3759"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(1,0,0,-1,21.438,1151.5)" />
    <linearGradient
       x1="887.90002"
       y1="528.35999"
       x2="805.28998"
       y2="529.60999"
       id="linearGradient4195"
       xlink:href="#linearGradient3759"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(0.89332,0,0,-0.89332,94.156,1087.8)" />
    <linearGradient
       x1="879.90002"
       y1="537.5"
       x2="812.14001"
       y2="533.5"
       id="linearGradient4197"
       xlink:href="#linearGradient3759"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(0.89332,0,0,-0.89332,80.349,1084.2)" />
    <linearGradient
       x1="229.7"
       y1="873.14001"
       x2="205.59"
       y2="867.67999"
       id="linearGradient4199"
       xlink:href="#linearGradient3759"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(0.99043,-0.13799,-0.13799,-0.99043,146.05,1483.3)" />
    <linearGradient
       x1="238.83"
       y1="873.06"
       x2="216.56"
       y2="872.65002"
       id="linearGradient4201"
       xlink:href="#linearGradient3759"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(0.99043,-0.13799,-0.13799,-0.99043,156.31,1482)" />
    <linearGradient
       x1="887.90002"
       y1="528.35999"
       x2="876.14001"
       y2="528.41998"
       id="linearGradient4203"
       xlink:href="#linearGradient3759"
       gradientUnits="userSpaceOnUse"
       gradientTransform="translate(21.438,297.91)" />
    <linearGradient
       x1="897.21997"
       y1="542.40002"
       x2="883.76001"
       y2="535.37"
       id="linearGradient4205"
       xlink:href="#linearGradient3759"
       gradientUnits="userSpaceOnUse"
       gradientTransform="translate(21.438,297.91)" />
    <linearGradient
       x1="880.71002"
       y1="552.04999"
       x2="835.98999"
       y2="501.07999"
       id="linearGradient4207"
       xlink:href="#linearGradient3759"
       gradientUnits="userSpaceOnUse"
       gradientTransform="translate(21.438,297.91)" />
    <linearGradient
       x1="887.90002"
       y1="528.35999"
       x2="805.28998"
       y2="529.60999"
       id="linearGradient4209"
       xlink:href="#linearGradient3759"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(0.89332,0,0,0.89332,94.156,361.57)" />
    <linearGradient
       x1="229.7"
       y1="873.14001"
       x2="205.59"
       y2="867.67999"
       id="linearGradient4211"
       xlink:href="#linearGradient3759"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(0.99043,0.13799,-0.13799,0.99043,146.05,-33.885)" />
    <linearGradient
       x1="238.83"
       y1="873.06"
       x2="216.56"
       y2="872.65002"
       id="linearGradient4213"
       xlink:href="#linearGradient3759"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(0.99043,0.13799,-0.13799,0.99043,156.31,-32.603)" />
  </defs>
  <g fill="${color}"
     transform="translate(-52.937,-486.69)"
     id="layer1">
    <g fill="${color}"
       id="g3890">
      <path
         d="m 610.52,493.69 c -1.5086,0.009 -4.7211,0.30491 -6.4687,0.9375 l -3.5,1.5 8.6562,35.938 -124.81,0.28125 c -2.4363,0.005 -4.8876,-0.014 -7.3437,-0.0312 -4.912,-0.0343 -9.8649,-0.10455 -14.844,-0.21875 -7.2926,-0.16728 -14.669,-0.41288 -22.062,-0.71875 -0.39591,-0.0164 -0.79137,-0.0457 -1.1875,-0.0625 -14.932,-0.63018 -30.007,-1.4917 -45.031,-2.4375 -20.326,-1.2827 -40.52,-2.7074 -60.124,-3.875 -14.528,-0.8653 -28.732,-1.5796 -42.375,-2 -9.3692,-0.28873 -18.464,-0.45655 -27.25,-0.40625 -4.3158,0.0247 -8.5678,0.0933 -12.719,0.21875 -4.1508,0.12546 -8.3801,0.3553 -12.656,0.65625 -2.138,0.15047 -4.2778,0.31024 -6.4374,0.5 -6.4689,0.5684 -13.045,1.3214 -19.594,2.1875 -0.0101,10e-4 -0.0211,-10e-4 -0.0312,0 -4.3725,0.57858 -8.7185,1.2255 -13.062,1.9062 -4.3439,0.68073 -8.6734,1.3978 -12.937,2.1562 -4.2537,0.75662 -8.4704,1.5654 -12.594,2.375 -0.01,0.002 -0.0212,-0.002 -0.0312,0 -2.0664,0.40586 -4.0697,0.80417 -6.0937,1.2188 -6.0614,1.2416 -11.934,2.516 -17.5,3.7812 -0.0101,0.002 -0.0211,-0.002 -0.0312,0 -3.7165,0.8449 -7.2872,1.6752 -10.719,2.5 -6.8638,1.6484 -13.115,3.2346 -18.531,4.6562 -8.1236,2.1325 -14.382,3.9272 -18.094,5 -2.4736,0.71578 -3.8125,1.125 -3.8125,1.125 l -13.687,3.75 c -0.9024,0.24873 -1.7781,0.6929 -2.625,1.3125 -0.28771,0.2105 -0.56234,0.43593 -0.84374,0.6875 -1.0996,0.9796 -2.151,2.2707 -3.1562,3.8438 -0.0046,0.007 0.0046,0.0243 0,0.0312 -0.50036,0.78473 -1.0225,1.6405 -1.5,2.5625 -0.0042,0.008 0.0042,0.0232 0,0.0312 -0.47757,0.9237 -0.95114,1.9142 -1.4062,2.9688 -0.0037,0.009 0.0037,0.0222 0,0.0312 -3.667,8.5095 -6.62,21.131 -8.9374,36.219 -0.0015,0.01 0.0015,0.0212 0,0.0312 -0.03595,0.23416 -0.0581,0.48342 -0.09375,0.71875 -0.50462,3.3315 -0.99204,6.7982 -1.4375,10.344 -0.03048,0.24265 -0.06355,0.47519 -0.09375,0.71875 -0.50157,4.0432 -0.94672,8.2025 -1.375,12.469 -0.001,0.01 9.99e-4,0.0211 0,0.0312 -0.21354,2.1284 -0.42912,4.2948 -0.62499,6.4688 -9.21e-4,0.01 9.21e-4,0.0209 0,0.0312 -0.19581,2.1743 -0.38397,4.3492 -0.56249,6.5625 -8.26e-4,0.01 8.25e-4,0.0209 0,0.0312 -0.35775,4.4376 -0.67817,8.9458 -0.96874,13.5 -6.56e-4,0.0101 6.55e-4,0.0209 0,0.0312 -0.8726,13.684 -1.4596,27.789 -1.7812,41.562 -2.45e-4,0.0104 2.44e-4,0.0207 0,0.0312 -0.21443,9.1894 -0.3126,18.213 -0.3126,26.907 0,0.96763 0.02755,1.9629 0.03125,2.9375 -0.0037,0.97462 -0.03125,1.9699 -0.03125,2.9375 0,8.6932 0.09816,17.717 0.3125,26.906 2.44e-4,0.0105 -2.45e-4,0.0208 0,0.0312 0.32165,13.774 0.90864,27.878 1.7812,41.562 6.55e-4,0.0103 -6.56e-4,0.0211 0,0.0312 0.29057,4.5542 0.61099,9.0624 0.96874,13.5 8.25e-4,0.0103 -8.26e-4,0.0211 0,0.0312 0.17852,2.2133 0.36668,4.3882 0.56249,6.5625 9.21e-4,0.0103 -9.21e-4,0.0211 0,0.0312 0.19588,2.174 0.41145,4.3404 0.62499,6.4688 9.99e-4,0.0102 -0.001,0.0211 0,0.0312 0.42826,4.2663 0.87342,8.4256 1.375,12.469 0.0302,0.24356 0.06327,0.4761 0.09375,0.71875 0.44545,3.5456 0.93287,7.0123 1.4375,10.344 0.03565,0.23533 0.0578,0.48459 0.09375,0.71875 0.0015,0.01 -0.0015,0.0215 0,0.0312 2.3174,15.087 5.2704,27.709 8.9374,36.219 0.0037,0.009 -0.0037,0.0226 0,0.0312 0.45509,1.0546 0.92866,2.045 1.4062,2.9688 0.0042,0.008 -0.0042,0.0231 0,0.0312 0.47753,0.92204 0.99962,1.7778 1.5,2.5625 0.0046,0.007 -0.0046,0.0242 0,0.0312 1.0052,1.5731 2.0566,2.8642 3.1562,3.8438 0.2814,0.25157 0.55603,0.477 0.84374,0.6875 0.84686,0.6196 1.7226,1.0638 2.625,1.3125 l 13.687,3.75 c 0,0 1.3388,0.40922 3.8125,1.125 3.7111,1.0728 9.97,2.8675 18.094,5 5.4157,1.4217 11.667,3.0078 18.531,4.6562 3.4314,0.82484 7.0022,1.6551 10.719,2.5 0.0102,0.002 0.0211,-0.002 0.0312,0 5.5661,1.2652 11.438,2.5396 17.5,3.7812 2.024,0.41458 4.0273,0.81289 6.0937,1.2188 0.0101,0.002 0.0212,-0.002 0.0312,0 4.1232,0.80965 8.3399,1.6184 12.594,2.375 4.264,0.75843 8.5935,1.4755 12.937,2.1562 4.3439,0.68073 8.6898,1.3277 13.062,1.9062 0.0102,10e-4 0.0211,-10e-4 0.0312,0 6.5486,0.86611 13.125,1.6191 19.594,2.1875 2.1597,0.18976 4.2994,0.34953 6.4374,0.5 4.276,0.30095 8.5053,0.53079 12.656,0.65625 4.1508,0.12546 8.4028,0.19403 12.719,0.21875 8.7859,0.0503 17.881,-0.11752 27.25,-0.40625 13.642,-0.42043 27.847,-1.1347 42.375,-2 19.604,-1.1676 39.798,-2.5923 60.124,-3.875 15.024,-0.94578 30.098,-1.8073 45.031,-2.4375 0.39612,-0.0168 0.79158,-0.0461 1.1875,-0.0625 7.3934,-0.30587 14.77,-0.55147 22.062,-0.71875 4.9787,-0.1142 9.9316,-0.18447 14.844,-0.21875 2.456,-0.0172 4.9073,-0.0365 7.3437,-0.0312 l 124.81,0.28125 -8.6562,35.938 3.5,1.5 c 1.7476,0.63259 4.9601,0.92851 6.4687,0.9375 0.8486,0.005 1.7551,-0.0741 2.6875,-0.25 0.31069,-0.0585 0.62352,-0.14105 0.93749,-0.21875 0.30459,-0.0756 0.63258,-0.15668 0.93749,-0.25 0.62844,-0.19306 1.2635,-0.42156 1.875,-0.6875 1.8215,-0.79351 3.5342,-1.9314 4.7812,-3.3125 0.01,-0.0107 0.0217,-0.0206 0.0312,-0.0312 0.6248,-0.6979 1.1123,-1.4512 1.4687,-2.2812 l 12.156,-31.312 109.94,0.25 c 0.7469,0.3739 1.4761,0.74511 2.2187,1.0938 2.9792,1.3995 5.911,2.597 8.8436,3.625 1.4623,0.51259 2.9178,0.97549 4.375,1.4062 5.1,1.5075 10.188,2.5515 15.344,3.25 2.9462,0.39932 5.9259,0.69388 8.9374,0.90625 1.5057,0.1061 3.034,0.18011 4.5624,0.25 3.057,0.13994 6.1386,0.21283 9.3124,0.25 6.3475,0.0741 12.979,0 20,0 10.41,0 20.322,-0.53122 29.781,-1.5625 3.7835,-0.41251 7.4911,-0.89749 11.125,-1.4688 7.2676,-1.1425 14.228,-2.6189 20.906,-4.375 1.6694,-0.43903 3.3357,-0.89874 4.9687,-1.375 4.899,-1.4288 9.6128,-3.0254 14.187,-4.7812 1.5248,-0.58527 3.042,-1.1605 4.5312,-1.7812 2.9783,-1.2414 5.882,-2.557 8.7186,-3.9375 1.4183,-0.69027 2.8355,-1.4006 4.2187,-2.125 2.7664,-1.4488 5.4668,-2.98 8.0937,-4.5625 1.3135,-0.79125 2.5961,-1.6135 3.875,-2.4375 6.3943,-4.1201 12.363,-8.6255 17.906,-13.531 4.4286,-3.9195 8.6015,-8.0798 12.5,-12.469 0.005,-0.006 -0.005,-0.0254 0,-0.0312 0.97044,-1.0929 1.937,-2.1916 2.875,-3.3125 0.005,-0.006 -0.005,-0.0251 0,-0.0312 0.93773,-1.1209 1.8757,-2.2578 2.7812,-3.4062 0.005,-0.006 -0.005,-0.0249 0,-0.0312 2.7256,-3.4582 5.3132,-7.0189 7.7499,-10.719 0.005,-0.007 -0.005,-0.024 0,-0.0312 0.80882,-1.2286 1.6289,-2.4644 2.4062,-3.7188 0.005,-0.008 -0.005,-0.0238 0,-0.0312 2.3405,-3.7781 4.5668,-7.6525 6.6249,-11.656 0.004,-0.008 -0.004,-0.0231 0,-0.0312 0.68299,-1.3292 1.3477,-2.6781 2,-4.0312 0.004,-0.008 -0.004,-0.0229 0,-0.0312 0.65204,-1.3533 1.316,-2.7169 1.9375,-4.0938 0.004,-0.009 -0.004,-0.0227 0,-0.0312 1.2464,-2.7625 2.438,-5.5517 3.5625,-8.4062 0.004,-0.009 -0.004,-0.0224 0,-0.0312 0.56023,-1.4229 1.0948,-2.8674 1.625,-4.3125 0.003,-0.009 -0.003,-0.0222 0,-0.0312 0.53002,-1.4452 1.0623,-2.908 1.5625,-4.375 0.49999,-1.4671 0.99842,-2.949 1.4687,-4.4375 0.003,-0.009 -0.003,-0.022 0,-0.0312 0.47013,-1.4886 0.93435,-2.9905 1.375,-4.5 0.003,-0.01 -0.003,-0.0217 0,-0.0312 0.44045,-1.5096 0.87009,-3.0324 1.2812,-4.5625 0.003,-0.01 -0.003,-0.0217 0,-0.0312 1.2381,-4.6101 2.3684,-9.306 3.34372,-14.094 v -0.0312 c 0.3236,-1.5894 0.6112,-3.2044 0.9063,-4.8125 v -0.0312 c 2.0747,-11.318 3.4621,-23.062 4.1562,-35.219 5e-4,-0.0103 -6e-4,-0.0211 0,-0.0312 0.098,-1.7279 0.1787,-3.4757 0.25,-5.2188 4e-4,-0.0103 -4e-4,-0.0211 0,-0.0312 0.1426,-3.4969 0.2467,-7.0072 0.2812,-10.562 0,-0.0103 -10e-5,-0.0211 0,-0.0312 0.017,-1.783 0.01,-3.578 0,-5.375 0,-0.6358 -0.022,-1.2714 -0.031,-1.9062 0.01,-0.63485 0.031,-1.2704 0.031,-1.9062 0.01,-1.797 0.017,-3.592 0,-5.375 -10e-5,-0.0102 0,-0.0209 0,-0.0312 -0.034,-3.5553 -0.1386,-7.0656 -0.2812,-10.562 -4e-4,-0.0102 4e-4,-0.0209 0,-0.0312 -0.071,-1.7431 -0.152,-3.4908 -0.25,-5.2188 -6e-4,-0.0102 5e-4,-0.0209 0,-0.0312 -0.6941,-12.157 -2.0815,-23.9 -4.1562,-35.219 v -0.0312 c -0.2951,-1.6081 -0.5827,-3.2231 -0.9063,-4.8125 v -0.0312 c -0.97539,-4.7878 -2.10562,-9.4836 -3.34372,-14.094 -0.003,-0.01 0.003,-0.0213 0,-0.0312 -0.41115,-1.5301 -0.84079,-3.0529 -1.2812,-4.5625 -0.003,-0.01 0.003,-0.0213 0,-0.0312 -0.44063,-1.5095 -0.90485,-3.0114 -1.375,-4.5 -0.003,-0.009 0.003,-0.0223 0,-0.0312 -0.47032,-1.4885 -0.96875,-2.9704 -1.4687,-4.4375 -0.50017,-1.467 -1.0325,-2.9298 -1.5625,-4.375 -0.003,-0.009 0.003,-0.0223 0,-0.0312 -0.53021,-1.4451 -1.0648,-2.8896 -1.625,-4.3125 -0.004,-0.009 0.004,-0.0223 0,-0.0312 -1.1244,-2.8546 -2.3161,-5.6438 -3.5625,-8.4062 -0.004,-0.008 0.004,-0.0223 0,-0.0312 -0.62148,-1.3768 -1.2854,-2.7405 -1.9375,-4.0938 -0.004,-0.008 0.004,-0.0233 0,-0.0312 -0.65224,-1.3532 -1.317,-2.7021 -2,-4.0312 -0.004,-0.008 0.004,-0.0233 0,-0.0312 -2.0582,-4.0038 -4.2844,-7.8782 -6.6249,-11.656 -0.005,-0.007 0.005,-0.0233 0,-0.0312 -0.77733,-1.2543 -1.5974,-2.4902 -2.4062,-3.7188 -0.005,-0.007 0.005,-0.0242 0,-0.0312 -2.4367,-3.6999 -5.0243,-7.2606 -7.7499,-10.719 -0.005,-0.006 0.005,-0.0253 0,-0.0312 -0.90549,-1.1485 -1.8435,-2.2853 -2.7812,-3.4062 -0.005,-0.006 0.005,-0.0253 0,-0.0312 -0.93801,-1.1209 -1.9045,-2.2196 -2.875,-3.3125 -0.005,-0.006 0.005,-0.0253 0,-0.0312 -3.8983,-4.3889 -8.0712,-8.5493 -12.5,-12.469 -5.543,-4.9058 -11.512,-9.4112 -17.906,-13.531 -1.2789,-0.82402 -2.5615,-1.6462 -3.875,-2.4375 -2.6269,-1.5825 -5.3273,-3.1137 -8.0937,-4.5625 -1.3832,-0.72439 -2.8004,-1.4347 -4.2187,-2.125 -2.8367,-1.3806 -5.7403,-2.6961 -8.7186,-3.9375 -1.4892,-0.62071 -3.0064,-1.196 -4.5312,-1.7812 -4.5746,-1.7558 -9.2883,-3.3525 -14.187,-4.7812 -1.633,-0.47626 -3.2993,-0.93597 -4.9687,-1.375 -6.6777,-1.7561 -13.638,-3.2325 -20.906,-4.375 -3.6338,-0.57126 -7.3414,-1.0562 -11.125,-1.4688 -9.4586,-1.0326 -19.371,-1.5638 -29.781,-1.5638 -7.0204,0 -13.652,-0.0741 -20,0 -3.1738,0.0372 -6.2554,0.11006 -9.3124,0.25 -1.5285,0.0699 -3.0568,0.1439 -4.5624,0.25 -3.0115,0.21237 -5.9912,0.50693 -8.9374,0.90625 -5.1556,0.69849 -10.244,1.7425 -15.344,3.25 -1.4572,0.43076 -2.9127,0.89366 -4.375,1.4062 -2.9327,1.028 -5.8645,2.2255 -8.8436,3.625 -0.74267,0.34864 -1.4718,0.71985 -2.2187,1.0938 l -109.94,0.25 -12.156,-31.312 c -0.35644,-0.83 -0.84393,-1.5834 -1.4687,-2.2812 -0.01,-0.0105 -0.0213,-0.0206 -0.0312,-0.0312 -1.247,-1.3811 -2.9597,-2.519 -4.7812,-3.3125 -0.61146,-0.26594 -1.2465,-0.49444 -1.875,-0.6875 -0.30491,-0.0933 -0.6329,-0.1744 -0.93749,-0.25 -0.31402,-0.0777 -0.62685,-0.16025 -0.93754,-0.21875 -0.9324,-0.1759 -1.8389,-0.255 -2.6875,-0.25 z"
         id="path3855"
         style="fill-opacity:0.99607999;stroke:#191919;stroke-width:14; fill="${color}" />
      <path
         d="m 610.52,493.69 c -1.5086,0.009 -4.7211,0.30611 -6.4687,0.9375 l -3.5,1.5 8.6562,35.844 -124.81,0.28125 c -77.963,0.1654 -166.52,-11.504 -232.93,-9.5 -66.412,2.0037 -152.12,28 -152.12,28 l -13.687,3.7812 c -19.251,5.2963 -25.718,97.367 -25.718,166.78 0,1.113 0.02665,2.2531 0.03125,3.375 -0.0046,1.1219 -0.03125,2.262 -0.03125,3.375 0,69.414 6.4673,161.48 25.718,166.78 l 13.687,3.7812 c 0,0 85.711,25.996 152.12,28 66.412,2.0037 154.97,-9.6654 232.93,-9.5 l 124.81,0.28125 -8.6562,35.844 3.5,1.5 c 1.7476,0.63139 4.96,0.92854 6.4687,0.9375 0.84859,0.005 1.7551,-0.0744 2.6875,-0.25 0.3107,-0.0584 0.62352,-0.14119 0.93749,-0.21875 0.30459,-0.0754 0.63259,-0.15686 0.93749,-0.25 0.62844,-0.19269 1.2635,-0.42206 1.875,-0.6875 1.8215,-0.79201 3.5342,-1.9028 4.7812,-3.2812 0.01,-0.0107 0.0217,-0.0208 0.0312,-0.0312 0.6248,-0.69658 1.1123,-1.4528 1.4687,-2.2812 l 12.156,-31.25 109.94,0.25 c 23.9,11.942 45.511,10.719 73.593,10.719 133.25,0 187.63002,-86.586 187.00002,-201.38 0,-0.7802 -0.019,-1.5656 -0.031,-2.3438 0.012,-0.77811 0.031,-1.5636 0.031,-2.3438 0.6282,-114.79 -53.74902,-201.38 -187.00002,-201.38 -28.082,0 -49.693,-1.2236 -73.593,10.719 l -109.94,0.25 -12.156,-31.25 c -0.35645,-0.82844 -0.84393,-1.5847 -1.4687,-2.2812 -0.01,-0.0104 -0.0213,-0.0206 -0.0312,-0.0312 -1.247,-1.3785 -2.9597,-2.4892 -4.7812,-3.2812 -0.61148,-0.26544 -1.2465,-0.49481 -1.875,-0.6875 -0.3049,-0.0931 -0.6329,-0.1746 -0.93749,-0.25 -0.31397,-0.0776 -0.62679,-0.16035 -0.93749,-0.21875 -0.93239,-0.1756 -1.8389,-0.255 -2.6875,-0.25 z"
         id="path2853"
         style="fill:${color};fill-opacity:0.99607999" />
      <path
         d="m 400.34,855.24 c -33.364,0 -65.307,1.8 -94.811,5.0625 25.66,48.714 97.985,30.265 205.56,31.531 49.686,0.58471 89.543,1.8793 121.53,2.375 -47.16,-23.334 -133.53,-38.969 -232.28,-38.969 z"
         id="path3643"
         style="opacity:0.9;fill:#262626;fill-opacity:0.99607999" />
      <path
         d="m 400.34,855.24 c -3.2064,0 -6.3831,0.0295 -9.5624,0.0625 0.81825,16.171 6.4281,30.257 14.594,38.844 4.6714,-0.0756 9.4951,-0.19655 14.437,-0.34375 -8.5657,-8.1923 -14.593,-22.228 -15.719,-38.562 -1.2512,-0.005 -2.4947,0 -3.75,0 z"
         id="path3658"
         style="opacity:0.5;fill-opacity:0.99607999" />
      <path
         d="m 989.02,827.5 -5.0937,0.59375 c -21.545,2.5127 -37.688,25.979 -39.281,54.531 l -0.37499,7.125 5.2499,-4.8438 c 15.889,-14.68 28.303,-32.507 37.406,-52.75 l 2.09,-4.65 z"
         id="path3707"
         style="text-indent:0;text-transform:none;block-progression:tb;color:#000000;fill:#212121;stroke:#191919;stroke-width:5" />
      <path
         d="m 783.47,838.5 c 0,0 79.677,-22.596 105.38,-31.982 26.839,-9.8018 98.859,-39.146 98.859,-39.146 0,0 -8.7409,42.47 -30.483,57.918 -77.23,54.87 -232.69,53.85 -232.69,53.85"
         id="path3715"
         style="opacity:0.5;fill:none;stroke:#292929;stroke-width:6;stroke-linecap:round;stroke-linejoin:round" />
      <path
         d="m 869.97,817.84 -4.4374,2.3438 c 0.98912,1.1568 1.7955,2.4286 2.375,3.8438 4.7979,11.717 -10.736,29.236 -26.875,35.781 -0.51675,0.20958 -1.8129,0.84066 -3.4062,1.6562 l 13.625,-3.875 c 17.306,-8.4576 27.47,-23.082 23,-34 -0.91615,-2.2373 -2.3752,-4.1661 -4.2812,-5.75 z"
         id="path3757"
         style="fill:url(#linearGradient4149)" />
      <path
         d="m 878.55,813.38 -4.4375,2.3438 c 0.98913,1.1568 1.7955,2.4286 2.375,3.8438 4.7979,11.717 -10.736,29.236 -26.875,35.781 -0.51676,0.20958 -1.8129,0.84066 -3.4062,1.6562 l 13.625,-3.875 c 17.306,-8.4576 27.47,-23.082 23,-34 -0.91615,-2.2373 -2.3752,-4.1661 -4.2812,-5.75 z"
         id="path3787"
         style="fill:url(#linearGradient4203)" />
      <path
         d="m 884.74,811.96 -4.4374,2.3438 c 0.98913,1.1568 1.7955,2.4286 2.375,3.8438 4.7979,11.717 -10.736,29.236 -26.875,35.781 -0.51675,0.20958 -1.8129,0.84066 -3.4062,1.6562 l 13.625,-3.875 c 17.306,-8.4576 27.47,-23.082 23,-34 -0.91615,-2.2373 -2.3752,-4.1661 -4.2812,-5.75 z"
         id="path3752"
         style="fill:url(#linearGradient4155)" />
      <path
         d="m 901.65,807.69 -6.1874,1.8438 c 0.96015,1.7128 1.6545,3.5323 2.0312,5.4688 3.1194,16.034 -20.962,34.284 -43.031,38.5 -3.395,0.64864 -28.884,8.576 -32.158,8.8044 v 4.125 l 41.439,-12.148 c 26.285,-5.4963 44.949,-22.448 41.875,-38.25 -0.59564,-3.0616 -1.956,-5.8595 -3.9687,-8.3438 z"
         id="path3735"
         style="fill:url(#linearGradient4205)" />
      <path
         d="m 901.65,807.69 -6.1874,1.8438 c 0.96015,1.7128 1.6545,3.5323 2.0312,5.4688 3.1194,16.034 -20.962,34.284 -43.031,38.5 -3.395,0.64864 -28.884,8.576 -32.158,8.8044 v 4.125 l 41.439,-12.148 c 26.285,-5.4963 44.949,-22.448 41.875,-38.25 -0.59564,-3.0616 -1.956,-5.8595 -3.9687,-8.3438 z"
         id="path3783"
         style="fill:url(#linearGradient4207)" />
      <path
         d="m 857.12,822.46 -3.9641,2.0937 c 0.88361,1.0334 1.604,2.1696 2.1216,3.4337 4.2861,10.467 -9.5906,26.117 -24.008,31.964 -0.46163,0.18723 -1.6195,0.75098 -3.0428,1.4796 l 12.171,-3.4616 c 15.46,-7.5554 24.54,-20.62 20.546,-30.373 -0.81842,-1.9987 -2.1218,-3.7216 -3.8245,-5.1366 z"
         id="path3799"
         style="fill:url(#linearGradient4209)" />
      <path
         d="m 843.32,826.03 -3.9641,2.0937 c 0.88361,1.0334 1.604,2.1696 2.1216,3.4337 4.2861,10.467 -9.5906,26.117 -24.008,31.964 -0.46162,0.18723 -1.6195,0.75098 -3.0428,1.4796 l 12.171,-3.4616 c 15.46,-7.5554 24.54,-20.62 20.546,-30.373 -0.81842,-1.9987 -2.1218,-3.7216 -3.8245,-5.1366 z"
         id="path3803"
         style="fill:url(#linearGradient4153)" />
      <path
         d="m 233.27,845.72 c 8.293,-2.0234 15.486,-1.4788 19.797,5.7872 l -2.4934,17.897 c -6.8751,6.1732 -13.75,4.9509 -20.625,0.15543 l 3.3212,-23.839 z"
         id="rect3861"
         style="fill:url(#linearGradient4211)" />
      <path
         d="m 253.54,848.99 c 8.1502,-1.2102 15.167,-0.5728 18.843,5.5081 l -2.3731,17.034 c -6.4839,2.9748 -12.983,5.2096 -19.631,0.14793 l 3.1611,-22.69 z"
         id="path3864"
         style="fill:url(#linearGradient4213)" />
      <path
         d="m 400.34,852.75 c -33.454,0 -65.492,1.7894 -95.093,5.0625 l -3.6562,0.40625 1.7187,3.25 c 6.6711,12.664 16.562,21.113 29.062,26.438 12.501,5.3241 27.572,7.6126 45.093,8.4375 35.042,1.6498 79.954,-2.6312 133.59,-2 49.659,0.58438 89.508,1.8787 121.53,2.375 l 1.125,-4.75 c -47.84,-23.68 -134.34,-39.22 -233.36,-39.22 z m 0,5 c 91.169,0 171.75,13.479 220.09,33.719 -29.952,-0.58241 -65.212,-1.606 -109.31,-2.125 -53.937,-0.63473 -98.976,3.6522 -133.4,2.0312 -17.214,-0.81046 -31.767,-3.1054 -43.406,-8.0625 -10.453,-4.4521 -18.485,-11.154 -24.5,-20.906 28.307,-2.9831 58.735,-4.6562 90.53,-4.6562 z"
         id="path4025"
         style="text-indent:0;text-transform:none;block-progression:tb;opacity:0.9;color:#000000;fill:#191919" />
      <path
         d="m 260.5,607.38 -77.749,12.469 c -27.15,4.3542 -48.947,48.773 -50.999,104.84 2.0523,56.071 23.849,100.49 50.999,104.84 l 77.749,12.469 c 13.296,0 24,-10.704 24,-24 v -186.62 c 0,-13.296 -10.704,-24 -24,-24 z"
         id="rect2864"
         style="opacity:0.9;fill:#262626;fill-opacity:0.99607999;stroke:#191919;stroke-width:5" />
      <path
         d="m 691.96,573.16 c -2.9692,0 -5.8933,0.33215 -8.7812,0.96875 -0.0104,-0.01 -0.0208,-0.021 -0.0312,-0.0312 l -63.843,12.312 c -17.728,6.6047 -32,14.272 -32,32 v 212.56 c 0,17.728 14.272,25.395 32,32 l 63.843,12.312 c 0.0105,-0.0102 0.0208,-0.0211 0.0312,-0.0312 2.8879,0.6366 5.812,0.96875 8.7812,0.96875 45.395,0 82.198,-57.363 82.312,-151.53 -0.11408,-94.169 -36.916,-151.53 -82.312,-151.53 z"
         id="path3703"
         style="opacity:0.9;fill:#262626;fill-opacity:0.99607999;stroke:#191919;stroke-width:5" />
      <path
         d="m 400.34,594.15 c -33.364,0 -65.307,-1.8 -94.811,-5.0625 25.66,-48.714 97.985,-30.265 205.56,-31.531 49.686,-0.58471 89.543,-1.8793 121.53,-2.375 -47.16,23.334 -133.53,38.969 -232.28,38.969 z"
         id="path4157"
         style="opacity:0.9;fill:#262626;fill-opacity:0.99607999" />
      <path
         d="m 400.34,594.15 c -3.2064,0 -6.3831,-0.0295 -9.5624,-0.0625 0.81825,-16.171 6.4281,-30.257 14.594,-38.844 4.6714,0.0756 9.4951,0.19655 14.437,0.34375 -8.5657,8.1923 -14.593,22.228 -15.719,38.562 -1.2512,0.005 -2.4947,0 -3.75,0 z"
         id="path4159"
         style="opacity:0.5;fill-opacity:0.99607999" />
      <path
         d="m 989.02,621.89 -5.0937,-0.59375 c -21.545,-2.5127 -37.688,-25.979 -39.281,-54.531 l -0.37499,-7.125 5.2499,4.8438 c 15.889,14.68 28.303,32.507 37.406,52.75 l 2.0937,4.6562 z"
         id="path4161"
         style="text-indent:0;text-transform:none;block-progression:tb;color:#000000;fill:#212121;stroke:#191919;stroke-width:5" />
      <path
         d="m 783.47,610.89 c 0,0 79.677,22.596 105.38,31.982 26.839,9.8018 98.859,39.146 98.859,39.146 0,0 -8.7409,-42.47 -30.483,-57.918 -77.23,-54.87 -232.69,-53.86 -232.69,-53.86"
         id="path4163"
         style="opacity:0.5;fill:none;stroke:#292929;stroke-width:6;stroke-linecap:round;stroke-linejoin:round" />
      <path
         d="m 869.97,631.55 -4.4374,-2.3438 c 0.98912,-1.1568 1.7955,-2.4286 2.375,-3.8438 4.7979,-11.717 -10.736,-29.236 -26.875,-35.781 -0.51675,-0.20958 -1.8129,-0.84066 -3.4062,-1.6562 l 13.625,3.875 c 17.306,8.4576 27.47,23.082 23,34 -0.91615,2.2373 -2.3752,4.1661 -4.2812,5.75 z"
         id="path4165"
         style="fill:url(#linearGradient4185)" />
      <path
         d="m 878.55,636.01 -4.4375,-2.3438 c 0.98913,-1.1568 1.7955,-2.4286 2.375,-3.8438 4.7979,-11.717 -10.736,-29.236 -26.875,-35.781 -0.51676,-0.20958 -1.8129,-0.84066 -3.4062,-1.6562 l 13.625,3.875 c 17.306,8.4576 27.47,23.082 23,34 -0.91615,2.2373 -2.3752,4.1661 -4.2812,5.75 z"
         id="path4167"
         style="fill:url(#linearGradient4187)" />
      <path
         d="m 884.74,637.42 -4.4374,-2.3438 c 0.98913,-1.1568 1.7955,-2.4286 2.375,-3.8438 4.7979,-11.717 -10.736,-29.236 -26.875,-35.781 -0.51675,-0.20958 -1.8129,-0.84066 -3.4062,-1.6562 l 13.625,3.875 c 17.306,8.4576 27.47,23.082 23,34 -0.91615,2.2373 -2.3752,4.1661 -4.2812,5.75 z"
         id="path4169"
         style="fill:url(#linearGradient4189)" />
      <path
         d="m 901.65,641.7 -6.1874,-1.8438 c 0.96015,-1.7128 1.6545,-3.5323 2.0312,-5.4688 3.1194,-16.034 -20.962,-34.284 -43.031,-38.5 -3.395,-0.64864 -28.884,-8.576 -32.158,-8.8044 v -4.125 l 41.439,12.148 c 26.285,5.4963 44.949,22.448 41.875,38.25 -0.59564,3.0616 -1.956,5.8595 -3.9687,8.3438 z"
         id="path4171"
         style="fill:url(#linearGradient4191)" />
      <path
         d="m 901.65,641.7 -6.1874,-1.8438 c 0.96015,-1.7128 1.6545,-3.5323 2.0312,-5.4688 3.1194,-16.034 -20.962,-34.284 -43.031,-38.5 -3.395,-0.64864 -28.884,-8.576 -32.158,-8.8044 v -4.125 l 41.439,12.148 c 26.285,5.4963 44.949,22.448 41.875,38.25 -0.59564,3.0616 -1.956,5.8595 -3.9687,8.3438 z"
         id="path4173"
         style="fill:url(#linearGradient4193)" />
      <path
         d="m 857.12,626.93 -3.9641,-2.0937 c 0.88361,-1.0334 1.604,-2.1696 2.1216,-3.4337 4.2861,-10.467 -9.5906,-26.117 -24.008,-31.964 -0.46163,-0.18723 -1.6195,-0.75098 -3.0428,-1.4796 l 12.171,3.4616 c 15.46,7.5554 24.54,20.62 20.546,30.373 -0.81842,1.9987 -2.1218,3.7216 -3.8245,5.1366 z"
         id="path4175"
         style="fill:url(#linearGradient4195)" />
      <path
         d="m 843.32,623.36 -3.9641,-2.0937 c 0.88361,-1.0334 1.604,-2.1696 2.1216,-3.4337 4.2861,-10.467 -9.5906,-26.117 -24.008,-31.964 -0.46162,-0.18723 -1.6195,-0.75098 -3.0428,-1.4796 l 12.171,3.4616 c 15.46,7.5554 24.54,20.62 20.546,30.373 -0.81842,1.9987 -2.1218,3.7216 -3.8245,5.1366 z"
         id="path4177"
         style="fill:url(#linearGradient4197)" />
      <path
         d="m 233.27,603.66 c 8.293,2.0234 15.486,1.4788 19.797,-5.7872 l -2.4934,-17.897 c -6.8751,-6.1732 -13.75,-4.9509 -20.625,-0.15543 l 3.3212,23.839 z"
         id="path4179"
         style="fill:url(#linearGradient4199)" />
      <path
         d="m 253.54,600.4 c 8.1502,1.2102 15.167,0.5728 18.843,-5.5081 l -2.3731,-17.034 c -6.4839,-2.9748 -12.983,-5.2096 -19.631,-0.14793 l 3.1611,22.69 z"
         id="path4181"
         style="fill:url(#linearGradient4201)" />
      <path
         d="m 400.34,596.64 c -33.454,0 -65.492,-1.7894 -95.093,-5.0625 l -3.6562,-0.40625 1.7187,-3.25 c 6.6711,-12.664 16.562,-21.113 29.062,-26.438 12.501,-5.3241 27.572,-7.6126 45.093,-8.4375 35.042,-1.6498 79.954,2.6312 133.59,2 49.659,-0.58438 89.508,-1.8787 121.53,-2.375 l 1.125,4.75 c -47.849,23.675 -134.36,39.219 -233.37,39.219 z m 0,-5 c 91.169,0 171.75,-13.479 220.09,-33.719 -29.952,0.58241 -65.212,1.606 -109.31,2.125 -53.937,0.63473 -98.976,-3.6522 -133.4,-2.0312 -17.214,0.81046 -31.767,3.1054 -43.406,8.0625 -10.453,4.4521 -18.485,11.154 -24.5,20.906 28.307,2.9831 58.735,4.6562 90.53,4.6562 z"
         id="path4183"
         style="text-indent:0;text-transform:none;block-progression:tb;opacity:0.9;color:#000000;fill:#191919" />
    </g>
  </g>

</svg>


    `
}