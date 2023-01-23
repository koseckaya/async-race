import { Entity } from "../types";

class ListServices<T = Entity> {
    items: T[] = []
    page = 1
    perPage = 7
    sortBy: string = ''
    sortOrient: string = ''
    constructor(items: T[], perPage: number) {
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

    getDataByCurrentPage = (): T[] => {
        const startWith = (this.page - 1) * this.perPage
        this.sortItems()
        const itemsOnPage = this.items.slice(startWith, startWith + this.perPage)
        return itemsOnPage;
    }

    setItems = (items: T[]) => {
        this.items = items
    }

    getTotal = (): number => this.items.length;

    getPage = (): number => this.page;

    getTotalPages = (): number => Math.ceil(this.getTotal() / this.perPage);

    addEntity = (entity: T) => this.items.push(entity)

    addEntities = (entities: T[]) => this.items.push(...entities)

    updateEntity = (id: number, entity: T) => {
        const newItems = this.items.map((item) => {
            const itemId = Number((item as Entity).id);
            if (itemId === id) {
                return { ...item, ...entity }
            }
            return item;
        })
        this.items = newItems;
    }

    removeEntity = (id: number) => {
        this.items = this.items.filter((item) => {
            const itemId = Number((item as Entity).id);
            return itemId !== id;
        })
    }

    getEntity = (id: number) => this.items.find((item: T) => {
        const itemId = Number((item as Entity).id);
        return itemId === +id
    });

    isFirstPage = (): boolean => {
        return this.getPage() === 1 ? true : false;
    }
    isLastPage = (): boolean => {
        return this.getPage() === this.getTotalPages() ? true : false;
    }
    sortItems = () => {
        if (this.sortBy && this.sortOrient) {
            this.items = this.items.sort((car1: T, car2: T) => {
                const firstCar = car1[this.sortBy as keyof T];
                const secondCar = car2[this.sortBy as keyof T];

                if (firstCar > secondCar) {
                    if (this.sortOrient == 'asc') {
                        return 1
                    } else {
                        return -1
                    }
                } else {
                    if (this.sortOrient == 'asc') {
                        return -1
                    } else {
                        return 1
                    }
                }
            })
        }

    }

    setSortBy = (by: string) => {
        this.sortBy = by
    }
    setSortOrient = (orient: string) => {
        this.sortOrient = orient
    }


}
export default ListServices