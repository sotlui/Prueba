import axios, { AxiosResponse } from "axios";
import { ReactElement, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import confirmar from "../utils/confirmar";
import ListGenerico from "../utils/ListGenerico";
import Paginacion from "../utils/Paginacion";
import FormGroupButton from "./FormGroupButton";

export default function FormListEntidad<T>(props: formListEntidadProps<T>) {

  
  const [entidades, setEntidades] = useState<T[]>();
  const [totalDePaginas, setTotalDePaginas] = useState(0);
  const [recordsPorPagina, setRecordsPorPagina] = useState(10);
  const [pagina, setPagina] = useState(1);

  useEffect(() => {
    cargarDatos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagina, recordsPorPagina]);

  function cargarDatos() {
    axios.get(props.url, { params: { pagina, recordsPorPagina } })
      .then((respuesta: AxiosResponse<T[]>) => {
        const totalDeRegistros = parseInt(respuesta.headers['cantidadtotalregistros'], 10);
        setTotalDePaginas(Math.ceil(totalDeRegistros / recordsPorPagina));
        setEntidades(respuesta.data);
      });
  }

  async function borrar(id: number) {
    try {
      await axios.delete(`${props.url}/${id}`);
      cargarDatos();
    } catch (error) {
      console.log(error.response.data);
    }

  }

  const botones = (urlEditar: string, id: number) => <>
    <Link className="btn btn-success" to={urlEditar}>Editar</Link>
    <FormGroupButton className="btn btn-danger" onClick={() => confirmar(() => borrar(id))}>Borrar</FormGroupButton>
  </>

  return (
    <>
      <h3>{props.titulo}</h3>
      {props.urlCrear ? <Link className="btn btn-primary" to={props.urlCrear}>
        Crear {props.nombreEntidad}
      </Link> : null}

      <Paginacion cantidadTotalDepaginas={totalDePaginas}
        paginaActual={pagina}  onChange={nuevaPagina => setPagina(nuevaPagina)} />

      <ListGenerico listado={entidades}>
        <table className="table table-striped">
          {props.children(entidades!, botones)}
        </table>
      </ListGenerico>
    </>
  );
}

interface formListEntidadProps<T> {
  url: string;
  urlId?:string;
  urlCrear?: string;
  children(entidades: T[], botones: (urlEditar: string, id: number) => ReactElement): ReactElement;
  titulo: string;
  nombreEntidad?: string;
}
