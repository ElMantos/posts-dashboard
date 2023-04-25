import { FC } from "react";
import styled from "styled-components";

import { AutocompleteProps } from "./types";

const Input = styled.input`
  width: 100%;
  border: 0;
  border-bottom: 2px solid teal;
  outline: 0;
  font-size: 1.3rem;
  color: $white;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;
`;

const List = styled.ul`
    max-width: 500px,
    background-color: gray,
`

const Autocomplete: FC<AutocompleteProps> = ({
  options,
  value,
  onChange,
  placeholder,
  inputValue,
  onInputValueChange
}) => {

  return (
    <div>
      <Input value={inputValue} onChange={onInputValueChange} placeholder={placeholder} />
    </div>
  );
};

export default Autocomplete;
