import { Input as RawInput } from 'reakit/Input';
import styled from 'styled-components';

import { Box } from '@components/Box';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const ButtonBox = styled(Box)`
  align-self: flex-end;
`;

const Input = styled(RawInput)`
  border-radius: 0.5rem;
  padding: 0.5rem 1.5rem;
  border: 1px solid ${props => props.theme.colors.gray.primary};
`;

export { Form, ButtonBox, Input };
