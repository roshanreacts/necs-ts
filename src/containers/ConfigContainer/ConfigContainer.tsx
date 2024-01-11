"use client";
import { ConfigOptions, ConfigOptionsType } from "@/api_mock";
import ContainerRight from "@/components/ContainerRight/ContainerRight";
import styled from "@emotion/styled";
import Link from "next/link";
import Text from "@/components/Text/Text";
import React from "react";
import Card from "@/components/Card/Card";
import { css } from "@emotion/css";
export default function ConfigContainer() {
  return (
    <ContainerRight>
      <Text
        variant={"h2"}
        className={css({
            // padding: "0px 10px"
        })}
      >
        Items
      </Text>
      <div style={{padding: "30px"}}>
      {ConfigOptions &&
        ConfigOptions.map((item: ConfigOptionsType) => {
          return (
            <Link
              key={item.id}
              className="config-item"
              href={item.href}
              style={{ textDecoration: "none", alignItems: "center"}}
            >
              <Card className={css({ margin : "10px" })}>
                <CustomLinkText>
                  {<item.icon />} {item.name}
                </CustomLinkText>
              </Card>
            </Link>
          );
        })}
        </div>
    </ContainerRight>
  );
}

const CustomLinkText = styled.p((props) => ({
  margin: "6px",
  color: "#020202",
  fontSize: "16px",
  textDecoration: "none",
  alignItems: "center",
  fontWeight: 400,
  fontFamily: "'Open Sans', sans-serif",
  paddingLeft: "20px",
  position: "relative",
  "&:hover": {
    color: "#cac6c6",
  },
  // '&:before': {
  //     position: 'absolute',
  //     content: '"→"',
  //     left: 0,
  //     top: 0,
  //     width: '4px',
  //     height: '100%',
  // }
}));
const sidebarTitle = css`
  padding: 20px;
  background-color: yellow;
`;
