import { Fragment } from "react";

export default ({disabled, onClick, bold, noBold})=><button disabled={disabled} onClick={onClick} className="btn button-primary"><b>{bold}</b> {noBold}</button> 