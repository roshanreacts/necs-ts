import React, { useState } from 'react'
import styled from '@emotion/styled'
import { FieldType, ModelType, ModelsOptionsType, ProfileModel, UserModel } from '@/api_mock';
import DyFormRender from '@/containers/DyFormRender/DyFormRender';
import { HttpResponse, http } from 'msw';
import Modal from '../Modal/Modal';


type AccordionType = {
    items?: ModelsOptionsType[],
    isOpen: boolean,
}

export default function AccordionModels({ items, isOpen }: AccordionType) {
    const [openIndex, setOpenIndex] = useState<number | any>(null);
    const [data, setData] = useState<ModelType | any>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);


    const handleAccordionClick = (index: number, fieldSlug: string) => {
        setOpenIndex((prevIndex: number) => (prevIndex === index ? null : index));

        (async () => {
            const users = http.get('https://api.example.com/user', (): any => {
                if (fieldSlug === "UserModel") {
                    return HttpResponse.json(UserModel)
                } else {
                    return HttpResponse.json(ProfileModel)
                }
            })

            // @ts-ignore
            setData(await users.resolver()?.json())
        })();
    };
    const openModal = () => {
        setIsModalOpen(true);
    };

    // Function to close the modal
    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleModalClick = () => {
        alert("clicked")

    }
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
                                        <button onClick={openModal}>Open Modal</button>
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