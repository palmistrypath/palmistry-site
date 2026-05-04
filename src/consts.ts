export const SITE_TITLE = 'Palmistry Path';
export const SITE_DESCRIPTION =
	'An educational resource on palm reading grounded in Indian, Chinese, and Western traditions.';

export interface ModuleConfig {
	slug: string;
	title: string;
	description: string;
	difficulty: string;
}

export const MODULES: ModuleConfig[] = [
	{
		slug: 'foundations',
		title: 'Foundations',
		description:
			'What palmistry is, how to approach a reading, and the basic structures of the hand — shape, skin texture, and the active and passive hands.',
		difficulty: 'Beginner',
	},
	{
		slug: 'lines',
		title: 'The Lines',
		description:
			'The four major lines — Heart, Head, Life, and Fate — and the key minor lines: Sun, Mercury, Girdle of Venus, and more.',
		difficulty: 'Beginner – Intermediate',
	},
	{
		slug: 'mounts',
		title: 'The Mounts',
		description:
			'The eight mounts of the palm, their traditional associations, and how to read relative prominence and flatness.',
		difficulty: 'Intermediate',
	},
	{
		slug: 'advanced',
		title: 'Advanced Interpretation',
		description:
			'Reading the hand as a whole, reconciling cross-tradition differences, and developing a consistent interpretive practice.',
		difficulty: 'Advanced',
	},
];
