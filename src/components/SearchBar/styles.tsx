import { Input as RawInput } from 'reakit';
import styled from 'styled-components';

const Form = styled.form`
  width: 70%;
`;

const Input = styled(RawInput)`
  padding: 1rem 1.5rem;
  width: 100%;
  border: 1px solid ${props => props.theme.colors.gray.primary};
  border-radius: 1rem;
  color: ${props => props.theme.colors.black.secondary};
  font-size: 1.125rem;
  line-height: 1.5rem;
  letter-spacing: 0.02em;
`;

export { Form, Input };
