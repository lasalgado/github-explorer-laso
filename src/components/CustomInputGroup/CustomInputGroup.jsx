import React, { forwardRef } from 'react';
import { 
    InputGroup,
    Input,
    Button
} from 'reactstrap';

const CustomInputGroup = forwardRef((props, ref) => {
    return (
        <InputGroup>
            <Input
                innerRef={ref}
                placeholder="Search Topic..."
                onKeyPress={props.OnInputKeyUp}
            />
            <Button
                type="button"
                color="secondary"
                onClick={props.OnHandleClick}
            >
                Search
            </Button>
        </InputGroup>
    );
});

export default CustomInputGroup;