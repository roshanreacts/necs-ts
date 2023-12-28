import React from "react";
import styled from "@emotion/styled";
import { Theme } from "@emotion/react";

export type TextProps = {
  children: React.ReactNode;
  color?: string;
  variant?: keyof Theme["typography"];
  fontSize?: string;
};

const Text = styled.p<TextProps>`
  ${({ theme, variant }) =>
    theme.typography[variant as keyof Theme["typography"]]};
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize};
`;

export default Text;
