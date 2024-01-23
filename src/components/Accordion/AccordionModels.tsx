import React, { useState } from 'react'
import styled from '@emotion/styled'
import { FieldType, ModelType, ModelsOptionsType, ProfileModel, UserModel, addModel } from '@/api_mock';
import DyFormRender from '@/containers/DyFormRender/DyFormRender';
import { HttpResponse, http } from 'msw';
import Modal from '../Modal/Modal';
import TableComponent from '../Table/TableComponent';


type AccordionType = {
    items?: ModelsOptionsType[],
    isOpen: boolean,
    setSelectSlugOption: any
}

export default function AccordionModels({ items, isOpen, setSelectSlugOption }: AccordionType) {
    const [openIndex, setOpenIndex] = useState<number | any>(null);
    const [data, setData] = useState<ModelType | any>(null);

    const handleAccordionClick = (index: number, fieldSlug: string) => {
        setOpenIndex((prevIndex: number) => (prevIndex === index ? null : index));

        (async () => {
            const users = http.get('https://api.example.com/user', (): any => {
                if (fieldSlug === "UserModel") {
                    return HttpResponse.json(UserModel)
                } else if(fieldSlug==="ProfileModel") {
                    return HttpResponse.json(ProfileModel)
                }
                else{
                    return HttpResponse.json(addModel)
                }
            })

            // @ts-ignore
            setData(await users.resolver()?.json())
        })();
    };

    return (
        <AccordionContainer>
            {items && items.map((item: any, index: number) => (
                <AccordionItem key={index}>
                    <AccordionHeader
                        onClick={() => { handleAccordionClick(index, item.slug), setSelectSlugOption(item.slug) }}>
                        {item.name}
                    </AccordionHeader>
                    <AccordionContent isOpen={openIndex === index} setSelectSlugOption>
                        {data && [data.fields].map((field: any, index: number) => {
                            return (
                                <div style={{ display: "flex", flexDirection: "column", boxShadow: "2px 2px 2px #f4f4f4" }} key={index}>
                                    <div>
                                        <DyFormRender fields={field} />
                                        {/* <TableComponent selectSlugOption={[field]} /> */}
                                    </div>
                                </div>
                            )
                        })}
                        {/* <TableComponent selectSlugOption={setSelectSlugOption}/> */}
                        
                    </AccordionContent>
                </AccordionItem>
            ))
            }
             
            
        </AccordionContainer >

    )
}

const AccordionContainer = styled.div`
  width: 100%;
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