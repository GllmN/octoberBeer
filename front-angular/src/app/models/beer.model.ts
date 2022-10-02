import { Type } from "./type.model";

export class Beer {
    constructor(
        public id: any,
        public prix: number,
        public marque: string,
        public type: Type,
    ){}
}