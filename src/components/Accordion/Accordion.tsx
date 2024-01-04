import React, { useState } from 'react'
import styled from '@emotion/styled'
import { ModelType } from '@/api_mock';

type AccordionType = {
    items?: ModelType[],
    isOpen: boolean,
}

export default function Accordion({ items, isOpen }: AccordionType) {
    const [openIndex, setOpenIndex] = useState<any>(null);

    // console.log(items);

    const handleAccordionClick = (index: number) => {
        setOpenIndex((prevIndex: number) => (prevIndex === index ? null : index));
    };
    return (
        <AccordionContainer>
            {items && items.map((item: any, index: number) => (
                <AccordionItem key={index}>
                    <AccordionHeader
                        onClick={() => handleAccordionClick(index)}>
                        {item.model_name}
                    </AccordionHeader>
                    <AccordionContent isOpen={openIndex === index}>
                        {item.fields.map((field: any, index: number) => (
                            <div style={{ display: "flex", flexDirection: "column", boxShadow: "2px 2px 2px #f4f4f4" }} key={index}>
                                {Object.keys(field).map((model: any) => {
                                    return <p key={model} style={{ fontSize: "16px" }}>{model} : {field[model]}</p>
                                })}
                            </div>
                        ))}
                    </AccordionContent>
                </AccordionItem>
            ))
            }
        </AccordionContainer >
    )
}

const AccordionContainer = styled.div`
  width: 300px;
`;

const AccordionItem = styled.div`
  border: 1px solid #ddd;
  margin-bottom: 8px;
`;

const AccordionHeader = styled.div`
  background-color: #f1f1f1;
  padding: 10px;
  cursor: pointer;
`;

const AccordionContent = styled.div<AccordionType>((props) => ({
    padding: '10px',
    display: props.isOpen ? 'block' : 'none',
}));