import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'footer',
	title: 'Footer',
	type: 'document',
	fields: [
		defineField({
			name: 'copyrightText',
			title: 'Copyright Text',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),
	],
	preview: {
		select: {
			title: 'copyrightText',
		},
	},
});

