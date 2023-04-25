import { FC, useState } from "react";

import { Container, Autocomplete } from "@components";
import {useDebouncedValue} from '@hooks';

import usePostsQuery from './hooks/usePostsQuery';
import useUsersQuery from './hooks/useUsersQuery';

const Dashboard: FC = () => {
  const [userName, setUserName] = useState('');
  const [selectedOption, setSelectedOption] = useState("");
  // debounce prevents requests going out on user input to avoid throttling
  const debouncedUsername = useDebouncedValue(userName, 500);

  const {data, isLoading, isError} = usePostsQuery({title: selectedOption});
  const {data: users, isLoading: isUsersLoading, isError: isUsersError} = useUsersQuery({name: debouncedUsername});
  console.log({users});
  return (
    <Container>
      <Autocomplete
        inputValue={userName}
        onInputValueChange={e => setUserName(e.target.value)}
        value={selectedOption}
        options={[] as any[]}
        placeholder="Search posts by user name"
        onChange={(nextValue) => setSelectedOption(nextValue)}
      />
    </Container>
  );
};

export default Dashboard;
