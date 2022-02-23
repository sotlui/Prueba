import { useParams } from "react-router-dom";
import EditarEntidad from "../../utils/EditartEntidad";
import { urlContactos } from "../../utils/endpoints";
import { contactoCrearDTO, contactoDTO } from "./contacto.model";
import ContactoFormulario from "./ContactoFormulario";

export default function ContactoEditar() {
    const { id }: any = useParams();

    return (
        <>
            <EditarEntidad<contactoCrearDTO, contactoDTO>
                url={`${urlContactos}/editar`} urlIndice={`/clientes/${id}/contactos`}
                nombreEntidad="Contactos">
                {(entidad, editar) =>
                    <ContactoFormulario modelo={entidad}
                        onSubmit={async valores => { await editar(valores) }} />
                }
            </EditarEntidad>
        </>
    )
}