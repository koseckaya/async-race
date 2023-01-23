
import { deleteCar, deleteWinner, driveEngine, startEngine, stopEngine } from "./APIService";
import { renderCarSvg } from "../helpers/car";
import Garage from "../pages/garage";
import { CarItem, EngineDriveResponse, EngineStartResponse } from "../types";




class CarService {
    car: CarItem | null = null;
    containerSelector: string = '';
    containerEl: Element | null = null
    garage: Garage | null = null
    raceParams: EngineStartResponse | null = null
    engineStatus: string | null = null
    abortController: AbortController | null = null

    constructor(car: CarItem, containerSelector: string, garage: Garage) {
        this.car = car
        this.containerSelector = containerSelector
        this.garage = garage;
    }

    getContainerEl = (): Element | null => {
        if (!this.containerEl) {
            this.containerEl = document.querySelector(this.containerSelector)
        }

        return this.containerEl;
    }

    init = (): void => {
        this.unbind()
        this.render()
        this.bind()
    }

    unbind = (): void => { }

    bind = (): void => {
        const removeCar = this.getContainerEl()?.querySelector('.btn-remove')
        if (removeCar) {
            removeCar.addEventListener('click', this.handleRemoveCar)
        }

        const updateCar = this.getContainerEl()?.querySelector('.btn-update')
        updateCar?.addEventListener('click', this.handleSelectCar)

        const carStart = this.getContainerEl()?.querySelector('.btn-start')
        carStart?.addEventListener('click', this.handleStart)

        const carStop = this.getContainerEl()?.querySelector('.btn-stop')
        carStop?.addEventListener('click', this.handleStop)

    }
    render = () => {
        const container = this.getContainerEl();
        if (container && this.car) {
            container.innerHTML = this.renderCar(this.car)
        }
    }


    renderCar = (car: CarItem): string => {
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
    handleSelectCar = (e: Event) => {
        let target = e.target as HTMLButtonElement
        let closestGarage = target.closest('.garage__item') as HTMLElement
        const targetId = Number(closestGarage?.dataset.id);
        const color = document.getElementById('colorUpdate') as HTMLInputElement
        const name = document.getElementById('nameUpdate') as HTMLInputElement
        const id = document.getElementById('idUpdate') as HTMLInputElement
        const selectedCar = this.garage?.listServices?.getEntity(+targetId)
        if (color && name && id && selectedCar) {
            color.value = selectedCar.color
            name.value = selectedCar.name
            id.value = `${selectedCar.id}`
        }
    }
    handleRemoveCar = (e: Event) => {
        let target = e.target as HTMLButtonElement
        let closestGarage = target.closest('.garage__item') as HTMLElement
        const targetId = Number(closestGarage?.dataset.id);

        deleteCar(targetId).then(() => {
            this.garage?.listServices?.removeEntity(targetId)
            this.garage?.initGarageList()
        })
        deleteWinner(targetId)

    }
    handleStart = (e: Event) => {
        let target = e.target as HTMLButtonElement
        target.disabled = true;

        this.handleStartRace()
            .then(() => {
                this.handleDriveEngine()
            })
    }

    handleStartRace = () => {
        const startBtn = this.getContainerEl()?.querySelector('.btn-start') as HTMLButtonElement
        const stopBtn = this.getContainerEl()?.querySelector('.btn-stop') as HTMLButtonElement
        startBtn.disabled = true
        const targetId = Number(this.car?.id);
        this.engineStatus = 'started'
        return startEngine(targetId).then((data) => {
            stopBtn.disabled = false
            this.raceParams = data;
        })
    }

    handleDriveEngine = (): Promise<EngineDriveResponse> | void => {
        if (!this.car) {
            return;
        }
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

    handleStop = () => {
        const startBtn = this.getContainerEl()?.querySelector('.btn-start') as HTMLButtonElement
        const stopBtn = this.getContainerEl()?.querySelector('.btn-stop') as HTMLButtonElement
        startBtn.disabled = false
        if (this.abortController) {
            this.abortController.abort()
        }
        if (this.car) stopEngine(this.car.id);
        this.carReset();
        stopBtn.disabled = true;
        const bluntContainer = this.getContainerEl()?.querySelector('#blunt_container') as HTMLDivElement
        bluntContainer.style.display = 'none'
    }

    carStart = () => {
        const car = this.getContainerEl()?.querySelector('.car__wrapper') as HTMLDivElement
        car.classList.add('ride')
        car.style.animationPlayState = "running";
        if (this.raceParams) {
            const time = (this.raceParams.distance / this.raceParams.velocity / 1000).toFixed(2);
            car.style.animationDuration = `${time}s`;
        }
    }

    carPause = () => {
        const car = this.getContainerEl()?.querySelector('.car__wrapper') as HTMLDivElement
        car.style.animationPlayState = "paused";
    }

    carReset = () => {
        const car = this.getContainerEl()?.querySelector('.car__wrapper') as HTMLDivElement
        car.classList.remove('ride')
        const bluntContainer = this.getContainerEl()?.querySelector('#blunt_container') as HTMLDivElement
        bluntContainer.style.display = 'none'
    }
    carBroken = () => {
        const bluntContainer = this.getContainerEl()?.querySelector('#blunt_container') as HTMLDivElement
        bluntContainer.style.display = 'block'
    }
}
export default CarService;