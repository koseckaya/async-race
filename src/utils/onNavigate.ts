//@ts-nocheck
import { routes } from '../index.ts';



export const onNavigate = (path) => {
    const root = document.querySelector('#root')
    window.history.pushState(
        {},
        path,
        window.location.origin + path
    )
    const module = routes[path]
    console.log('module', module, root);
    if (module) {
        console.log('module', module.render(), root);
        root?.innerHTML= module.render()
    } 
}