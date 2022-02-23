import { useParams } from "react-router-dom";
import FormListEntidad from "../../components/FormListEntidad";
import { urlContactos } from "../../utils/endpoints";
import { contactoDTO } from "./contacto.model";

export default function ContactoList() {
    const { id }: any = useParams();
    return (
        <FormListEntidad<contactoDTO>
            url={`${urlContactos}/${id}`} urlCrear={`/clientes/${id}/contactos/crear`} titulo="Contacto"
            //urlId={`${urlContactos}/${id}`} 
            nombreEntidad='Contacto'>
            {(contactos, botones) =>
                <>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Numero</th>
                            <th>Tipo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contactos?.map(contacto =>
                            <tr key={contacto.id}>
                                <td>
                                    {botones(`/clientes/${id}/contactos/editar/${contacto.id}`, contacto.id)}
                                </td>
                                <td>{contacto.numero}</td>
                                <td>{contacto.tipo}</td>
                            </tr>
                        )}
                    </tbody>
                </>
            }
        </FormListEntidad>

    )
}