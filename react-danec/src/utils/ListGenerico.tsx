import { ReactElement } from "react";
import Cargando from "./Cargando";

export default function ListGenerico(props: listGenericoProps) {
  if (!props.listado) {
    if (props.cargandoUI) {
      return props.cargandoUI;
    }
    return <Cargando />;
  } else if (props.listado.length === 0) {
    if (props.listadoVacioUI) {
      return props.listadoVacioUI;
    }
    return <>No existe elementos a mostrar</>;
  } else {
    return props.children;
  }
}

interface listGenericoProps {
  listado: any;
  children: ReactElement;
  cargandoUI?: ReactElement;
  listadoVacioUI?: ReactElement;
}
