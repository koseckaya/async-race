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
    if (module) {

        root?.innerHTML = module.render()
        module.init();
        module?.bind();
        module?.afterRender();
    } 
}