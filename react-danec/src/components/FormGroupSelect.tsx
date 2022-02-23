import axios, { AxiosResponse } from "axios";
import { ErrorMessage, Field } from "formik";
import React, { useEffect, useState } from "react";
import { articuloDTO } from "../containers/articulo/articulo.model";
import MostrarErrorCampo from "../utils/MostrarErrorCampo";
export default function FormGroupSelect(props: fromGroupSelectProps) {
  const [options, setOptions] = useState<articuloDTO[]>([]);
  const [valor, setValor] = useState<string>();

  useEffect(() => {
    axios.get(props.url).then((respuesta: AxiosResponse<articuloDTO[]>) => {
      console.log(respuesta.data);
      setOptions(respuesta.data);
    });
  }, []);

  const handleValue = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(event.currentTarget);
    setValor(event.currentTarget.value);
  };
  console.log("Dato: " + valor);

  /* const handleChange = (selectedOption:OnChangeValue<articuloDTO,false>) => {
    // Option selected: { value: "rojo", label: "rojo" }
    console.log("Option selected:", selectedOption?.id);
    setValor(selectedOption!.id);
  };*/

  return (
    <div className="form-group">
      {props.label ? <label htmlFor={props.campo}>{props.label}</label> : null}
      <Field
        className="form-select" name={props.campo} type={props.type}
        component="select" placeholder={props.placeholder}
      >
        <option value="0">Seleccionar Provincia</option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.descripcion}
          </option>
        ))}
      </Field>
      <ErrorMessage name={props.campo}>
        {(mensaje)=><MostrarErrorCampo mensaje={mensaje}/>}
        </ErrorMessage>
      {/*<select className="form-select" onChange={handleValue}>
        <option value="-1">Seleccionar Provincia</option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.descripcion}
          </option>
        ))}
      </select>
        */}
      {/*<Select
          className="basic-single"
          classNamePrefix="select"
          defaultValue={options[0]}
          isDisabled={false}
          isLoading={false}
          isClearable={false}
          isRtl={false}
          isSearchable={true}
          name={props.campo}
          options={options}
          getOptionLabel={x=>x.descripcion}
          getOptionValue={x=>x.id.toString()}
          onChange={handleChange}
      />*/}
    </div>
  );
}

interface fromGroupSelectProps {
  campo: string;
  label?: string;
  placeholder?: string;
  type?: "text" | "password" | "number";
  url: string;
}

FormGroupSelect.defaultProps = {
  type: "text",
};
