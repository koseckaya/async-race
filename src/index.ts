//@ts-nocheck
import './index.html';
import './index.scss';
import Garage from './pages/garage.ts';
import Winners from './pages/winners.ts';
import Header from './pages/header.ts';

export const routes: Router = {
    '/': new Garage(),
    '/winners': new Winners()
};

console.log(123);

const body = document.querySelector('body');

const root = document.createElement('div');
root.setAttribute('id', 'root')

const module = routes[window.location.pathname];



const headerModule = new Header();

body.innerHTML = headerModule.render();
headerModule?.bind();

body?.appendChild(root);
root.innerHTML = module.render();


module?.bind();

window.onpopstate = () => {
 //   root.innerHTML = routes[window.location.pathname]
}














document.querySelector('body').appendChild(root)



