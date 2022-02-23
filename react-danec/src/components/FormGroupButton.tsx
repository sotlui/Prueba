import { CSSProperties } from "react";

export default function FormGroupButton(props:formGroupButtonProps){
    return(
        <button 
            type={props.type}
            className={props.className}
            onClick={props.onClick}
            style={props.style}
            >
                {props.children}
        </button>

    )
}

interface formGroupButtonProps{
    children: React.ReactNode;
    onClick?():void;
    type:'button'|'submit';
    disabled:boolean;
    className:string;
    style:CSSProperties;
}

FormGroupButton.defaultProps = {
    type: "button",
    disabled: false,
    className:'btn btn-primary',
    style:null
  };
  