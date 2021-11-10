import { Input as RawInput } from 'reakit/Input';
import styled from 'styled-components';

import { PrimaryButton } from '@components/Button';

const Form = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  width: 100%;
  height: 100%;
`;

const SaveButton = styled(PrimaryButton)`
  align-self: flex-end;
`;

const Input = styled(RawInput)`
  border-radius: 0.5rem;
  padding: 1rem 1.5rem;
  width: 100%;
  font-size: 1rem;
  border: 1px solid ${props => props.theme.colors.gray.primary};
`;

export { Form, SaveButton, Input };
