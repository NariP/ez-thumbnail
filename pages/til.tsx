import React, { useState, useRef, useCallback, useEffect } from 'react';
import Head from 'next/head';
import html2canvas from 'html2canvas';
import styled from '@emotion/styled';

function Til() {
  const previewRef = useRef<HTMLDivElement>(null);
  const [number, setNumber] = useState<number>(1);
  const [bgColor, setBgColor] = useState<string>('#037e8f');
  const [preview, setPreview] = useState<string>('');
  const copyPreview = useCallback(async () => {
    let url = '';
    await html2canvas(previewRef.current).then(canvas => {
      url = canvas
        .toDataURL('image/jpg')
        .replace('image/png', 'image/octet-stream');
      setPreview(url);
    });
  }, [number, bgColor]);
  useEffect(() => {
    copyPreview();
  }, [copyPreview]);
  return (
    <>
      <Head>
        <title>티스토리 TIL 썸네일</title>
      </Head>
      <TitleStyle>티스토리 TIL 썸네일</TitleStyle>
      <ContentsContainer>
        <PreviewSection>
          <h3>preview</h3>
          <div ref={previewRef} style={{ width: 245 }}>
            <PreviewText>TIL #{number}</PreviewText>
            <PreviewBox bgColor={bgColor} />
          </div>
        </PreviewSection>
        <SpecificSection>
          <h3>specific</h3>
          <FormStyle>
            <InputGroupStyle>
              <LabelStyle htmlFor="background">background</LabelStyle>
              <input
                type="color"
                id="background"
                name="background"
                value={bgColor}
                onChange={({ target: { value } }) => setBgColor(value)}
              />
            </InputGroupStyle>
            <InputGroupStyle>
              <LabelStyle htmlFor="number">number</LabelStyle>
              <input
                type="number"
                id="number"
                name="number"
                value={number}
                min="0"
                onChange={({ target: { value } }) =>
                  setNumber(parseInt(value, 10))
                }
              />
            </InputGroupStyle>
            <ButtonStyle
              href={preview}
              download="preview.jpeg"
              bgColor={bgColor}
            >
              Save as Image
            </ButtonStyle>
          </FormStyle>
        </SpecificSection>
      </ContentsContainer>
    </>
  );
}
const TitleStyle = styled.h2({
  fontWeight: 800,
});
const ContentsContainer = styled.div({
  display: 'flex',
});
const CommonSectionStyle = styled.section({
  minWidth: '50%',
  padding: 20,
  h3: { marginBottom: '0.8em' },
});
const PreviewSection = styled(CommonSectionStyle)({
  position: 'relative',
});
const PreviewBox = styled.div<{ bgColor: string }>(({ bgColor }) => ({
  width: 245,
  height: 245,
  background: bgColor,
}));
const PreviewText = styled.span({
  position: 'absolute',
  color: 'white',
  fontWeight: 800,
  fontSize: '1.8em',
  margin: '15px 0 0 15px',
});
const SpecificSection = styled(CommonSectionStyle)({ width: '50%' });
const FormStyle = styled.form({
  display: 'flex',
  flexDirection: 'column',
});
const InputGroupStyle = styled.div({
  '& + &': { marginTop: '0.8em' },
});
const LabelStyle = styled.label({ marginRight: '0.6em' });
const ButtonStyle = styled.a<{ bgColor: string }>(({ bgColor }) => ({
  marginTop: '0.8em',
  background: bgColor,
  borderRadius: 10,
  padding: 10,
  color: 'white',
  fontWeight: 'bold',
  fontSize: '1em',
  textAlign: 'center',
}));

export default Til;
