import ContainerRight from "@/components/ContainerRight/ContainerRight";
import Modal from "@/components/Modal/Modal";
import { useState } from "react";

export default function ModelsContainer({ modelsObj }: { modelsObj?: object[] }) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [modelData, setModelData] = useState<object | any>(null);

    const handleOpen = (e: any) => {
        setModelData(e)
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <ContainerRight>

            <h2>Models</h2>
            {/* <button onClick={handleOpen}>User Modal</button> */}
            {modelsObj && modelsObj.map((item: any) => {
                return <div key={item.id} onClick={() => handleOpen(item)}>{item.name}</div>
            })}
            <Modal isOpen={isOpen} onClose={handleClose}>
                <div>Data</div>
                {JSON.stringify(modelData)}
                {/* {modelData.name} */}
            </Modal>
        </ContainerRight>
    )
}