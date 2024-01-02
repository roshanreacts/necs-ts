import React from "react";
import styled from "@emotion/styled";
import Text from "@/components/Text/Text";
import { css } from "@emotion/css";
import { useTheme, Theme } from "@emotion/react";
type InputProps = {
  label: string;
};

const labelStyles = (theme: Theme) =>
  css({
    color: theme.colors.input.label, // Use the theme object to access the primary color
    marginBottom: 10,
  });

const InputWrapper = styled.div`
  display: block;
`;

const InputField = styled.input`
  padding: 8px 16px;
  font-size: 16px;
  background-color: ${(props) => props.theme.colors?.input.background};
  color: white;
  border: ${(props) => props.theme.colors?.input.border};
  border-radius: 5px;
  cursor: pointer;
  placeholder: ${(props) => props.theme.colors?.input.placeholder};
  &:hover {
    background-color: #0056b3;
  }
`;

const Input = ({ label }: InputProps) => {
  const theme = useTheme();
  return (
    <InputWrapper>
      <Text className={labelStyles(theme)}>{label}</Text>
      <InputField type="text" placeholder="New" />
    </InputWrapper>
  );
};

export default Input;
