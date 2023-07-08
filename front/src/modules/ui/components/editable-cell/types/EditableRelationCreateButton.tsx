import styled from '@emotion/styled';

export const EditableRelationCreateButton = styled.button`
  align-items: center;
  background: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  font-family: 'Inter';
  font-size: ${({ theme }) => theme.font.size.md};
  gap: ${({ theme }) => theme.spacing(2)};
  height: 31px;
  padding-bottom: ${({ theme }) => theme.spacing(1)};
  padding-left: ${({ theme }) => theme.spacing(1)};
  padding-top: ${({ theme }) => theme.spacing(1)};
  user-select: none;
  width: 100%;
`;
