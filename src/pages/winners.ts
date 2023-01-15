//@ts-nocheck
import { getWinnersList } from "../services/APIService";
import ListServices from "../services/ListServices";
import { onNavigate } from "../utils/onNavigate.ts"

const WINNERS_PER_PAGE = 10;

class Winners {
    listServices: ListServices | null = null
    constructor() {
        this.listServices = new ListServices([], WINNERS_PER_PAGE)
    }

    render = () => `
        <div class="container-winners">
            WINNERS
        </div>
    `

    init = () => {
        this.getWinners()
    }
    
    bind = () => {
        console.log('win');
    }

    afterRender = () => {
        this.initWinnersList()
    }

    getWinners = () => {
        getWinnersList().then((data) => {
            this.listServices?.setItems(data)
            this.initWinnersList()
        })
    }

    initWinnersList = () => {
        document.querySelector('.container-winners')?.innerHTML = '';
        this.renderWinners()
        this.bindWinnersList()
    }
    bindWinnersList = () => {
        console.log('bind winners');
        const nextBtn = document.querySelector('.btn-next-win')
        nextBtn?.addEventListener('click', this.handleNext)
        const prevBtn = document.querySelector('.btn-prev-win')
        prevBtn?.addEventListener('click', this.handlePrev)
    }

    renderWinners = () => {
        const isPrevDisabled = this.listServices.isFirstPage()
        const isNextDisabled = this.listServices.isLastPage()

        const container = document.querySelector('.container-winners')
        container?.innerHTML = `
            <div class="winners">
                <span>page: ${this.listServices.getPage()}</span>
                <ul>
                    ${this.listServices.getDataByCurrentPage().map((i) => {
                        return `<li data-id="${i.id}">${i.id}: <span >name</span>
                            <span>${i.wins}</span>
                            <span>Best time ${i.time}</span>
                            
                        </li>`
                    }).join('')}
                </ul>
                <button class="btn btn-prev-win" ${isPrevDisabled ? 'disabled' : ''}>Prev</button>
                <button class="btn btn-next-win" ${isNextDisabled ? 'disabled' : ''}>Next</button>
            
            </div>
        `
    }

    handlePrev = () => {
        const prevNumber = this.listServices.getPage() - 1
        this.listServices.setPage(prevNumber)
        this.initWinnersList()
    }
    handleNext = () => {
        const nextNumber = this.listServices.getPage() + 1
        this.listServices.setPage(nextNumber)
        this.initWinnersList()
    }


}
export default Winners