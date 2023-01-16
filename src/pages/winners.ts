//@ts-nocheck
import { renderWinner } from "../helpers/car";
import { getWinnersList } from "../services/APIService";
import ListServices from "../services/ListServices";
import { onNavigate } from "../utils/onNavigate.ts"
import { garageListService } from './../index';


class Winners {
    listServices: ListServices | null = null
    garageListService: ListServices | null = null

    constructor(listService, garageListService) {
        this.listServices = listService;
        this.garageListService = garageListService;
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

    getWinnersData = () => {
        const winners = this.listServices?.getDataByCurrentPage();


        return winners?.reduce((acc, winner) => {
            acc.push({
                ...winner,
                ...this.garageListService?.getEntity(winner.id)
            });
            return acc;
        }, []);
    }

    renderWinners = () => {
        const winnersData = this.getWinnersData();
        const isPrevDisabled = this.listServices.isFirstPage()
        const isNextDisabled = this.listServices.isLastPage()

        const container = document.querySelector('.container-winners')
        container?.innerHTML = `
            <div class="winners">
                <span>page: ${this.listServices.getPage()}</span>
                <ul>
                    ${winnersData.map((i) => {
            return renderWinner(i);
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