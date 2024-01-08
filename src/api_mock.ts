export type ConfigOptionsType = {
    id: number,
    name: string,
    href: string
}

export const ConfigOptions = [
    {
        id: 1,
        name: 'Users',
        href: '/dashboard/config/users'
    },
    {
        id: 2,
        name: 'Profiles',
        href: '/dashboard/config/profiles'
    },
    {
        id: 3,
        name: 'Models',
        href: '/dashboard/config/models'
    },
    {
        id: 4,
        name: 'Pages',
        href: '/dashboard/config/pages'
    },
    {
        id: 5,
        name: 'Tabs',
        href: '/dashboard/config/tabs'
    },
    {
        id: 6,
        name: 'Layouts',
        href: '/dashboard/config/layouts'
    },
    {
        id: 7,
        name: 'Components',
        href: '/dashboard/config/components'
    }
]

export type ModelsOptionsType = {
    id: number,
    name: string,
    href: string,
    slug: string
}

export const allModels = [
    {
        id: 1,
        name: 'User Model',
        href: '/dashboard/config/models/user',
        slug: "UserModel"
    },
    {
        id: 2,
        name: 'Profile Model',
        href: '/dashboard/config/models/profile',
        slug: 'ProfileModel'
    }
]

export type ModelType = {
    id: number,
    model_name: string,
    model_slug: string,
    fields: FieldType[]
}

export type FieldType = {
    field_name: string,
    field_slug: string,
    field_type: string,
    required: boolean
}

export const UserModel =
{
    id: 1,
    model_name: "User Model",
    model_slug: "user",
    fields: {
        "firstName": {
            "type": "string",
            "isEditable": false,
            "label": "First Name",
            "fieldOptions": [{ "key": "USER", "value": "Adarsh" }, { "key": "ADMIN", "value": "Adarsh" }]
        },
        "lastName": {
            "type": "string",
            "isEditable": false,
            "label": "Last Name",
            "fieldOptions": [{ "key": "DATA", "value": "Adarsh" }, { "key": "DATA2", "value": "Adarsh" }]
        },
        "companyName": {
            "type": "string",
            "isEditable": false,
            "label": "Company Name"
        },
        "email": {
            "type": "string",
            "require": true,
            "isEditable": false,
            "label": "Email"
        },
        "password": {
            "type": "string",
            "bcrypt": true,
            "isEditable": false,
            "label": "Password"
        },
        "mobile": {
            "type": "string",
            "isEditable": false,
            "label": "Mobile"
        },
        "termsAndCondtions": {
            "type": "boolean",
            "default": false,
            "isEditable": false,
            "label": "Terms And Condtions"
        },
        "role": {
            "type": "enum",
            "enumType": "string",
            "enum": [
                "USER",
                "ADMIN",
                "ANONYMOUS",
                "SELLER",
                "BUYER",
                "SERVICE_PROVIDER"
            ],
            "default": "USER",
            "label": "Role"
        },
        "isVerified": {
            "type": "boolean",
            "default": false,
            "isEditable": false,
            "label": "Is Verified"
        },
        "status": {
            "type": "enum",
            "enumType": "string",
            "enum": [
                "PENDING",
                "PENDING_VERIFICATION",
                "APPROVED",
                "REJECTED"
            ],
            "default": "PENDING",
            "label": "Status"
        },
        "profile": {
            "type": "relationship",
            "ref": "Profile",
            "label": "Profile"
        },
        "requestedProfile": {
            "type": "string",
            "many": true,
            "label": "Requested Profile"
        }
    },
}

export const ProfileModel =
{
    id: 1,
    model_name: "Profile Model",
    model_slug: "profile",
    fields: {
        "firstName": {
            "type": "string",
            "isEditable": false,
            "label": "First Name",
            "fieldOptions": [{ "key": "USER", "value": "Adarsh" }, { "key": "ADMIN", "value": "Adarsh" }]
        },
        "lastName": {
            "type": "string",
            "isEditable": false,
            "label": "Last Name"
        },
        "companyName": {
            "type": "string",
            "isEditable": false,
            "label": "Company Name"
        },
        "email": {
            "type": "string",
            "require": true,
            "isEditable": false,
            "label": "Email"
        },
        "password": {
            "type": "string",
            "bcrypt": true,
            "isEditable": false,
            "label": "Password"
        },
        "mobile": {
            "type": "string",
            "isEditable": false,
            "label": "Mobile"
        },
        "termsAndCondtions": {
            "type": "boolean",
            "default": false,
            "isEditable": false,
            "label": "Terms And Condtions"
        },
        "role": {
            "type": "enum",
            "enumType": "string",
            "enum": [
                "USER",
                "ADMIN",
                "ANONYMOUS",
                "SELLER",
                "BUYER",
                "SERVICE_PROVIDER"
            ],
            "default": "USER",
            "label": "Role",
            "fieldOptions": [{ "defaultValue": "USER" }]
        },
        "isVerified": {
            "type": "boolean",
            "default": false,
            "isEditable": false,
            "label": "Is Verified"
        },
        "status": {
            "type": "enum",
            "enumType": "string",
            "enum": [
                "PENDING",
                "PENDING_VERIFICATION",
                "APPROVED",
                "REJECTED"
            ],
            "default": "PENDING",
            "label": "Status"
        },
        "profile": {
            "type": "relationship",
            "ref": "Profile",
            "label": "Profile"
        },
        "requestedProfile": {
            "type": "string",
            "many": true,
            "label": "Requested Profile"
        }
    },
}