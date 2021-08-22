import React from 'react';
import styled from '@emotion/styled';

function CommonSectionLayout({ children, title }) {
  return (
    <CommonSectionStyle>
      <h3>{title}</h3>
      {children}
    </CommonSectionStyle>
  );
}
const CommonSectionStyle = styled.section({
  minWidth: '50%',
  padding: 20,
  h3: { marginBottom: '0.8em' },
});
export default CommonSectionLayout;
