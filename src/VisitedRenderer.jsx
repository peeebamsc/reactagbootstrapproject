import ToggleButton from "react-bootstrap/ToggleButton";

const VisitedRenderer = (props) => {
    return (
        <ToggleButton
            size="sm"
            id={`visited-${props.rowIndex}`}
            type="checkbox"
            variant={props.getValue() ? "outline-primary" : "outline-secondary"}
            checked={props.getValue()}
            value="1"
            onChange={(e) => {
                props.setValue(e.currentTarget.checked);
            }}
        >
            {props.getValue() ? "YES" : "NO"}
        </ToggleButton>
    );
};

export default VisitedRenderer;