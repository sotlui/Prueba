import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { ReactElement } from "react-markdown/lib/react-markdown";
import { useNavigate, useParams } from "react-router-dom";
import Cargando from "./Cargando";
import MostrarErrores from "./MostrarErrores";

export default function EditarEntidad<TCreacion, TLectura>(
  props: editarEntidadProps<TCreacion, TLectura>
) {
  //Optener parametros de la url
  const { id }: any = useParams();

  const [entidad, setEntidad] = useState<TCreacion>();
  const [errores, setErrores] = useState<string[]>([]);
  const history = useNavigate();

  useEffect(() => {
    
    axios
      .get(`${props.url}/${id}`)
      .then((respuesta: AxiosResponse<TLectura>) => {
        console.log(props.transformar(respuesta.data));
        
        setEntidad(props.transformar(respuesta.data));
      });
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function editar(entidadEditar: TCreacion) {
    try {
      if (props.transformarFormData) {
        const formData = props.transformarFormData(entidadEditar);
        await axios({
          method: "put",
          url: `${props.url}/${id}`,
          data: formData,
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else {
        await axios.put(`${props.url}/${id}`, entidadEditar);
      }
      history(props.urlIndice);
    } catch (error) {
      setErrores(error.response.data);
    }
  }
  return (
    <>
      <h3>{props.nombreEntidad}</h3>
      <MostrarErrores errores={errores} />
      {entidad ? props.children(entidad, editar) : <Cargando />}
    </>
  );
}

interface editarEntidadProps<TCreacion, TLectura> {
  url: string;
  urlIndice: string;
  nombreEntidad: string;
  children(
    entidad: TCreacion,
    editar: (entidad: TCreacion) => void
  ): ReactElement;
  //mapear de TLectura A TCreacion
  transformar(entidad: TLectura): TCreacion;
  //Transformar a FormData
  transformarFormData?(modelo: TCreacion): FormData;
}

EditarEntidad.defaultProps = {
  transformar: (entidad: any) => entidad,
};
