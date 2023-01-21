//@ts-nocheck
// const newCar = new CarService(entity, '.car-container')
// newCar.init()

import { deleteCar, deleteWinner, driveEngine, startEngine, stopEngine } from "./APIService";
import { renderCarSvg } from "../helpers/car";




class CarService {
    car = null;
    containerSelector = '';
    containerEl = null
    garage: Garage | null = null
    raceParams = null
    engineStatus = null
    abortController = null

    constructor(car, containerSelector, garage) {
        this.car = car
        this.containerSelector = containerSelector
        this.garage = garage;

    }

    getContainerEl = () => {
        if (!this.containerEl) {
            this.containerEl = document.querySelector(this.containerSelector)
        }

        return this.containerEl;
    }

    init = () => {
        this.unbind()
        this.render()
        this.bind()
    }
    unbind = () => { }
    bind = () => {
        const removeCar = this.getContainerEl().querySelector('.btn-remove')
        removeCar.addEventListener('click', this.handleRemoveCar)

        const updateCar = this.getContainerEl().querySelector('.btn-update')
        updateCar.addEventListener('click', this.handleSelectCar)

        const carStart = this.getContainerEl().querySelector('.btn-start')
        carStart.addEventListener('click', this.handleStart)

        const carStop = this.getContainerEl().querySelector('.btn-stop')
        carStop.addEventListener('click', this.handleStop)

    }
    render = () => {
        this.getContainerEl().innerHTML = this.renderCar(this.car)
    }


    renderCar = car => {
        return `
        <div class="winner"></div>
        <div class="garage__item" data-id="${car.id}"> 
            <div class="car__name">${car.id} ${car.name}</div>
            <div class ="rase-btns">
                <div class="btns-control">
                    <button class="btn btn-control btn-start">Start</button>
                    <button class="btn btn-control btn-stop" disabled>Stop</button>
                </div>
                 <div class="car__btns">
                    <button class="btn btn-car btn-remove"></button>
                    <button class="btn btn-car btn-update"></button>
                </div>
            </div>
            <div class="car__control">
                <div class="car-wrap">

                    <div class="car__wrapper">
                        ${renderCarSvg(car.color)}
                    </div>
                </div>

            </div>
        </div>
    `;
    }
    handleSelectCar = (e) => {
        const targetId = e.target.closest('.garage__item').dataset.id;
        const color = document.getElementById('colorUpdate')
        const name = document.getElementById('nameUpdate')
        const id = document.getElementById('idUpdate')
        const selectedCar = this.garage.listServices.getEntity(+targetId)

        color?.value = selectedCar.color
        name?.value = selectedCar.name
        id?.value = selectedCar.id
    }
    handleRemoveCar = (e) => {
        const targetId = Number(e.target.closest('.garage__item').dataset.id);
        deleteCar(targetId).then(() => {
            this.garage.listServices.removeEntity(targetId)
            this.garage.initGarageList()
        })
        deleteWinner(targetId)

    }
    handleStart = (e) => {
        e.target.disabled = true;

        this.handleStartRace()
            .then(() => {
                this.handleDriveEngine()
            })
    }

    handleStartRace = () => {
        this.getContainerEl().querySelector('.btn-start').disabled = true
        const targetId = this.car.id;
        this.engineStatus = 'started'
        return startEngine(targetId).then((data) => {
            this.getContainerEl().querySelector('.btn-stop').disabled = false
            this.raceParams = data;
        })
    }

    handleDriveEngine = () => {
        const targetId = this.car.id;
        this.engineStatus = 'drive'
        this.abortController = new AbortController();
        let signal = this.abortController.signal;

        let engine = driveEngine(targetId, signal)
            .then(data => {
                console.log(`${targetId} доехал! `)
                return data
            })
            .catch((err) => {
                if (err.name !== "AbortError") {
                    console.log(`${targetId} сломался!`)
                    this.carBroken()
                } 
                this.carPause();
            })
        this.carStart()
        return engine;
    }

    handleStop = (e) => {
        this.getContainerEl().querySelector('.btn-start').disabled = false
        if (this.abortController) {
            this.abortController.abort()
        }
        stopEngine(this.car.id);
        this.carReset();
        this.getContainerEl().querySelector('.btn-stop').disabled = true;

        this.getContainerEl().querySelector('#blunt_container').style.display = 'none'
    }

    carStart = () => {
        const car = this.getContainerEl().querySelector('.car__wrapper')
        car.classList.add('ride')
        car.style.animationPlayState = "running";
        const time = (this.raceParams.distance / this.raceParams.velocity / 1000).toFixed(2);
        car.style.animationDuration = `${time}s`;
    }

    carPause = () => {
        const car = this.getContainerEl().querySelector('.car__wrapper')
        car.style.animationPlayState = "paused";
  
    }

    carReset = () => {
        const car = this.getContainerEl().querySelector('.car__wrapper')
        car.classList.remove('ride')
        this.getContainerEl().querySelector('#blunt_container').style.display = 'none'
    }
    carBroken = () => {
        this.getContainerEl().querySelector('#blunt_container').style.display = 'block'
    }
}
export default CarService;