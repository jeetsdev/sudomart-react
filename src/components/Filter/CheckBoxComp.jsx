import { useFilter } from "../../contexts/filter-context";

export const CheckBoxComp = ({ id, labelText }) => {
    const {filterDispatch } = useFilter();
    return <div>
        <input type="checkbox" name="" id={id} onChange={()=>filterDispatch({type:`CATEGORIES`,payload:`${labelText.toUpperCase()}`})} />
        <label htmlFor={id}> {labelText} </label>
    </div>;
};
