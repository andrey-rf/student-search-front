import { Button } from 'reakit/Button';
import styled from 'styled-components';

const BaseButton = styled(Button)`
  padding: 0.75rem 1.5rem;
  border-radius: 0.75rem;
  font-weight: 600;
`;

const PrimaryButton = styled(BaseButton)`
  background-color: ${props => props.theme.colors.green.primary};

  &:hover {
    background-color: ${props => props.theme.colors.green.secondary};
  }
`;

const SecondaryButton = styled(BaseButton)`
  border: 1px solid ${props => props.theme.colors.green.primary};
  color: ${props => props.theme.colors.green.primary};
`;

export { PrimaryButton, SecondaryButton };
