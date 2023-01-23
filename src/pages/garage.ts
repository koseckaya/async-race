import { getCarsList, createCar, createWinner, deleteCar, getWinner, updateCar, updateWinner } from "../services/APIService";
import ListServices from './../services/ListServices';
import { getRandomCarsList } from './../helpers/car';
import { DEFAULT_COLOR } from "../constants";
import CarService from "../services/CarServise";
import { CarItem, EngineDriveResponse, EngineStartResponse, GarageRouteModule, WinnerItem } from "../types";


class Garage implements GarageRouteModule {
    listServices: ListServices<CarItem> | null = null
    raceList: CarService[] = []

    constructor(listService: ListServices<CarItem>) {
        this.listServices = listService;
    }

    render = (): string => {
        return ` 
        <div class="container-garage">
            <div class="createCar">
            </div>
            <div class="garage-list">
            </div>
        </div>
        `
    }

    init = () => {
        this.getGarage()
    }

    bind = () => { 
        console.log('');
    }

    afterRender = () => {
        this.initFormCar()
        this.initGarageList()
    }

    getGarage = () => {
        getCarsList()
            .then((data: CarItem[]) => {
                if (this.listServices) {
                    this.listServices.setItems(data)
                    this.initGarageList()
                }
            })
    }

    // GarageList
    initGarageList = () => {
        this.unbindGarageList()
        const garageListContainer = document.querySelector('.garage-list') as HTMLElement
        garageListContainer.innerHTML = '';
        this.renderGarage()
        this.bindGarageList()
    }

    unbindGarageList = () => {
        const nextBtn = document.querySelector('.btn-next')
        nextBtn?.removeEventListener('click', this.handleNext)
        const prevBtn = document.querySelector('.btn-prev')
        prevBtn?.removeEventListener('click', this.handlePrev)
    }

    bindGarageList = () => {
        const nextBtn = document.querySelector('.btn-next')
        nextBtn?.addEventListener('click', this.handleNext)
        const prevBtn = document.querySelector('.btn-prev')
        prevBtn?.addEventListener('click', this.handlePrev)

        const removeCars = document.querySelectorAll('.btn-remove')
        removeCars.forEach((i) => i.addEventListener('click', this.handleRemoveCar))

        const updateCarsBtn = document.querySelectorAll('.btn-update');
        updateCarsBtn.forEach(i => i.addEventListener(('click'), this.handleSelectCar))
    }

    renderGarage = () => {
        this.resetRaceList();

        const garageListContainer = document.querySelector('.garage-list') as HTMLElement
        if (this.listServices?.getTotal() === 0) {
            garageListContainer.innerHTML = `<div class="garage">Garage is empty</div>`;
            return;
        }
        const isPrevDisabled = this.listServices?.isFirstPage()
        const isNextDisabled = this.listServices?.isLastPage()
        garageListContainer.innerHTML = `
            <div class="garage">
                <span>total: ${this.listServices?.getTotal()}</span>
               
                <button class="btn btn-prev" ${isPrevDisabled ? 'disabled' : ''}>➤</button>
                 <span class="garage__page">page: ${this.listServices?.getPage()}</span>
                <button class="btn btn-next" ${isNextDisabled ? 'disabled' : ''}>➤</button>
                <div class="garage__items track">
                    ${this.renderCarsContainers()}
                </div>
            </div> `;
        this.initRaceList();
        return;
    }

    renderCarsContainers = () => {
        return this.listServices?.getDataByCurrentPage().map((car) => {
            const containerClass = `car-container-${car.id}`;
            const newCar: CarService = new CarService(car, `.${containerClass}`, this)
            this.raceList.push(newCar)
            return `<div class="${containerClass} car-container"></div>`
        }).join('');
    }

    initRaceList = () => {
        this.raceList.forEach((car: CarService) => {
            car.init();
        })
    }

    resetRaceList = () => {
        this.raceList.forEach((car: CarService) => {
            car.unbind();
        })
        this.raceList = [];
    }

    handlePrev = () => {
        if (this.listServices) {
            const prevNumber = this.listServices.getPage() - 1
            this.listServices.setPage(prevNumber)
            this.initGarageList()
        }
    }

    handleNext = () => {
        if (this.listServices) {
            const nextNumber = this.listServices.getPage() + 1
            this.listServices.setPage(nextNumber)
            this.initGarageList()
        }
    }

    handleRemoveCar = (e: Event) => {
        const target = e.target as HTMLButtonElement
        const closestGarage = target.closest('.garage__item') as HTMLElement
        const targetId = Number(closestGarage?.dataset.id);
        deleteCar(targetId).then(() => {
            this.listServices?.removeEntity(targetId)
            this.initGarageList()
        })
    }

    handleSelectCar = (e: Event) => {
        const target = e.target as HTMLButtonElement
        const closestGarage = target.closest('.garage__item') as HTMLElement
        const targetId = Number(closestGarage?.dataset.id);

        const color = document.getElementById('colorUpdate') as HTMLInputElement
        const name = document.getElementById('nameUpdate') as HTMLInputElement
        const id = document.getElementById('idUpdate') as HTMLInputElement
        const selectedCar: CarItem = this.listServices?.getEntity(targetId) as CarItem
        color.value = selectedCar.color
        name.value = selectedCar.name
        id.value = `${selectedCar.id}`
    }

    // Garage Form
    initFormCar = () => {
        (document.querySelector('.createCar') as HTMLElement).innerHTML = ''
        this.renderFormCar()
        this.bindFormCar()
    }

    bindFormCar = () => {
        const createBtn = document.querySelector('.btn-createCar')
        createBtn?.addEventListener('click', this.handleCreateCar)

        const updateCar = document.querySelector('.btn-updateCar')
        updateCar?.addEventListener('click', this.handleUpdateCar)

        const generateCars = document.querySelector('.btn-generate')
        generateCars?.addEventListener('click', this.handleGenerateCars)

        const raceCars = document.querySelector('.btn-race')
        raceCars?.addEventListener('click', this.handleRaceCars)

        const resetCars = document.querySelector('.btn-reset')
        resetCars?.addEventListener('click', this.handleResetCars)

    }

    renderFormCar = () => {
        const createCar = document.querySelector('.createCar')
        if (createCar) createCar.innerHTML = `
            <div class="wrapper-car-form">
                <div class="wrapper-create">
                    <form class="create-car-form">
                        <input type="text" name="name">
                        <input type="color" name="color" value="#FF0000">
                        <button class="btn btn-createCar">Create</button>
                    </form>
                </div>
                <div class="wrapper-update">
                    <form class="update-car-form">
                        <input type="text" name="name" id="nameUpdate">
                        <input type="color" name="color" id="colorUpdate" value="#FF0000">
                        <input type="hidden" name="id" id ="idUpdate">
                        <button class="btn btn-updateCar">Update</button>
                    </form>
                    <div class="race-control">
                        <button class="btn btn-race">Race</button>
                        <button class="btn btn-reset">Reset</button>
                        <button class="btn btn-generate">Generate</button>
                    </div>
                </div>
            </div>
        `
    }

    handleCreateCar = (e: Event) => {
        e.preventDefault()
        const formEl = document.querySelector('.create-car-form') as HTMLFormElement;
        if (formEl) {
            const formData = new FormData(formEl);
            const params: CarItem = {} as CarItem;

            for (const [key, value] of formData) {
                params[key as string] = value as string;
            }

            createCar(params).then((data) => {
                this.listServices?.addEntity(data);
                this.initGarageList()
            })
        }
    }

    handleUpdateCar = (e: Event) => {
        e.preventDefault()

        const formEl = document.querySelector('.update-car-form') as HTMLFormElement;
        const formData = new FormData(formEl);
        const params: CarItem = {} as CarItem;

        for (const [key, value] of formData) {
            params[key] = value as string;
        }
        const { id, ...otherParams } = params
        if (!id) return;
        updateCar(id, otherParams as CarItem).then((entity) => {
            this.listServices?.updateEntity(entity.id, entity)
            this.initGarageList()
            this.clearUpdateForm()
        })
    }

    handleGenerateCars = () => {
        const newCars = getRandomCarsList()
        const carsPromises: Promise<CarItem>[] = []
        newCars.forEach((item: Partial<CarItem>) => carsPromises.push(createCar(item)))
        Promise.all(carsPromises).then((data) => {
            this.listServices?.addEntities(data)
            this.initGarageList()
        })
    }

    clearUpdateForm = () => {
        const color = document.getElementById('colorUpdate') as HTMLInputElement
        const name = document.getElementById('nameUpdate') as HTMLInputElement
        const id = document.getElementById('idUpdate') as HTMLInputElement
        color.value = DEFAULT_COLOR;
        name.value = '';
        id.value = '';
    }

    handleRaceCars = () => {
        const raceBtn = document.querySelector('.btn-race') as HTMLButtonElement
        raceBtn.disabled = true
        const startRacePromise: Promise<EngineStartResponse>[] = []
        let place = 1;
        this.raceList.forEach((car: CarService) => {
            startRacePromise.push(car.handleStartRace())
        })
        Promise.all(startRacePromise).then(() => {
            this.raceList.forEach((car: CarService) => {
                const driveEnginePromise = car.handleDriveEngine();
                if (driveEnginePromise) {
                    driveEnginePromise.then((data: EngineDriveResponse) => {
                        if (data && data.success == true && place === 1) {
                            place++;
                            this.setWinner(car)

                        }
                    })
                }
            })
        })
    }
    handleResetCars = () => {
        const raceBtn = document.querySelector('.btn-race') as HTMLButtonElement
        raceBtn.disabled = false
        document.querySelectorAll('.winner').forEach((i) => (i as HTMLDivElement).innerText = '');
        this.raceList.forEach((car: CarService) => {
            car.handleStop()
        })
    }

    setWinner = (car: CarService) => {
        if (car.raceParams && car.raceParams.distance && car.raceParams.velocity) {
            const time = (car.raceParams.distance / car.raceParams.velocity / 1000).toFixed(2)
            const container = document.querySelector(`${car.containerSelector} .winner`) as HTMLDivElement
            container.innerText = `WINNER ${car?.car?.name} - ${time} s`
            const carId = car?.car?.id
            if (carId) {
                const winnerParams: WinnerItem = {
                    id: carId,
                    'time': +time,
                    'wins': 1
                }
                getWinner(carId).then((data) => {
                    if (data.id && data.wins && data.time) {
                        winnerParams.wins = ++data.wins;
                        if (Number(data.time) < Number(winnerParams.time)) {
                            winnerParams.time = data.time
                        }
                        updateWinner(winnerParams)
                    } else {
                        createWinner(winnerParams)
                    }
                })
            }
        }
    }

}
export default Garage