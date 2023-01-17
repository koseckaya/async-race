//@ts-nocheck
import { createCar, deleteCar, updateCar } from "../services/APIService";
import { getCarsList } from "../services/APIService.ts";
import { onNavigate } from "../utils/onNavigate.ts"
import ListServices from './../services/ListServices.ts';
import { getRandomCarsList, renderCar } from './../helpers/car';
import { DEFAULT_COLOR } from "../constanse";
import CarService from "../services/CarServise";

const GARAGE_PER_PAGE = 7

class Garage {
    listServices: ListServices | null = null
    raceList = []

    constructor(listService) {
        this.listServices = listService;
    }

    render = () => {
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
        console.log('garage bind');
    }

    afterRender = () => {
        this.initFormCar()
        this.initGarageList()
    }

    getGarage = () => {
        getCarsList()
            .then((data) => data.json())
            .then((data) => {
                this.listServices.setItems(data)
                this.initGarageList()
            })
    }

    // GarageList
    initGarageList = () => {
        this.unbindGarageList()
        document.querySelector('.garage-list')?.innerHTML = '';
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

        const garageListContainer = document.querySelector('.garage-list')
        const pageCars = this.listServices.getDataByCurrentPage()
        pageCars.forEach(car => {

        });

        if (this.listServices.getTotal() === 0) {
            garageListContainer?.innerHTML = `<div class="garage">Garage is empty</div>`;
            return;
        }
        const isPrevDisabled = this.listServices.isFirstPage()
        const isNextDisabled = this.listServices.isLastPage()

        garageListContainer?.innerHTML = `
            <div class="garage">
                <span>total: ${this.listServices.getTotal()}</span>
                <span>page: ${this.listServices.getPage()}</span>
                <div class="garage__items track">
                    ${this.renderCarsContainers()}
                </div>
                <button class="btn btn-prev" ${isPrevDisabled ? 'disabled' : ''}>Prev</button>
                <button class="btn btn-next" ${isNextDisabled ? 'disabled' : ''}>Next</button>

                <div class="car-container"></div>
            </div>
        `;

        this.initRaceList();

        return;
    }

    renderCarsContainers = () => {
        return this.listServices.getDataByCurrentPage().map((car) => {
            const containerClass = `car-container-${car.id}`;
            const newCar = new CarService(car, `.${containerClass}`, this)
            this.raceList.push(newCar)

            return `<div class="${containerClass}"></div>`
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
        const prevNumber = this.listServices.getPage() - 1
        this.listServices.setPage(prevNumber)
        this.initGarageList()
    }

    handleNext = () => {
        const nextNumber = this.listServices.getPage() + 1
        this.listServices.setPage(nextNumber)
        this.initGarageList()
    }

    handleRemoveCar = (e) => {
        const targetId = e.target.closest('li').dataset.id;
        deleteCar(targetId).then(() => {
            this.listServices.removeEntity(+targetId)
            this.initGarageList()
        })
    }

    handleSelectCar = (e) => {
        const targetId = e.target.closest('li').dataset.id;
        const color = document.getElementById('colorUpdate')
        const name = document.getElementById('nameUpdate')
        const id = document.getElementById('idUpdate')
        const selectedCar = this.listServices.getEntity(targetId)
        color?.value = selectedCar.color
        name?.value = selectedCar.name
        id?.value = selectedCar.id
    }

    // Garage Form
    initFormCar = () => {
        this.unbindFormCar()
        document.querySelector('.createCar')?.innerHTML = ''
        this.renderFormCar()
        this.bindFormCar()
    }

    unbindFormCar = () => { }

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
        createCar?.innerHTML = `
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

    handleCreateCar = (e) => {
        e.preventDefault()
        const formEl = document.querySelector('.create-car-form');
        const formData = new FormData(formEl);
        const params = {};

        for (const [key, value] of formData) {
            params[key] = value;
        }

        createCar(params).then((data) => {
            console.log('car is created', data);
        })
    }

    handleUpdateCar = (e) => {
        e.preventDefault()

        const formEl = document.querySelector('.update-car-form');
        const formData = new FormData(formEl);
        const params = {};

        for (const [key, value] of formData) {
            params[key] = value;
        }
        const { id, ...otherParams } = params
        if (!id) return;
        updateCar(id, otherParams).then((entity) => {
            this.listServices.updateEntity(entity.id, entity)
            this.initGarageList()
            this.clearUpdateForm()
        })
    }

    handleGenerateCars = () => {
        const newCars = getRandomCarsList()
        const carsPromises = []
        newCars.forEach((item) => carsPromises.push(createCar(item)))
        Promise.all(carsPromises).then((data) => {
            this.listServices.addEntities(data)
            this.initGarageList()
        })
    }

    clearUpdateForm = () => {
        const color = document.getElementById('colorUpdate')
        const name = document.getElementById('nameUpdate')
        const id = document.getElementById('idUpdate')
        color?.value = DEFAULT_COLOR;
        name?.value = '';
        id?.value = '';
    }

    handleRaceCars = () => {
        
    }

    handleResetCars = () => {
        
    }


}
export default Garage