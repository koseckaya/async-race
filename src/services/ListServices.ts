//@ts-nocheck
class ListServices {
    items = []
    page = 1
    perPage = 7
    constructor (items, perPage) {
        this.items = items;
        this.perPage = perPage;
    }

    setPage = (num) => {
        if (num < 1 || num > this.getTotalPages()) {
            this.page = 1
        } else {
            this.page = num
        }
    }

    getDataByCurrentPage = () => { 
        const startWith = (this.page - 1) * this.perPage
        const itemsOnPage = this.items.slice(startWith, startWith + this.perPage)
        return itemsOnPage;
    }

    setItems = (items) => {
        this.items = items
    }

    getTotal = () => this.items.length;

    getPage = () => this.page;

    getTotalPages = () => Math.ceil(this.getTotal() / this.perPage);
    
    addEntity = (entity) => this.items.push(entity)

    addEntities = (entities) => this.items.push(...entities)

    updateEntity = (id, entity) => {
        const newItems = this.items.map((item) => {
            if (item.id === id) {
                return { ...item, ...entity}
            } 
            return item;
        })
        this.items = newItems;
    }

    removeEntity = (id) => { 
        this.items = this.items.filter((item) => {
            return item.id !== id;
        } )
    }
    
    getEntity = (id) => this.items.find((item) => +item.id === +id);
  
    isFirstPage = () => {
        return this.getPage() === 1 ? true : false;
    }
    isLastPage = () => {
        return this.getPage() === this.getTotalPages() ? true : false;
    }
    getFirstEntity = () => {
       return this.items[0]
    }

}
export default ListServices