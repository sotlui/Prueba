import { ReactElement, useState } from "react";
import { articuloDTO } from "../articulo/articulo.model";
import { AsyncTypeahead } from "react-bootstrap-typeahead";
import axios, { AxiosResponse } from "axios";
import { urlArticulos } from "../../utils/endpoints";

export default function TypeAheadProvincia(props: typeAheadProvinciaProps) {
  const [opciones, setOpciones] = useState<articuloDTO[]>([]);

  //Para vacias cuando seleccione al actor
  const selecion: articuloDTO[] = [];


  const [estaCargando, setEstaCargando] = useState(false);

  function manejarBusqueda(query: string) {
    setEstaCargando(true);
    axios
      //.get(`${urlArticulos}/buscarPorNombre/${query}`)
      .get(`${urlArticulos}/2`)
      .then((respuesta: AxiosResponse<articuloDTO[]>) => {
        setOpciones(respuesta.data);
        setEstaCargando(false);
      });
  }

  return (
    <>
      <label>Actores</label>
      <AsyncTypeahead
        id="typeahead"
        onChange={(provincia) => {
          if (
            props.provincia.id===-1//.findIndex((x) => x.id === provincia[0].id) === -1
          ) {
            props.onAdd(props.provincia);
          }
        }}
        options={opciones}
        labelKey={(provin) => provin.descripcion}
        filterBy={() => true}
        isLoading={estaCargando}
        onSearch={manejarBusqueda}
        placeholder="Escriba el nombre del actor..."
        minLength={2}
        flip={true}
        selected={selecion}
        //Personalizar en el listado de sugerencias
        renderMenuItemChildren={(provin) => (
          <>
            <span>{provin.descripcion}</span>
          </>
        )}
      />
    </>
  );
}

interface typeAheadProvinciaProps {
  provincia: articuloDTO;
  onAdd(provincia: articuloDTO): void;
  listadoUI?(provi: articuloDTO): ReactElement;
  onRemove(provincia: articuloDTO): void;
}
