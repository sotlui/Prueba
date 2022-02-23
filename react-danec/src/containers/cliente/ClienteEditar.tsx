import EditarEntidad from "../../utils/EditartEntidad";
import { urlClientes } from "../../utils/endpoints";
import { clienteCrearDTO, clienteDTO } from "./cliente.model";
import ClienteFomulario from "./ClienteFomulario";

export default function ClienteEditar() {

 console.log("ED: ",urlClientes);
 
    return (
        <>
            <EditarEntidad<clienteCrearDTO, clienteDTO>
                url={urlClientes} urlIndice="/clientes" nombreEntidad="Cliente">

                {(entidad, editar) =>
                    <ClienteFomulario modelo={entidad}
                        onSubmit={async valores => { await editar(valores) }}
                        //provinciaSelecionada={articuloDTO}
                    />
                }
            </EditarEntidad>
        </>
    );
}