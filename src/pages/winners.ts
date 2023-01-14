//@ts-nocheck
import { onNavigate } from "../utils/onNavigate.ts"


class Winners {
   

    bind = () => {
         console.log('win');
       

       
    }

    render = () => `
        <div class="container">
            <div class="btn btn-winner">Winners</div>
        </div>
    `



}
export default Winners