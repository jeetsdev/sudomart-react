import { useFilter } from "../../contexts/filter-context";
import { ACTION_TYPE } from "../../utils";


export const RadioBoxComp = ({ id, name, labelText }) => {
    const { filterState, filterDispatch } = useFilter();
    const { rating } = filterState;
    const { RATING } = ACTION_TYPE;
    return <div>
        <input type="radio" name={name} checked={rating === labelText[0]} id={id} onChange={() => filterDispatch({ type: RATING, payload: labelText[0] })} />
        <label htmlFor={id}> {labelText} </label>
    </div>;
};
