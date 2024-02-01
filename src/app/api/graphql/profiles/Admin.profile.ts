import mercury from "@mercury-js/core";

const rules = [
  {
    modelName: "User",
    access: {
      create: true,
      read: true,
      update: true,
      delete: true,
    },
  },
  {
    modelName: "Account",
    access: {
      create: true,
      read: true,
      update: true,
      delete: true,
    },
    
    fieldLevelAccess: true,
    fields: {
      name: {
        read: false,
      },
    },
  },

  {
    modelName: "Model",
    access: {
      create: true,
      read: true,
      update: true,
      delete: true,
    },
  },
  {
    modelName: "ModelField",
    access: {
      create: true,
      read: true,
      update: true,
      delete: true,
    },
  },
  {
    modelName: "ModelOption",
    access: {
      create: true,
      read: true,
      update: true,
      delete: true,
    },
  },
  {
    modelName: "FieldOption",
    access: {
      create: true,
      read: true,
      update: true,
      delete: true,
    },
  },
];

export const AdminProfile = mercury.access.createProfile("Admin", rules);
