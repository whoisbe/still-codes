import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'about',
	title: 'About Section',
	type: 'document',
	fields: [
		defineField({
			name: 'content',
			title: 'Content',
			type: 'text',
			validation: (Rule) => Rule.required(),
		}),
	],
	preview: {
		select: {
			title: 'content',
		},
		prepare({ title }) {
			return {
				title: title ? title.substring(0, 50) + '...' : 'About Section',
			};
		},
	},
});

