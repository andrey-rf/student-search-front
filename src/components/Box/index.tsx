import styled from 'styled-components';

import type { FlexBoxProps } from './types';

const Box = styled.div`
  margin: 0 auto;
  width: 100%;
`;

const FlexBox = styled(Box)<FlexBoxProps>`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  align-items: ${props => props.align || 'flex-start'};
  justify-content: ${props => props.justify || 'flex-start'};
  gap: ${props => `${props.gap}rem` || '0'};
`;

export { Box, FlexBox };
