"use client"
import { ConfigOptions, ConfigOptionsType } from "@/api_mock"
import ContainerRight from "@/components/ContainerRight/ContainerRight"
import styled from "@emotion/styled"
import Link from "next/link"

export default function ConfigContainer() {
    return (
        <ContainerRight>
            {ConfigOptions && ConfigOptions.map((item: ConfigOptionsType) => {
                return (
                    <Link key={item.id} className="config-item" href={item.href} style={{ textDecoration: "none" }}>
                        <CustomLinkText>{item.name}</CustomLinkText>
                    </Link>
                )
            })}
        </ContainerRight >
    )
}

const CustomLinkText = styled.p(props => ({
    margin: "6px",
    color: '#020202',
    fontSize: "16px",
    textDecoration: "none",
    fontWeight: 400,
    fontFamily: "'Open Sans', sans-serif",
    paddingLeft: "20px",
    position: "relative",
    '&:hover': {
        color: '#cac6c6',
    },
    '&:before': {
        position: 'absolute',
        content: '"→"',
        left: 0,
        top: 0,
        width: '4px',
        height: '100%',
    }
}))