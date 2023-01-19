// interface routeType {
//     path: string,
//     page: string
// }
interface Router {
   [path: string]: string
}

type onNavigateType = (a: string) => void;

export interface CarRequest {
   name: string;
   color: string;
}

export interface CarItem {
   name: string;
   color: string;
   id: number
}

export interface WinnerItem {
   id: number;
   time: number;
   wins?: number;
}