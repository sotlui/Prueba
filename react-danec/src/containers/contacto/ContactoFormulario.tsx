import { Form, Formik, FormikHelpers } from "formik";
import { contactoCrearDTO } from "./contacto.model";
import * as Yup from 'yup';
import FormGroupText from "../../components/FormGrouptext";
import FormGroupButton from "../../components/FormGroupButton";
import { Link } from "react-router-dom";

export default function ContactoFormulario(props:contactoFormularioProps){
    //const {id}:any=useParams();
    return(
        <Formik initialValues={props.modelo} onSubmit={props.onSubmit}
            validationSchema={Yup.object({

            })}
        >
            {(formikProps)=>
                <Form>
                    <FormGroupText campo="codigo" label="Código" type="number" />
                    <FormGroupText campo="numero" label="Número" type="number" />
                    <FormGroupText campo="tipo" label="tipo" type="number" />

                    <FormGroupButton disabled={formikProps.isSubmitting} type="submit">Guardar</FormGroupButton>
                    <Link className="btn btn-secondary" to={`/clientes`}>Cancel</Link> 
                </Form>
            }

        </Formik>
    )
}

interface contactoFormularioProps{
    modelo:contactoCrearDTO;
    onSubmit(valores:contactoCrearDTO, acciones:FormikHelpers<contactoCrearDTO>):void;
    cliId?:number;
}