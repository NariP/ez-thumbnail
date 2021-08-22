import React, { useState, useRef, useCallback, useEffect } from 'react';
import Head from 'next/head';
import html2canvas from 'html2canvas';
import styled from '@emotion/styled';
import {
  TwoSectionsLayout,
  CommonSectionLayout,
} from '../commons/TwoSectionsLayout';
import { PreviewSection, SpecificSection } from '../components/TIL';

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
      <TwoSectionsLayout>
        <PreviewSection
          previewRef={previewRef}
          number={number}
          bgColor={bgColor}
        />
        <SpecificSection
          bgColor={bgColor}
          setBgColor={setBgColor}
          setNumber={setNumber}
          preview={preview}
          number={number}
        />
      </TwoSectionsLayout>
    </>
  );
}
const TitleStyle = styled.h2({
  fontWeight: 800,
});

export default Til;
