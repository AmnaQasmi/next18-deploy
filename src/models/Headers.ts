interface HeaderItems {
    label: string,
    page: string
}

export interface HeaderContacts {
    label: string,
    page: string,
    info: string[]
}

export interface NavItems {
    home: HeaderItems,
    intro: HeaderItems,
    about: HeaderItems,
    story: HeaderItems,
    services: HeaderContacts,
    contact: HeaderContacts
}