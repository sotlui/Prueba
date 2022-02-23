import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MostrarErrores from "../../utils/MostrarErrores";
import { clienteCrearDTO } from "./cliente.model";
import ClienteFomulario from "./ClienteFomulario";

export default function ClienteCrear(){
    const [errores, setErrores]=useState<string[]>([])
    const history = useNavigate();

    async function crear(cliente:clienteCrearDTO) {
        try {
            console.log(cliente);
            //await axios.post(urlClientes,cliente);
            history("/clientes");
        } catch (error) {
            setErrores(error.response.data);
        }
    }
    return(
        <>
            <h4>Craer Cliente / Proveedor</h4>
            <MostrarErrores errores={errores}/>
            <ClienteFomulario
                modelo={{cedula:'', apellido:'', nombre:'', direccion1:'', direccion2:'',
                provincia:0, canton:0, estado:1, fecha:undefined}}
                onSubmit={async valores=>await crear(valores)}
                />
        </>
    );
}