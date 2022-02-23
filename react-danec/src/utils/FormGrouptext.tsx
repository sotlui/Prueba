import { ErrorMessage, Field } from "formik";
import MostrarErrorCampo from '../utils/MostrarErrorCampo';

export default function FormGroupText(props: formGroupTextProps) {
  return (
    <div className="form-group">
      {props.label ? <label htmlFor={props.campo}>{props.label}</label> : null}
      <Field className="form-control" name={props.campo}
        type={props.type} placeholder={props.placeholder}/>
      <ErrorMessage name={props.campo}>
        {(mensaje)=><MostrarErrorCampo mensaje={mensaje}/>}
        </ErrorMessage>  
    </div>
  );
}

interface formGroupTextProps {
  campo: string;
  label?: string;
  placeholder?: string;
  type?: "text" | "password" | "number";
}

FormGroupText.defaultProps = {
  type: "text",
};
