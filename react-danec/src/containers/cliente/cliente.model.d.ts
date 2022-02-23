export interface clienteCrearDTO{
    cedula:string;
    apellido:string;
    nombre:string;
    direccion1:string;
    direccion2:string;
    provincia:number;
    canton:number;
    estado?:number;
    fecha?:Date;
}

export interface clienteDTO{
    id:number;
    cedula:string;
    apellido:string;
    nombre:string;
    fecha:Date;

}