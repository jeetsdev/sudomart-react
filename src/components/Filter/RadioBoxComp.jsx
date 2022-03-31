import { Action } from "history";
import { useFilter } from "../../contexts/filter-context";

export const RadioBoxComp = ({ id, name, labelText }) => {
    const {filterDispatch } = useFilter();
    return <div>
        <input type="radio" name={name} id={id} onChange={()=>filterDispatch({type:`${name.toUpperCase()}`,payload:labelText[0]})} />
        <label htmlFor={id}> {labelText} </label>
    </div>;
};
