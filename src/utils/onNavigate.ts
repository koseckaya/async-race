import { routes } from '../index';
import { onNavigateType } from '../types';

export const onNavigate: onNavigateType = (path) => {
    const root = document.querySelector('#root')
    window.history.pushState(
        {},
        path,
        window.location.origin + path
    )
    const module = routes[path]
    if (module && root) {
        root.innerHTML = module.render()
        module.init();
        module.bind();
        module.afterRender();
    }
}