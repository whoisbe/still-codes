import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'service',
	title: 'Service',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'description',
			title: 'Description',
			type: 'text',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'tags',
			title: 'Tags',
			type: 'array',
			of: [{ type: 'string' }],
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'pricing',
			title: 'Pricing',
			type: 'string',
		}),
		defineField({
			name: 'order',
			title: 'Display Order',
			type: 'number',
			description: 'Order in which this service appears (lower numbers first)',
			initialValue: 0,
		}),
	],
	preview: {
		select: {
			title: 'title',
			subtitle: 'pricing',
		},
	},
	orderings: [
		{
			title: 'Display Order',
			name: 'orderAsc',
			by: [{ field: 'order', direction: 'asc' }],
		},
	],
});

