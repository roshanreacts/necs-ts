import DyForm from "@/containers/DyForm/DyForm";
import DyForm2 from "@/containers/DyForm/DyForm2";



export default function page() {
    const formConfig = 
    [
        { name: 'Firstname', type: 'text', options: { required: true, maxLength: 80 } },
        { name: 'Title', type: 'select', options: { required: true },
          values: ["Option 1", "Option 2"],
        },
        { name: 'Developer', type: 'radio', options: { required: true },
          values: ["Option 1", "Option 2"],
        },
        { name: 'Skills', type: 'multiSelect', options: { required: true },
          values: ["JavaScript", "React", "Node.js"],
        },
        { name: 'AgreetoTerms', type: 'checkBox', options: { required: true },
          values: ["I agree"],
        },
      ];
    
  return (
    <div>
        {/* <DyForm formConfig={formConfig} /> */}
        <DyForm2 fields={formConfig}/>
    </div>
  );
}
