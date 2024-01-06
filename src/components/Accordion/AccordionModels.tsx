import React, { useState } from 'react'
import styled from '@emotion/styled'
import { FieldType, ModelType, ModelsOptionsType, ProfileModel, UserModel } from '@/api_mock';
import DyFormRender from '@/containers/DyFormRender/DyFormRender';

type AccordionType = {
    items?: ModelsOptionsType[],
    isOpen: boolean,
}

export default function AccordionModels({ items, isOpen }: AccordionType) {
    const [openIndex, setOpenIndex] = useState<number | any>(null);
    const [data, setData] = useState<ModelType | any>(null);

    const handleAccordionClick = (index: number, fieldSlug: string) => {
        setOpenIndex((prevIndex: number) => (prevIndex === index ? null : index));

        // call the api to get model with slug as value
        if (fieldSlug === "UserModel") {
            setData(UserModel)
        } else {
            setData(ProfileModel)
        }
    };

    // console.log([data.fields]);


    return (
        <AccordionContainer>
            {items && items.map((item: any, index: number) => (
                <AccordionItem key={index}>
                    <AccordionHeader
                        onClick={() => handleAccordionClick(index, item.slug)}>
                        {item.name}
                    </AccordionHeader>
                    <AccordionContent isOpen={openIndex === index}>
                        {data && [data.fields].map((field: any, index: number) => {
                            return (
                                <div style={{ display: "flex", flexDirection: "column", boxShadow: "2px 2px 2px #f4f4f4" }} key={index}>
                                    <div>
                                        <DyFormRender fields={field} />
                                    </div>
                                </div>
                            )
                        })}
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