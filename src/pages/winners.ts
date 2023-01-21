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
        const nextBtn = document.querySelector('.btn-next-win')
        nextBtn?.addEventListener('click', this.handleNext)
        const prevBtn = document.querySelector('.btn-prev-win')
        prevBtn?.addEventListener('click', this.handlePrev)

        const timeUp = document.querySelector('.btn-time-up')
        timeUp?.addEventListener('click', this.handleSortTimeUp)
        const timeDown = document.querySelector('.btn-time-down')
        timeDown?.addEventListener('click', this.handleSortTimeDown)
        const winsUp = document.querySelector('.btn-wins-up')
        winsUp?.addEventListener('click', this.handleWinsUp)
        const winsDown = document.querySelector('.btn-wins-down')
        winsDown?.addEventListener('click', this.handleWinsDown)
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
                <span class="winners__page">page: ${this.listServices.getPage()}</span>
                <span class="winners__page">total: ${this.listServices.getTotal()}</span>
            <table class="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Car</th>
                        <th>Name</th>
                        <th>
                            <div class="wins">Wins
                            <span class="wins-buttons">
                                <button class="btn btn-wins btn-wins-up">▲</button>
                                <button class="btn btn-wins btn-wins-down">▼</button>
                            </span></div>
                        </th>
                        <th>
                            <div class="best-time">Best time
                            <span class="best-time-buttons">
                                <button class="btn btn-time btn-time-up">▲</button>
                                <button class="btn btn-time btn-time-down">▼</button>
                            </span>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    ${winnersData.map((i) => {
                        return renderWinner(i);
                    }).join('')}
                </tbody>
            </table>

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

    handleSortTimeUp = (e) => {
        this.listServices.setSortBy('time')
        this.listServices.setSortOrient('asc')
        this.initWinnersList()
    }
    handleSortTimeDown = (e) => {
        this.listServices.setSortBy('time')
        this.listServices.setSortOrient('desc')
        this.initWinnersList()
    }

    handleWinsUp = (e) => {
        this.listServices?.setSortBy('wins')
        this.listServices?.setSortOrient('desc')
        this.initWinnersList()
    }
    handleWinsDown = (e) => {
        this.listServices.setSortBy('wins')
        this.listServices.setSortOrient('asc')
        this.initWinnersList()
    }
}
export default Winners