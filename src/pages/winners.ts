import { renderWinner } from "../helpers/car";
import { getWinnersList } from "../services/APIService";
import ListServices from "../services/ListServices";
import { onNavigate } from "../utils/onNavigate"
import { garageListService } from './../index';
import { CarItem, RouteModule, WinCarItem, WinnerItem } from './../types';


class Winners implements RouteModule<WinnerItem> {
    listServices: ListServices<WinnerItem> | null = null
    garageListService: ListServices<CarItem> | null = null

    constructor(listService: ListServices<WinnerItem>, garageListService: ListServices<CarItem>) {
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
        const winnersAContainer = document.querySelector('.container-winners')
        if (winnersAContainer) winnersAContainer.innerHTML = '';
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
        return winners?.reduce((acc: WinCarItem[], winner: WinnerItem) => {
            acc.push({
                ...winner,
                ...this.garageListService?.getEntity(winner.id)
            } as WinCarItem);
            return acc;
        }, []);
    }

    renderWinners = () => {
        const winnersData = this.getWinnersData();
        const isPrevDisabled = this.listServices?.isFirstPage()
        const isNextDisabled = this.listServices?.isLastPage()

        const container = document.querySelector('.container-winners') as HTMLDivElement
        if (container) container.innerHTML = `
            <div class="winners">
                <span class="winners__page">page: ${this.listServices?.getPage()}</span>
                <span class="winners__page">total: ${this.listServices?.getTotal()}</span>
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
                    ${winnersData?.map((i: WinCarItem) => {
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
        if (this.listServices) {
            const prevNumber = this.listServices.getPage() - 1
            this.listServices.setPage(prevNumber)
            this.initWinnersList()
        }
    }
    handleNext = () => {
        if (this.listServices) {
            const nextNumber = this.listServices.getPage() + 1
            this.listServices.setPage(nextNumber)
            this.initWinnersList()
        }
    }

    handleSortTimeUp = () => {
        this.listServices?.setSortBy('time')
        this.listServices?.setSortOrient('asc')
        this.initWinnersList()
    }
    handleSortTimeDown = () => {
        this.listServices?.setSortBy('time')
        this.listServices?.setSortOrient('desc')
        this.initWinnersList()
    }

    handleWinsUp = () => {
        this.listServices?.setSortBy('wins')
        this.listServices?.setSortOrient('desc')
        this.initWinnersList()
    }
    handleWinsDown = () => {
        this.listServices?.setSortBy('wins')
        this.listServices?.setSortOrient('asc')
        this.initWinnersList()
    }
}
export default Winners