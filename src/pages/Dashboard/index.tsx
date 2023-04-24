import { FC, useState } from "react";

import { Container, Autocomplete } from "@components";

import usePosts from './hooks/usePosts';

const Dashboard: FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [selectedOption, setSelectedOption] = useState("");

  const {data, isLoading, isError} = usePosts({title: selectedOption});
  console.log({data, isLoading, isError});
  console.log("Dashboard");
  return (
    <Container>
      <Autocomplete
        inputValue={inputValue}
        onInputValueChange={e => setInputValue(e.target.value)}
        value={selectedOption}
        options={[] as any[]}
        placeholder="Search posts"
        onChange={(nextValue) => setSelectedOption(nextValue)}
      />
    </Container>
  );
};

export default Dashboard;
