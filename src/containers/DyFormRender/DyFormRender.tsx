"use client";
import { createRecord, listModel, updateRecord } from "@/app/actions";
import Modal from "@/components/Modal/Modal";
import { css } from "@emotion/css";
import { startCase } from "lodash";
import React from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import lz from 'lzutf8';
export default function DyFormRender({ fields }: { fields: any }) {
  const [dynamicFields, setDynamicFields] = React.useState<any[]>([]);
  const [modalStates, setModalStates] = React.useState({});

  const openModal = (fieldSlug: any) => {
    setModalStates((prevStates) => ({ ...prevStates, [fieldSlug]: true }));
  };

  const closeModal = (fieldSlug: any) => {
    setModalStates((prevStates) => ({ ...prevStates, [fieldSlug]: false }));
  };

  React.useEffect(() => {
    setDynamicFields(
      Object.entries(fields).map(([fieldSlug, fieldValue]: [string, any]) => ({
        [fieldSlug]: fieldValue,
      }))
    );
  }, [fields]);

  const addNewField = () => {
    const newFieldSlug = `newField${dynamicFields.length + 1}`;
    const newFieldValue = {
      label: "",
      type: "text",
      isEditable: false,
      bcrypt: false,
      required: false,
      fieldOptions: [],
      many: true,
      unique: true,
      default: false,
    };
    setDynamicFields([...dynamicFields, { [newFieldSlug]: newFieldValue }]);
    openModal(newFieldSlug);
  };

  return (
    <>
      {dynamicFields.length &&
        dynamicFields.map((dynamicField) => {
          const [fieldSlug, fieldValue] = Object.entries(dynamicField)[0];
          // @ts-ignore
          const isModalOpen: any = modalStates[fieldSlug] || false;

          return (
            <div key={fieldSlug} style={{ padding: "10px" }}>
              {/* <DynamicForm fieldSlug={fieldSlug} fieldValue={fieldValue} /> */}

              {/* @ts-ignore */}
              {`${fieldValue?.label}`}
              <button onClick={() => openModal(fieldSlug)}>Edit</button>
              <Modal
                isOpen={isModalOpen}
                onClose={() => closeModal(fieldSlug)}
                fieldSlug={fieldSlug}
                fieldValue={fieldValue}
              />
            </div>
          );
        })}
      <button onClick={addNewField}>Add New Field</button>
    </>
  );
}

interface DynamicFormProps {
  fieldSlug: string;
  fieldValue: any;
  apiName?: string;
  currentModel?: string;
  currentModelName?: string;
}

export function DynamicForm({
  fieldSlug,
  fieldValue,
  apiName,
  currentModel,
  currentModelName,
}: DynamicFormProps) {
  const {
    register,
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<any>();

  const formStyles = css`
    height: 300px;
    overflow: scroll;
  `;

  const [dynamicFieldOptions, setDynamicFieldOptions] = React.useState<any[]>(
    []
  );
  const [allmodels, setAllModels] = React.useState<any[]>([]);
  const selectedType = watch("type") || fieldValue.type;

  const setFieldValue = (field: string, value: any) => {
    setValue(field, value);
  };

  const setBooleanValue = (field: string, value: boolean) => {
    console.log("field", field);
    console.log("value", value);

    setValue(field, value);
  };

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const query = `query ListModels {
                listModels {
                  docs {
                    name
                    id
                  }
                }
              }`;
        const variables = {};
        const models = await listModel(query, variables);
        console.log("🚀 ~ fetchData ~ models:", models);
        setAllModels(models.data.listModels.docs);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const onSubmit: SubmitHandler<any> = async (data) => {
    console.log("🚀 ~ constonSubmit:SubmitHandler<any>= ~ data:", data);

    const getModelNameQuery = `query Docs($where: whereModelInput) {
      listModels(where: $where) {
        docs {
          name
          id
        }
      }
    }`;
    const getModelNameVar = { where: { id: { is: currentModel } } };

    const modelNamedata = await listModel(getModelNameQuery, getModelNameVar);

    const modelName = modelNamedata.data
      ? modelNamedata?.data?.listModels?.docs[0]?.name
      : "";

    console.log("apiname", apiName);

    if (apiName == "newModel") {
      const createModelQuery = `mutation CreateModel($input: ModelInput!) {
            createModel(input: $input) {
              id
            }
          }`;

      const createModelVariables = {
        input: data,
      };
      await createRecord({
        mutation: createModelQuery,
        variables: createModelVariables,
      });
      window.location.reload();
    }
    if (apiName == "newField") {
      const createFieldMutation = `
        mutation CreateModelField($input: ModelFieldInput!) {
            createModelField(input: $input) {
              id
            }
          }
        `;
      data.model = currentModel;
      data.name = modelName;

      const createFieldVariables = { input: data };
      await createRecord({
        mutation: createFieldMutation,
        variables: createFieldVariables,
      });

      window.location.reload();
    }
    if (apiName == "editField") {
      data.id = fieldSlug?.data.id;
      const updatefieldMutation = `mutation UpdateModelField($input: updateModelFieldInput!) {
        updateModelField(input: $input) {
          id
        }
      }`;
      const propertiesToRemove = ["Action", "data", "option"];

      const filteredData = Object.fromEntries(
        Object.entries(data).filter(
          ([key]) => !propertiesToRemove.includes(key)
        )
      );

      const updateFieldVariables = { input: filteredData };

      await updateRecord({
        mutation: updatefieldMutation,
        variables: updateFieldVariables,
      });
      if (!data.managed) {
        alert("field edited successfully");
        window.location.reload();
      } else {
        alert("cannot modify");
      }
    }
    if (apiName == "editModel") {
      data.id = currentModel;
      const updateModelQuery = `mutation UpdateModel($input: updateModelInput!) {
                                  updateModel(input: $input) {
                                    id
                                  }
                                }`;
      const updateModelVariable = { input: data };

      await updateRecord({
        mutation: updateModelQuery,
        variables: updateModelVariable,
      });
      window.location.reload();
    }
    if (apiName == "newModelOption") {
      data.model = currentModel;
      data.name = modelName;
      const modelOptionQuery = `mutation CreateModelOption($input: ModelOptionInput!) {
                                  createModelOption(input: $input) {
                                    id
                                  }
                                }`;
      const modelOptionVariable = { input: data };

      await createRecord({
        mutation: modelOptionQuery,
        variables: modelOptionVariable,
      });
      window.location.reload();
    }
    if (apiName == "editModelOption") {
      data.id = fieldSlug?.id;
      if (!data.managed) {
        const editModelOptionQuery = `mutation UpdateModelOption($input: updateModelOptionInput!) {
                                        updateModelOption(input: $input) {
                                          id
                                        }
                                      }`;
        const editModelOptionVariable = { input: data };
        await updateRecord({
          mutation: editModelOptionQuery,
          variables: editModelOptionVariable,
        });
        alert("field edited successfully");
        window.location.reload();
      } else {
        alert("cannot modify");
      }
    }
    if (apiName == "newTab") {
      console.log("data", data);
      const createTabMutation = `mutation CreateTab($input: TabInput!) {
          createTab(input: $input) {
            id
          }
        }
        `;
      data.order = Number(data.order);
      console.log("after convert", data);
      const createTabVariables = { input: data };
      await createRecord({
        mutation: createTabMutation,
        variables: createTabVariables,
      });
      window.location.reload();
    }
    if (apiName === "editTab") {
      data.id = fieldSlug.id;
      data.order = Number(data.order);
      const updateTabQuery = `mutation UpdateTab($input: updateTabInput!) {
        updateTab(input: $input) {
          id
        }
      }`;

      const updateTabVariable = { input: data };
      await updateRecord({
        mutation: updateTabQuery,
        variables: updateTabVariable,
      });
      window.location.reload();
    }
    if (apiName === "newComponent") {

      const createComponentMutation = `mutation CreateComponent($input: ComponentInput!) {
        createComponent(input: $input) {
          id
        }
      }`;


      data.code = lz.encodeBase64(lz.compress(data.code))
      console.log("🚀 ~ constonSubmit:SubmitHandler<any>= ~ data.code:", data.code)

      // const yash = lz.decompress(lz.decodeBase64(data.code));
      // console.log("🚀 ~ constonSubmit:SubmitHandler<any>= ~ yash:", yash)
      
      
      const createComponentVariables = { input: data };
      
      console.log("🚀 ~ constonSubmit:SubmitHandler<any>= ~ createComponentVariables:", createComponentVariables)
      await createRecord({
        mutation: createComponentMutation,
        variables: createComponentVariables,
      });
      // window.location.reload();
    }
  };

  React.useEffect(() => {
    setDynamicFieldOptions(fieldValue.fieldOptions || []);
  }, [fieldValue.fieldOptions]);

  const addNewFieldOption = () => {
    setDynamicFieldOptions((prevOptions) => [
      ...prevOptions,
      { key: "", value: "" },
    ]);
  };

  const renderField = (
    field: any,
    props: any,
    control: any,
    setFieldValue: Function
  ) => {
    const options = [
      { value: "string", label: "String" },
      { value: "enum", label: "ENUM" },
      { value: "boolean", label: "Boolean" },
      { value: "relationship", label: "Relationship" },
      { value: "bcrypt", label: "Bcrypt" },
    ];

    switch (field) {
      case "label":
        return (
          <>
            {startCase(field)}
            <input
              {...props}
              onChange={(e) => setFieldValue(field, e.target.value)}
            />
          </>
        );
      case "modelName":
        return (
          <>
            {startCase(field)}
            <input
              {...props}
              onChange={(e) => setFieldValue(field, e.target.value)}
            />
          </>
        );
      case "keyName":
        return (
          <>
            {startCase(field)}
            <input
              {...props}
              onChange={(e) => setFieldValue(field, e.target.value)}
            />
          </>
        );
      case "value":
        return (
          <>
            {startCase(field)}
            <input
              {...props}
              onChange={(e) => setFieldValue(field, e.target.value)}
            />
          </>
        );
      case "fieldName":
        return (
          <>
            {startCase(field)}
            <input
              {...props}
              onChange={(e) => setFieldValue(field, e.target.value)}
            />
          </>
        );

      case "name":
        return (
          <>
            {startCase(field)}
            <input
              {...props}
              onChange={(e) => setFieldValue(field, e.target.value)}
            />
          </>
        );
      case "prefix":
        return (
          <>
            {startCase(field)}
            <input
              {...props}
              onChange={(e) => setFieldValue(field, e.target.value)}
            />
          </>
        );
      case "default":
        if (props.name) {
          return (
            <>
              {startCase(field)}
              <input
                {...props}
                onChange={(e) => setFieldValue(field, e.target.value)}
              />
            </>
          );
        }
      case "fieldOptions":
        return (
          <>
            {startCase(field)}
            <div style={{ display: "flex", flexDirection: "column" }}>
              {dynamicFieldOptions.length > 0 &&
                dynamicFieldOptions.map((dynamicField, index) => {
                  return (
                    <div
                      key={`${fieldSlug}-option-${index}`}
                      style={{ padding: "10px" }}
                    >
                      <input
                        {...register(`fieldValue.fieldOptions[${index}].key`)}
                        type="text"
                        defaultValue={dynamicField?.key}
                        onChange={(e) =>
                          setFieldValue(
                            `fieldOptions[${index}].key`,
                            e.target.value
                          )
                        }
                      />
                      <input
                        {...register(`fieldValue.fieldOptions[${index}].value`)}
                        type="text"
                        defaultValue={dynamicField?.value}
                        onChange={(e) =>
                          setFieldValue(
                            `fieldOptions[${index}].value`,
                            e.target.value
                          )
                        }
                      />
                      <button
                        data-id={index}
                        onClick={() => {
                          const newOptions = [...dynamicFieldOptions];
                          newOptions.splice(index, 1);
                          setDynamicFieldOptions(newOptions);
                          setFieldValue(`fieldValue.fieldOptions`, newOptions);
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  );
                })}
              <button onClick={addNewFieldOption}>Add New</button>
            </div>
          </>
        );
      case "enum":
        return (
          <>
            {(selectedType == undefined || selectedType === "enum") && (
              <>
                <p>{startCase(field)}</p>
                <textarea
                  {...props}
                  onChange={(e) => setFieldValue(field, e.target.value)}
                />
              </>
            )}
          </>
        );
        case "description":
          return (
            <>
              {(selectedType == undefined || selectedType === "description") && (
                <>
                  <p>{startCase(field)}</p>
                  <textarea
                    {...props}
                    onChange={(e) => setFieldValue(field, e.target.value)}
                  />
                </>
              )}
            </>
          );
          case "code":
            return (
              <>
                {(selectedType == undefined || selectedType === "code") && (
                  <>
                    <p>{startCase(field)}</p>
                    <textarea
                      {...props}
                      onChange={(e) => setFieldValue(field, e.target.value)}
                    />
                  </>
                )}
              </>
            );
            case "modules":
              return (
                <>
                  {(selectedType == undefined || selectedType === "modules") && (
                    <>
                      <p>{startCase(field)}</p>
                      <textarea
                        {...props}
                        onChange={(e) => setFieldValue(field, e.target.value)}
                      />
                    </>
                  )}
                </>
              )
      case "order":
        return (
          <>
            {startCase(field)}
            <input
              type="number"
              {...props}
              onChange={(e) => setFieldValue(field, e.target.value)}
            />
          </>
        );

      case "model":
        return (
          <div style={{ display: "flex", flexDirection: "column" }}>
            {startCase(field)} {/* Using startCase to format the field name */}
            {fieldSlug[field]}
            <select
              {...props}
              multiple={false}
              onChange={(e) => setFieldValue(field, e.target.value)}
              //  defaultValue={allmodels?allmodels[0].id:""}
            >
              {allmodels &&
                allmodels.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
            </select>
          </div>
        );
      case "icon":
        return (
          <>
            {startCase(field)}
            <div style={{ display: "flex", flexDirection: "column" }}>
              <input
                {...props}
                onChange={(e) => setFieldValue(field, e.target.value)}
              />
              <span>please enter a string from reacticonsAi</span>
            </div>
          </>
        );

      case "type":
        return (
          <div style={{ display: "flex", flexDirection: "column" }}>
            {startCase(field)}
            <select
              {...props}
              multiple={false}
              onChange={(e) => setFieldValue(field, e.target.value)}
            >
              {options.map((item: any) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
            {field === "type" &&
              (selectedType == undefined || selectedType === "enum") &&
              field !== "enum" && (
                <>
                  {(selectedType === undefined || selectedType === "enum") && (
                    <>
                      <p>{startCase("enum")}</p>
                      <textarea
                        {...register("enum")}
                        onChange={(e) =>
                          setFieldValue(selectedType, e.target.value)
                        }
                      />
                    </>
                  )}
                </>
              )}
          </div>
        );
      case "managed":
      case "isEditable":
      case "unique":
      case "required":
      case "many":
      case "ignoreGraphql":
      case "historyTracking":
      case "bcrypt":
        return (
          <>
            {startCase(field)}
            <input
              type="checkbox"
              {...props}
              defaultChecked={fieldSlug[field]}
              onChange={(e) => setBooleanValue(field, e.target.checked)}
            />
          </>
        );
      case "rounds":
        return (
          <>
            {startCase(field)}
            <input
              type="number"
              {...props}
              onChange={(e) => setFieldValue(field, e.target.value)}
            />
          </>
        );

      default:
        return;
      // (
      //     <>
      //         {startCase(field)}
      //         <input type="checkbox" {...props} onChange={(e) => setFieldValue(field, e.target.checked)} />
      //     </>
      // );
    }
  };

  return (
    <form
      className={formStyles}
      key={fieldSlug + fieldValue}
      onSubmit={handleSubmit((data) => onSubmit(data))}
    >
      {Object.entries(fieldValue).map(([key, value]: [string, any]) => {
        return (
          <div
            key={fieldSlug + key}
            style={{ display: "flex", gap: "6px", margin: "6px 0" }}
          >
            {renderField(
              key,
              {
                ...register(key),
                ...(Array.isArray(value) && key === "enum"
                  ? { defaultValue: value }
                  : (Array.isArray(value) && key != "enum") ||
                    key === "isEditable" ||
                    key === "unique" ||
                    key === "required" ||
                    key === "many" ||
                    key === "ignoreGraphql" ||
                    key === "bcrypt" ||
                    key === "historyTracking" ||
                    key === "managed"
                  ? {}
                  : { defaultValue: value }),
              },
              control,
              setFieldValue
            )}
          </div>
        );
      })}
      <input type="submit" value="Save" />
    </form>
  );
}
