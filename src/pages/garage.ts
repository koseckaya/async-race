//@ts-nocheck
import { onNavigate } from "../utils/onNavigate.ts"


class Garage {
   

    bind = () => {
        console.log('garage');
       

        
    }

    render = () => `
        <div class="container">
            <div class="btn btn-garage">Garage</div>
        </div>
    `



}
export default Garage