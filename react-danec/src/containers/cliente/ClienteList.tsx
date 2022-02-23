import { Link } from "react-router-dom";
import FormListEntidad from "../../components/FormListEntidad";
import { urlClientes } from "../../utils/endpoints";
import { clienteDTO } from "./cliente.model";

export default function ClienteList(){
    return(
        <FormListEntidad<clienteDTO>
            url={urlClientes} urlCrear="/clientes/crear" titulo='Cliente'
            nombreEntidad='Cliente' > 
            {(clientes, botones)=>
                <>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Cedula</th>
                            <th>Apellido</th>
                            <th>Nombre</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clientes?.map(cliente =>
                            <tr key={cliente.id}>
                                <td>
                                    {botones(`/clientes/editar/${cliente.id}`, cliente.id)}
                                    <Link className="btn btn-secondary" to={`/clientes/${cliente.id}/contactos`}>Contactos</Link>
                                </td>
                                <td>{cliente.cedula}</td>
                                <td>{cliente.apellido}</td>
                                <td>{cliente.nombre}</td>
                            </tr>
                            )}
                    </tbody>
                </>
            }                
        </FormListEntidad>
    )
}