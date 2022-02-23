import { Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import FormGroupButton from "../../components/FormGroupButton";
import FormGroupFecha from "../../components/FormGroupFecha";
import FormGroupSelect from "../../components/FormGroupSelect";
import FormGroupText from "../../components/FormGrouptext";
import { urlArticulos } from "../../utils/endpoints";
import { clienteCrearDTO } from "./cliente.model";

export default function ClienteFomulario(props: clienteFormularioProps) {
  //Seleccionados
 /* const [provinciaSeleccionada, setProvinciaSeleccionada] =
    useState<articuloDTO>(props.provinciaSelecionada);*/
  return (
    <Formik
      initialValues={props.modelo}
      onSubmit={props.onSubmit}
      validationSchema={Yup.object({
        provincia: Yup.number().integer().default(0).required('HHH'),
        //cedula: Yup.string().required("Este campo de obligatorio"),
        //apellido: Yup.string().required("Este campo de obligatorio"),
        //nombre: Yup.string().required("Este campo de obligatorio"),
        //direccion1: Yup.string().required("Este campo de obligatorio"),
        //fecha:Yup.date().nullable().required('Este campo de obligatorio')
      })}
    >
      {(formikProps) => (
        <Form>
          <FormGroupSelect campo="provincia" label="Provincia" placeholder="seleccionar ..." url={`${urlArticulos}/2`}
          />
          <FormGroupText campo="cedula" label="Cédula"
            placeholder="Cédula del cliente/proveedor"
          />
          <FormGroupText campo="apellido" label="Apellido"
            placeholder="Apellido del cliente/proveedor"
          />
          <FormGroupText campo="nombre" label="Nombre"
            placeholder="Nombre del cliente/proveedor"
          />
          <FormGroupText campo="direccion1" label="Dirección principal"
            placeholder="Dirección del cliente/proveedor"
          />
          <FormGroupText campo="direccion2" label="Dirección secundaria"
            placeholder="Dirección del cliente/proveedor"
          />

          <FormGroupText campo="canton" label="Cantón"
            placeholder="Cantón del cliente/proveedor"
          />
          <FormGroupText campo="estado" label="Estado"            
          placeholder="Estado del cliente/proveedor"
          />
          <FormGroupFecha campo="fecha" label="Fecha" />

          {/*<div className="form-group">
            <TypeAheadProvincia
              onAdd={(provincia) => {
                setProvinciaSeleccionada(provincia);
              }}
              onRemove={(provincia) => {
                setProvinciaSeleccionada(provincia);
              }}
              provincia={provinciaSeleccionada}
              //provincia={provinciaSeleccionada}
            />
          </div>
          */}

          <FormGroupButton disabled={formikProps.isSubmitting} type="submit">
            Guardar
          </FormGroupButton>
          <Link className="btn btn-secondary" to="/clientes">
            Cancelar
          </Link>
        </Form>
      )}
    </Formik>
  );
}

interface clienteFormularioProps {
  modelo: clienteCrearDTO;
  onSubmit(
    valores: clienteCrearDTO,
    acciones: FormikHelpers<clienteCrearDTO>
  ): void;
  //provinciaSelecionada: articuloDTO;
}
