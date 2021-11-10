import styled from 'styled-components';

const TableContainer = styled.table`
  margin: 2rem auto;
  border-collapse: collapse;
  overflow: hidden;
  font-size: 1.25rem;
  border-radius: 1rem;
  width: 100%;
`;

const TableHeader = styled.thead`
  background: ${props => props.theme.colors.green.tertiary};
  color: white;
`;

const HeaderCell = styled.th`
  padding: 1.5rem 2.5rem;
  border-bottom: 2px solid white;

  @media (max-width: 1250px) {
    padding: 1rem 1.5rem;
  }
`;

const TableBody = styled.tbody``;

const TableCell = styled.td`
  padding: 1.5rem 2rem;
  text-align: center;

  @media (max-width: 1250px) {
    padding: 1rem 1.5rem;
  }
`;

const TableRow = styled.tr`
  &:not(:first-child) {
    border-top: 1px solid ${props => props.theme.colors.gray.primary};
  }
`;

export {
  TableContainer,
  TableHeader,
  HeaderCell,
  TableBody,
  TableCell,
  TableRow,
};
