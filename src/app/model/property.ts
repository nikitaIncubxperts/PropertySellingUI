export class Property {
    id: number;
    sellRent: number;
    bhk: number;
    propType: string;
    fType: string;
    name: string;
    city: string;

    price: number;
    builtArea: number;
    security?: number;
    maintenance?: number;
    carpetArea?: number;

    floor?: string;
    totalFloor?: string;
    addr: string;

    rtm: boolean;
    age?: string;
    entrance?: string;
    gated?: boolean;
    date?: string;
    desc?: string;

    image?: string;
}