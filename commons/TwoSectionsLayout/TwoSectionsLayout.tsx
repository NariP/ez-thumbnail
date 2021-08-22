import React from 'react';
import styled from '@emotion/styled';

function TwoSectionsLayout({ children }) {
  return <ContentsContainer>{children}</ContentsContainer>;
}
const ContentsContainer = styled.div({
  display: 'flex',
});
export default TwoSectionsLayout;
