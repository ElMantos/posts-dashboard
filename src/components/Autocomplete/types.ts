import { ChangeEvent } from "react";

type OptionValue = string | number;

export interface Option {
  value: OptionValue;
  label: string;
}

export interface AutocompleteProps {
  options: Option[];
  placeholder?: string;
  value: Option | undefined;
  onChange: (value: Option | undefined) => void;
  inputValue: string;
  onInputValueChange: (value: ChangeEvent<HTMLInputElement>) => void;
}
