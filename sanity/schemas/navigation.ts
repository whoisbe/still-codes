import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'navigation',
	title: 'Navigation',
	type: 'document',
	fields: [
		defineField({
			name: 'items',
			title: 'Navigation Items',
			type: 'array',
			of: [
				{
					type: 'object',
					fields: [
						defineField({
							name: 'label',
							title: 'Label',
							type: 'string',
							validation: (Rule) => Rule.required(),
						}),
						defineField({
							name: 'sectionId',
							title: 'Section ID',
							type: 'string',
							description: 'The ID of the section to scroll to (e.g., "about", "services")',
							validation: (Rule) => Rule.required(),
						}),
						defineField({
							name: 'order',
							title: 'Display Order',
							type: 'number',
							description: 'Order in which this item appears (lower numbers first)',
							initialValue: 0,
						}),
					],
					preview: {
						select: {
							title: 'label',
							subtitle: 'sectionId',
						},
					},
				},
			],
			validation: (Rule) => Rule.required().min(1),
		}),
	],
	preview: {
		select: {
			items: 'items',
		},
		prepare({ items }) {
			return {
				title: 'Navigation',
				subtitle: items ? `${items.length} items` : 'No items',
			};
		},
	},
});

