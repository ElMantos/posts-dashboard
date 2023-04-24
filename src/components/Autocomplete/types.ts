import { ChangeEvent } from "react";

// May want to add more (e.g. number) in the future
type OptionValue = string;

export interface Option {
  value: OptionValue;
  label: string;
}

export interface AutocompleteProps {
  options: Option[];
  placeholder?: string;
  value: OptionValue;
  onChange: (value: OptionValue) => void;
  inputValue: string;
  onInputValueChange: (value: ChangeEvent<HTMLInputElement>) => void;
}
