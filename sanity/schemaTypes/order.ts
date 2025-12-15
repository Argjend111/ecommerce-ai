import { defineType, defineField } from "sanity"

export const orderType = defineType({
  name: "order",
  title: "Order",
  type: "document",

  fields: [
    defineField({
      name: "orderNumber",
      title: "Order Number",
      type: "string",
      validation: rule => rule.required(),
    }),

    defineField({
      name: "customer",
      title: "Customer",
      type: "reference",
      to: [{ type: "customer" }],
      validation: rule => rule.required(),
    }),

    defineField({
      name: "items",
      title: "Order Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "product",
              type: "reference",
              to: [{ type: "product" }],
              validation: rule => rule.required(),
            }),
            defineField({
              name: "quantity",
              type: "number",
              validation: rule => rule.required().min(1),
            }),
            defineField({
              name: "price",
              type: "number",
              validation: rule => rule.required().min(0),
            }),
          ],
        },
      ],
      validation: rule => rule.required().min(1),
    }),

    defineField({
      name: "totalPrice",
      title: "Total Price (€)",
      type: "number",
      validation: rule => rule.required().min(0),
    }),

    defineField({
      name: "status",
      title: "Order Status",
      type: "string",
      options: {
        list: [
          { title: "Pending", value: "pending" },
          { title: "Paid", value: "paid" },
          { title: "Shipped", value: "shipped" },
          { title: "Delivered", value: "delivered" },
          { title: "Cancelled", value: "cancelled" },
        ],
      },
      initialValue: "pending",
    }),

    defineField({
      name: "paymentMethod",
      title: "Payment Method",
      type: "string",
      options: {
        list: [
          { title: "Cash on Delivery", value: "cod" },
          { title: "Card", value: "card" },
        ],
      },
    }),

    defineField({
      name: "createdAt",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
  ],
})
