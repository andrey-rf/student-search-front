import styled from 'styled-components';

import type { BoxProps, FlexBoxProps } from './types';

const Box = styled.div<BoxProps>`
  margin: ${props => `${props.marginTop || '0'}rem`} auto;
  width: 100%;
`;

const FlexBox = styled(Box)<FlexBoxProps>`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  align-items: ${props => props.align || 'flex-start'};
  justify-content: ${props => props.justify || 'flex-start'};
  gap: ${props => `${props.gap || '0'}rem`};
`;

export { Box, FlexBox };
