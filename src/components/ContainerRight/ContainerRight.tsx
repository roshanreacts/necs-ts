"use client"
import styled from "@emotion/styled";
import React from "react";

export default function ContainerRight({ children }: { children: React.ReactNode }) {
    return (
        <Container>
            {children}
        </Container >
    )
}

const Container = styled.div(props => ({
    position: "fixed",
    left: 0,
    top: 0,
    height: "100vh",
    width: "300px",
    background: "#f4f4f4",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "6px"
}))