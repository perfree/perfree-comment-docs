module.exports = {
	title: 'Perfree评论框组件',
	dest: './dist',
	description: 'vuePressDemo',
	base: '/perfree-comment-docs-page/',
	head: [
		['link', {
			rel: 'icon',
			href: '/img/logo.png'
		}]
	],
	themeConfig: {
		displayAllHeaders: true,
		// 添加导航栏
		nav: [{
				text: '首页',
				link: '/',
			},
			{
				text: '文档',
				link: '/pages/guide/',
			},
			{
				text: '推荐',
				link: '/pages/recommend/'
			},
			{
				text: '仓库',
				items: [{
						text: 'github',
						link: 'https://github.com/perfree/perfree-comment'
					},
					{
						text: 'npm',
						link: 'https://www.npmjs.com/package/perfree-comment'
					}
				]
			}
		],
		// 为以下路由添加侧边栏
		sidebar: {
			'/pages/guide/': [
				'',
				'one'
			],
			'/pages/recommend/': [
				'',
				'one'
			]
		},
	}
}
