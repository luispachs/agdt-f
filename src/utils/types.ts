export type Validator = {
    isValid:boolean;
    errors:String[];
    data:Object
}

export type Plan = {
    id?:number;
    name:string;
    value:number;
    frequency:string
}