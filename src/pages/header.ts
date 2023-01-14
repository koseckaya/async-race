//@ts-nocheck
import { onNavigate } from "../utils/onNavigate.ts"


class Header {
    bind = () => {
         console.log('header');
        const btnWinner = document.querySelector('.btn-winner')
        btnWinner.addEventListener('click', () => {
            console.log('head win');
            onNavigate('/winners')
        })

        const btnGarage = document.querySelector('.btn-garage')
        btnGarage.addEventListener('click', () => {
            console.log('head gar');
            onNavigate('/')
        })
    }

    render = () => `
        <div class="container">
            <h1>Header</h1>
            <button class="btn btn-garage">Go to Garage</button>
            <button class="btn btn-winner">Go to Winners</button>
        </div>
    `

}
export default Header