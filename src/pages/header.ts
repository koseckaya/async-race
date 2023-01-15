//@ts-nocheck
import { onNavigate } from "../utils/onNavigate.ts"


class Header {
    bind = () => {
       
        const btnWinner = document.querySelector('.btn-winner')
        btnWinner.addEventListener('click', () => {
            onNavigate('/winners')
        })

        const btnGarage = document.querySelector('.btn-garage')
        btnGarage.addEventListener('click', () => {
            onNavigate('/')
        })
    }

    render = () => `
        <div class="container">
            <h1>Let's Race</h1>
            <button class="btn btn-garage">Go to Garage</button>
            <button class="btn btn-winner">Go to Winners</button>
        </div>
    `

}
export default Header