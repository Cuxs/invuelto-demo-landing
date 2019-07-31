import { Fragment } from "react";

export default ({disabled, onClick, bold, noBold, className})=><button disabled={disabled} onClick={onClick} className={`btn button-primary ${className}`}><b>{bold}</b> {noBold}</button> 