import { defineType, defineField } from "sanity";

export const Category = defineType(
    {
        name: "category",
        title: "Category",
        type: "document",
        fields: [ defineField (
            {
                name: 'name',
                type: 'string',
                title: 'Category Name'
            }),
        ]
    }
)