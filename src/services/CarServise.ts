//@ts-nocheck
// const newCar = new CarService(entity, '.car-container')
// newCar.init()

import { deleteCar } from "./APIService";
import carSvg from '../img/car.svg'
import { renderCarSvg } from "../helpers/car";




class CarService {
    car = null;
    containerEl = null
    garage: Garage | null = null

    constructor(car, containerSelector, garage) {
        this.car = car
        this.containerEl = document.querySelector(containerSelector)
        this.garage = garage;
    }
    init = () => {
        this.unbind()
        this.render()
        this.bind()
    }
    unbind = () => {}
    bind = () => {
        const removeCar = this.containerEl.querySelector('.btn-remove')
        removeCar.addEventListener('click', this.handleRemoveCar)

        const updateCar = this.containerEl.querySelector('.btn-update')
        updateCar.addEventListener('click', this.handleSelectCar)

        const carStart = this.containerEl.querySelector('.btn-start')
        carStart.addEventListener('click', this.handleStart)

        const carStop= this.containerEl.querySelector('.btn-stop')
        carStop.addEventListener('click', this.handleStop)

        const carReset = this.containerEl.querySelector('.btn-reset')
        carReset.addEventListener('click', this.handleReset)
    }
    render = () => {
        this.containerEl.innerHTML = this.renderCar(this.car)
        
    }

    handleSelectCar = (e) => {
        const targetId = e.target.closest('li').dataset.id;
        const color = document.getElementById('colorUpdate')
        const name = document.getElementById('nameUpdate')
        const id = document.getElementById('idUpdate')
        const selectedCar = this.garage.listServices.getEntity(targetId)
       
        color?.value = selectedCar.color
        name?.value = selectedCar.name
        id?.value = selectedCar.id
    }
    handleRemoveCar = (e) => {
        const targetId = e.target.closest('li').dataset.id;
        deleteCar(targetId).then(() => {
            this.garage.listServices.removeEntity(+targetId)
            this.garage.initGarageList()
        })
    }
    renderCar = car => {
        return `
        <div class="garage__item" data-id="${car.id}"> 
            <div class="car__btns">
                <button class="btn btn-car btn-remove" >Remove</button>
                <button class="btn btn-car btn-update" >Update</button>
                <span class="car__name">${car.id}: ${car.name}</span>
            </div>
            <div class="car__control">
                <div class="btns-control">
                    <button class="btn btn-control btn-start">Start</button>
                    <button class="btn btn-control btn-reset">Reset</button>
                    <button class="btn btn-control btn-stop">Stop</button>
                </div>
                
                <div class="car-wrap">
                    <div class="car__wrapper">
                        ${renderCarSvg(car.color)}
                    </div>
                </div>
                
            </div>
        </div>
    `;
    }
    handleStart = () => {
        console.log('start');
        const car = this.containerEl.querySelector('.car__wrapper')
        car.classList.add('ride')
        car.style.animationPlayState = "running";
        car.style.animationDuration = "1s";
    }
    handleReset = () => {
        console.log('reset');
        const car = this.containerEl.querySelector('.car__wrapper')
        car.classList.remove('ride')
    }
    handleStop = () => {
        console.log('stop');
        const car = this.containerEl.querySelector('.car__wrapper')
        car.style.animationPlayState = "paused";
    }
}
export default CarService;