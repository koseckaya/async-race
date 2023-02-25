import ListServices from './services/ListServices';
import Garage from './pages/garage';
import Winners from './pages/winners';


export interface Router {
   [key: string]: Garage | Winners
}



export interface RouteModule<T> {
   listServices: ListServices<T> | null;
   render: () => string;
   init: () => void;
   bind: () => void;
   afterRender: () => void;
}

export interface GarageRouteModule extends RouteModule<CarItem> { 
   render: () => string;
}

export interface WinnerRouteModule extends RouteModule<WinnerItem> {
   render: () => string;
}

export type onNavigateType = (a: string) => void;

export interface CarItem extends Entity {
   name: string;
   color: string;
}

export interface WinnerItem extends Entity {
   time: number;
   wins?: number;
}

export type WinCarItem = CarItem & WinnerItem;

export interface Entity {
   id: number;
   [key: string]: string | number | undefined;
}

export type EngineStartResponse = {
   "velocity": number,
   "distance": number
}

export type EngineDriveResponse = {
   "success": boolean
}

export type EngineStopResponse = EngineStartResponse;
