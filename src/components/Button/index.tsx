import { Button } from 'reakit/Button';
import styled from 'styled-components';

import { ButtonProps } from './types';

const BaseButton = styled(Button)<ButtonProps>`
  padding: 0.75rem 1.5rem;
  border-radius: 0.75rem;
  font-weight: 600;
  align-self: ${props => props.alignSelf || 'normal'};
  font-size: ${props => `${props.fontSize || '0.9'}rem`};

  @media (max-width: 1250px) {
    font-size: 1.2rem;
  } ;
`;

const PrimaryButton = styled(BaseButton)`
  background-color: ${props => props.theme.colors.green.tertiary};
  color: white;

  &:hover {
    background-color: ${props => props.theme.colors.green.primary};
  }
`;

const SecondaryButton = styled(BaseButton)`
  border: 1px solid ${props => props.theme.colors.green.tertiary};
  color: ${props => props.theme.colors.green.tertiary};

  &:hover {
    border: 1px solid ${props => props.theme.colors.green.primary};
    color: ${props => props.theme.colors.green.primary};
  }
`;

const DangerButton = styled(BaseButton)`
  background-color: ${props => props.theme.colors.red.primary};
  color: white;

  &:hover {
    background-color: ${props => props.theme.colors.red.secondary};
  }
`;

const OutlinedDangerButton = styled(BaseButton)`
  border: 1px solid ${props => props.theme.colors.red.primary};
  color: ${props => props.theme.colors.red.primary};

  &:hover {
    border: 1px solid ${props => props.theme.colors.red.secondary};
    color: ${props => props.theme.colors.red.secondary};
  }
`;

export { PrimaryButton, SecondaryButton, DangerButton, OutlinedDangerButton };
