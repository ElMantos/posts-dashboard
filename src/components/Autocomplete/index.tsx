import { FC, useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
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

const Container = styled.div`
  position: relative;
`;

const List = styled.ul`
  width: 100%;
  position: absolute;
  background-color: gray;
`;

const ListItem = styled.li`
  width: 100%;
  text-align: center;
  cursor: pointer;
  padding-top: 16px;
  padding-bottom: 16px;
  font-size: 16px;
  &:hover {
    background-color: teal;
  }
`;

const Autocomplete: FC<AutocompleteProps> = ({
  options,
  value,
  onChange,
  placeholder,
  inputValue,
  onInputValueChange,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <OutsideClickHandler onOutsideClick={() => {
      setIsFocused(false);
    }}>
      <Container>
        <Input
          onFocus={() => setIsFocused(true)}
          value={value?.label || inputValue}
          onChange={(e) => {
            onInputValueChange(e);

            // If user has selected value and start typing again we want to remove previously selected item
            if (value?.value) {
              onChange(undefined);
            }
          }}
          placeholder={placeholder}
        />
        {isFocused && (
          <List>
            {/* Its not a good practice to add click events to non-interactive elements, would be best to refactor ;) */}
            {options.map(({ value, label }, index) => (
              <ListItem
                key={index}
                onClick={() => {
                  onChange({value, label});
                  setIsFocused(false);
                }}
              >
                {label}
              </ListItem>
            ))}
          </List>
        )}
      </Container>
    </OutsideClickHandler>
  );
};

export default Autocomplete;
