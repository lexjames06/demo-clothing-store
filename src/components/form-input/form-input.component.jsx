import React from 'react';

import { GroupContainer, FormInputBox, FormInputLabel } from './form-input.styles';

const FormInput = ({handleChange, label, ...otherProps}) => (
    <GroupContainer>
        <FormInputBox onChange={handleChange} {...otherProps} />
        {
            label ?
            (<FormInputLabel {...otherProps}>
                {label}
            </FormInputLabel>)
            : null
        }
    </GroupContainer>
);

export default FormInput;