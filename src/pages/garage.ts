//@ts-nocheck
import { createCar, deleteCar } from "../services/APIService";
import { getCarsList } from "../services/APIService.ts";
import { onNavigate } from "../utils/onNavigate.ts"
import ListServices from './../services/ListServices.ts';
import { getRandomCarsList, renderCar } from './../helpers/car';

const GARAGE_PER_PAGE = 7

class Garage {
    listServices: ListServices | null = null

    constructor(listService) {
        this.listServices = listService;
    }

    render = () => {
        return ` 
        <div class="container-garage">
            GARAGE
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
    }

    renderGarage = () => {
        const garageListContainer = document.querySelector('.garage-list')

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
                <ul class="garage__items">
                    ${this.listServices.getDataByCurrentPage().map((i) => {
                    return renderCar(i);
                }).join('')}
                </ul>
                <button class="btn btn-prev" ${isPrevDisabled ? 'disabled' : ''}>Prev</button>
                <button class="btn btn-next" ${isNextDisabled ? 'disabled' : ''}>Next</button>
            </div>
        `;
        return;
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
                        <input type="text" name="nameUpdate">
                        <input type="color" name="colorUpdate" value="#FF0000">
                        <button class="btn btn-updateCar">Update</button>
                    </form>
                     <button class="btn btn-generate">Generate</button>
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
        console.log('update car')
    }

    handleGenerateCars = () => {
        const newCars = getRandomCarsList()
        const carsPromises = []
        newCars.forEach((item) => carsPromises.push(createCar(item)))
        Promise.all(carsPromises).then((data) => {
            console.log('', data);
            //data.forEach(i => )
            this.listServices.addEntities(data)
            this.initGarageList()
        })
    }
}
export default Garage