import React from 'react';
import styled from '@emotion/styled';
import { CommonSectionLayout } from '../../commons/TwoSectionsLayout';
import { InputGroupLayout } from '../../commons/InputGroupLayout';
import { specificConstants, inputGroups } from './constants';

function SpecificSection({ bgColor, setBgColor, preview, number, setNumber }) {
  const setBgChange = ({ target: { value } }) => {
    setBgColor(value);
  };
  const setNumberChange = ({ target: { value } }) => {
    setNumber(+value);
  };
  const inputGroupsFunctions = [setBgChange, setNumberChange];
  const inputGroupsValue = [bgColor, number];
  return (
    <SpecificSectionContainer title={specificConstants.SPECIFIC}>
      <FormStyle>
        {inputGroups.map((inputGroup, idx) => {
          return (
            <InputGroupLayout
              {...inputGroup}
              key={inputGroup.id}
              value={inputGroupsValue[idx]}
              setUpdate={inputGroupsFunctions[idx]}
              InputGroupStyle={InputGroupStyle}
              LabelStyle={LabelStyle}
            />
          );
        })}
        <ButtonStyle
          href={preview}
          download={`preview${number}.jpeg`}
          bgColor={bgColor}
        >
          Save as Image
        </ButtonStyle>
      </FormStyle>
    </SpecificSectionContainer>
  );
}
const SpecificSectionContainer = styled(CommonSectionLayout)({});
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
export default SpecificSection;
