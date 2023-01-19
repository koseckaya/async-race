import { CarItem } from "../types";

class ListServices {
    items: CarItem[] = []
    page = 1
    perPage = 7
    constructor(items: CarItem[], perPage: number) {
        this.items = items;
        this.perPage = perPage;
    }

    setPage = (num: number): void => {
        if (num < 1 || num > this.getTotalPages()) {
            this.page = 1
        } else {
            this.page = num
        }
    }

    getDataByCurrentPage = (): CarItem[] => { 
        const startWith = (this.page - 1) * this.perPage
        const itemsOnPage = this.items.slice(startWith, startWith + this.perPage)
        return itemsOnPage;
    }

    setItems = (items: CarItem[]) => {
        this.items = items
    }

    getTotal = (): number => this.items.length;

    getPage = (): number => this.page;

    getTotalPages = (): number => Math.ceil(this.getTotal() / this.perPage);
    
    addEntity = (entity: CarItem) => this.items.push(entity)

    addEntities = (entities: CarItem[]) => this.items.push(...entities)

    updateEntity = (id: number, entity: CarItem) => {
        const newItems = this.items.map((item) => {
            if (item.id === id) {
                return { ...item, ...entity}
            } 
            return item;
        })
        this.items = newItems;
    }

    removeEntity = (id: number) => { 
        this.items = this.items.filter((item) => {
            return item.id !== id;
        } )
    }
    
    getEntity = (id: number) => this.items.find((item) => +item.id === +id);
  
    isFirstPage = ():boolean => {
        return this.getPage() === 1 ? true : false;
    }
    isLastPage = ():boolean => {
        return this.getPage() === this.getTotalPages() ? true : false;
    }

}
export default ListServices