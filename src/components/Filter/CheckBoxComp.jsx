import { useFilter } from "../../contexts/filter-context";
import { ACTION_TYPE } from "../../utils";

export const CheckBoxComp = ({ id, labelText }) => {
    const { filterState, filterDispatch } = useFilter();
    const { category } = filterState;
    const { CATEGORIES } = ACTION_TYPE;
    return <div>
        <input type="checkbox" name="" id={id} checked={category.includes(`${labelText.toUpperCase()}`)} onChange={() => filterDispatch({ type: CATEGORIES, payload: `${labelText.toUpperCase()}` })} />
        <label htmlFor={id}> {labelText} </label>
    </div>;
};
