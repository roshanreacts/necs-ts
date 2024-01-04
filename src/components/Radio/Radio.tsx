// Radio.tsx
import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/css";
import { useTheme, Theme } from "@emotion/react";

type RadioProps = {
  label: string;
  value: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const RadioWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const RadioInput = styled.input`
  margin-right: 8px;
`;

const RadioLabel = styled.label<{ styles: string }>`
  color: ${(props) => props.theme.colors.input.label};
  ${(props) => props.styles}
`;

const radioStyles = (theme: Theme) =>
  css({
    color: theme.colors.input.label,
  });

const Radio: React.FC<RadioProps> = ({ label, value, checked, onChange }) => {
  const theme = useTheme();
  const styles = radioStyles(theme);

  return (
    <RadioWrapper>
      <RadioInput
        type="radio"
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <RadioLabel styles={styles}>{label}</RadioLabel>
    </RadioWrapper>
  );
};

export default Radio;
