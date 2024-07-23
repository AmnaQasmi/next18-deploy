import { defineType , defineField } from "sanity";

export const Product = defineType( {
    name: "Product",
    type: "document",
    title: "Product",
    fields: [ defineField(
        {
            name: "title",
            type: "string",
            title: "Product Name"
        }),
        defineField({
            name: "description",
            type: "string",
            title: "Product description"
        }),
        defineField({
            name: "detail",
            type: "text",
            title: "Product detail"
        }),
        defineField({
            name: "image",
            type: "image",
            title: "Product Image",
            fields:[
                { 
                    name: 'alt',
                    type: 'string',
                    validation: Rule => Rule.required()
                  }
            ]
        }),
        defineField({
            name: "price",
            type: "number",
            title: "Product Price"
        }),
        defineField({
            name: "category",
            title:"Product Category",
            type:"reference",
            to:[{
                type:"category"}]
            
        }),
        
    ]
})
export default Product ;