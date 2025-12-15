import { defineField, defineType } from "sanity"

export const productType = defineType({
  name: "product",
  title: "Product",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Product Name",
      type: "string",
      validation: rule => rule.required(),
    }),

    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: rule => rule.required(),
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),

    defineField({
      name: "price",
      title: "Price (€)",
      type: "number",
      validation: rule => rule.required().min(0),
    }),

    defineField({
      name: "discountPrice",
      title: "Discount Price (€)",
      type: "number",
      validation: rule => rule.min(0),
    }),

    defineField({
      name: "images",
      title: "Product Images",
      type: "array",
      of: [{ type: "image" }],
      validation: rule => rule.min(1),
    }),

    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
    }),

    defineField({
      name: "stock",
      title: "Stock",
      type: "number",
      validation: rule => rule.required().min(0),
    }),

    defineField({
      name: "featured",
      title: "Featured Product",
      type: "boolean",
      initialValue: false,
    }),

    defineField({
      name: "createdAt",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
  ],
})
