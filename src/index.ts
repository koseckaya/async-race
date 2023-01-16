//@ts-nocheck
import './index.html';
import './index.scss';
import Garage from './pages/garage';
import Winners from './pages/winners';
import Header from './pages/header';
import ListServices from './services/ListServices';

const GARAGE_PER_PAGE = 7;
const WINNERS_PER_PAGE = 10;

export const garageListService = new ListServices([], GARAGE_PER_PAGE)
export const winnersListService = new ListServices([], WINNERS_PER_PAGE)

const GarageModule = new Garage(garageListService);
GarageModule.init();

const WinnersModule = new Winners(winnersListService, garageListService)
WinnersModule.init();

export const routes: Router = {
    '/': GarageModule,
    '/winners': WinnersModule
};

const root = document.createElement('div');
root.setAttribute('id', 'root')

const headerModule = new Header();
const body = document.querySelector('body');
if (body) body.innerHTML = headerModule.render();
headerModule?.bind();

body?.appendChild(root);

const module = routes[window.location.pathname];
root.innerHTML = module.render();


module?.bind();
module?.afterRender();

window.onpopstate = () => {
    console.log('pop');
    //   root.innerHTML = routes[window.location.pathname]
}














document.querySelector('body').appendChild(root)



