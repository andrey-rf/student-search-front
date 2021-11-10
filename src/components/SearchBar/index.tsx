import { VisuallyHidden } from 'reakit';

import { Input, Form } from './styles';
import { SearchProps } from './types';

function Search(props: SearchProps) {
  const { id, value, handleChange, label, placeholder } = props;

  return (
    <Form role="search" aria-label={label}>
      <VisuallyHidden>
        <label htmlFor={id}>{label}</label>
      </VisuallyHidden>
      <Input
        id={id}
        value={value}
        onChange={e => handleChange(e.target.value)}
        placeholder={placeholder}
        aria-label="Pesquisa por nome, CPF ou email"
      />
    </Form>
  );
}

export default Search;
