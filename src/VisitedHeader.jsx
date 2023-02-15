import { useState, useEffect } from "react";
import ToggleButton from "react-bootstrap/ToggleButton";

const VisitedHeader = (props) => {
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        props.setFilterEnabled(checked);
    }, [checked]);

    return (
        <ToggleButton
            id="filter-visited"
            type="checkbox"
            variant={checked ? "outline-primary" : "outline-secondary"}
            checked={checked}
            value="1"
            onChange={(e) => {
                setChecked(e.currentTarget.checked);
            }}
        >
            Visited
        </ToggleButton>
    );
};

export default VisitedHeader;