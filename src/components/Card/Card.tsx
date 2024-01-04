"use client"
import styled from "@emotion/styled";
import React from "react";

export default function Card({ children }: { children: React.ReactNode }) {
    return (
        <CardContainer>
            {children}
        </CardContainer>
    )
}

const CardContainer = styled.div(props => ({
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    borderRadius: '5px',
    padding: '20px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    maxWidth: "300px"
}))