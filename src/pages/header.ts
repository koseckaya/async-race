import { onNavigate } from "../utils/onNavigate"


class Header {
    bind = () => {
       
        const btnWinner = document.querySelector('.btn-winner')
        if (btnWinner) btnWinner.addEventListener('click', () => {
            onNavigate('/winners')
        })
        const btnGarage = document.querySelector('.btn-garage')
        if (btnGarage) btnGarage.addEventListener('click', () => {
            onNavigate('/')
        })
    }

    render = () => `
        <div class="container">
            <button class="btn btn-garage">Go to Garage</button>
            <button class="btn btn-winner">Go to Winners</button>
        </div>
    `

}
export default Header