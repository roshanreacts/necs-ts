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
    href: string
}

export const allModels = [
    {
        id: 1,
        name: 'User',
        href: '/dashboard/config/models/user',
        slug: "UserModel"
    },
    {
        id: 2,
        name: 'Profile',
        href: '/dashboard/config/models/profile',
        slug: 'ProfileModel'
    }
]

export type ModelType = {
    id: number,
    model_name: string,
    model_slug: string,
    fields: UserFieldType[]
}

export type UserFieldType = {
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
    fields: [
        {
            field_name: "First Name",
            field_slug: "first_name",
            field_type: "string",
            required: true,
        },
        {
            field_name: "Last Name",
            field_slug: "last_name",
            field_type: "string",
            required: true,
        },
        {
            field_name: "Email",
            field_slug: "email",
            field_type: "string",
            required: true,
        }
    ]
}

export const ProfileModel =
{
    id: 1,
    model_name: "Profile Model",
    model_slug: "profile",
    fields: [
        {
            field_name: "First Name",
            field_slug: "first_name",
            field_type: "string",
            required: true,
        },
        {
            field_name: "Last Name",
            field_slug: "last_name",
            field_type: "string",
            required: true,
        },
        {
            field_name: "Email",
            field_slug: "email",
            field_type: "string",
            required: true,
        }
    ]
}