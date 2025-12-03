import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'skillCategory',
	title: 'Skill Category',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'skills',
			title: 'Skills',
			type: 'array',
			of: [{ type: 'string' }],
			validation: (Rule) => Rule.required().min(1),
		}),
		defineField({
			name: 'order',
			title: 'Display Order',
			type: 'number',
			description: 'Order in which this category appears (lower numbers first)',
			initialValue: 0,
		}),
	],
	preview: {
		select: {
			title: 'title',
			subtitle: 'skills',
		},
		prepare({ title, subtitle }) {
			return {
				title,
				subtitle: subtitle ? `${subtitle.length} skills` : 'No skills',
			};
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

