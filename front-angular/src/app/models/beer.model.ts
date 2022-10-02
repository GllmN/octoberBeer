import { Type } from "./type.model";

export class Beer {
    constructor(
        public prix: number,
        public marque: string,
        public type: Type,
        public id?: any,
    ){}
}