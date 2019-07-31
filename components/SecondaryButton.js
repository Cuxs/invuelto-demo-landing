import { Fragment } from "react";

export default ({disabled, onClick, children, className})=><button disabled={disabled} onClick={onClick} className={`btn button-secondary ${className}`}>{children}</button> 