import { Fragment } from "react";

export default ({disabled, onClick, children})=><button disabled={disabled} onClick={onClick} className="btn button-special">{children}</button> 