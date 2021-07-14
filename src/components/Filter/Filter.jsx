import React from 'react';
import { Input, Label } from './Filter.styled.js';

const Filter=({value, onChange})=> {    
    return (
        <Label>
            Find Your Contact =>
              <Input type="text" value={value} onChange={onChange} />
      </Label>
    )
}

export default Filter
