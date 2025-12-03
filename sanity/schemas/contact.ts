import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'contact',
	title: 'Contact Section',
	type: 'document',
	fields: [
		defineField({
			name: 'heading',
			title: 'Heading',
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
			name: 'email',
			title: 'Email',
			type: 'string',
			validation: (Rule) => Rule.required().email(),
		}),
		defineField({
			name: 'socialLinks',
			title: 'Social Links',
			type: 'object',
			fields: [
				defineField({
					name: 'github',
					title: 'GitHub URL',
					type: 'url',
				}),
				defineField({
					name: 'linkedin',
					title: 'LinkedIn URL',
					type: 'url',
				}),
				defineField({
					name: 'twitter',
					title: 'Twitter URL',
					type: 'url',
				}),
			],
		}),
	],
	preview: {
		select: {
			title: 'heading',
			subtitle: 'email',
		},
	},
});

