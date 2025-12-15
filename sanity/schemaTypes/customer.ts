import { defineType, defineField } from "sanity"

export const customerType = defineType({
  name: "customer",
  title: "Customer",
  type: "document",

  fields: [
    defineField({
      name: "firstName",
      title: "First Name",
      type: "string",
      validation: rule => rule.required(),
    }),

    defineField({
      name: "lastName",
      title: "Last Name",
      type: "string",
      validation: rule => rule.required(),
    }),

    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: rule => rule.required().email(),
    }),

    defineField({
      name: "phone",
      title: "Phone",
      type: "string",
    }),

    defineField({
      name: "address",
      title: "Address",
      type: "string",
    }),

    defineField({
      name: "city",
      title: "City",
      type: "string",
    }),

    defineField({
      name: "country",
      title: "Country",
      type: "string",
    }),

    defineField({
      name: "createdAt",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
  ],
})
