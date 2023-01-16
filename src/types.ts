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