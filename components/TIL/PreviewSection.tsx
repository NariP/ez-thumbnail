import React from 'react';
import { CommonSectionLayout } from '../../commons/TwoSectionsLayout';
import { previewConstants } from '../../components/TIL/constants';
import styled from '@emotion/styled';

function PreviewSection({ previewRef, number, bgColor }) {
  return (
    <PreviewSectionContainer title={previewConstants.PREVIEW}>
      <PreviewCapturedArea ref={previewRef}>
        <PreviewText>TIL #{number}</PreviewText>
        <PreviewBox bgColor={bgColor} />
      </PreviewCapturedArea>
    </PreviewSectionContainer>
  );
}
const PreviewSectionContainer = styled(CommonSectionLayout)({
  position: 'relative',
});
const PreviewCapturedArea = styled.div({
  width: 245,
  height: 245,
});
const PreviewBox = styled.div<{ bgColor: string }>(({ bgColor }) => ({
  width: 'inherit',
  height: 'inherit',
  background: bgColor,
}));
const PreviewText = styled.span({
  position: 'absolute',
  color: 'white',
  fontWeight: 800,
  fontSize: '1.8em',
  margin: '15px 0 0 15px',
});
export default PreviewSection;
