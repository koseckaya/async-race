import ListServices from './services/ListServices';

export interface Router {
   [key: string]: RouteModule<any>
}

export interface RouteModule<T> {
   listServices: ListServices<T> | null;
   render: () => string;
   init: () => void;
   bind: () => void;
   afterRender: () => void;
}

export type onNavigateType = (a: string) => void;

export interface CarRequest {
   name: string;
   color: string;
}

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
   [key: string]: any;
}

export type EngineStartResponse = {
   "velocity": number,
   "distance": number
}

export type EngineDriveResponse = {
   "success": boolean
}

export type EngineStopResponse = EngineStartResponse;