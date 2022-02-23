import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { urlContactos } from "../../utils/endpoints";
import MostrarErrores from "../../utils/MostrarErrores";
import { contactoCrearDTO } from "./contacto.model";
import ContactoFormulario from "./ContactoFormulario";

export default function ContactoCrear(){
    const [errores, setErrores] = useState<string[]>([]);
    const history = useNavigate();
    const {id}:any = useParams();


    async function crear(contacto:contactoCrearDTO) {
        try {
            await axios.post(urlContactos, contacto);
            history(`/clientes/${id}/contactos`);
        } catch (error) {
            setErrores(error.response.data);
        }
    }

    return(
        <>
          <h4>Crear Contactos</h4>  
          <MostrarErrores errores={errores}/>
          <ContactoFormulario
          modelo={{codigo:0, tipo:0, numero:0, clienteId:id}}
          onSubmit={async valores => await crear(valores)} 
          />
        </>
    )
}