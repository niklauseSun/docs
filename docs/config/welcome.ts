export default [
  {
    title: 'Welcome',
    'title.zh-CN': '欢迎',
    type: 'group',
    children: [
      '/welcome/introduction',
      '/welcome/how',
      // '/welcome/introduction/features',
      // '/welcome/introduction/why',
      // '/welcome/introduction/learning-guide',
    ],
  },
  {
    title: 'Getting started',
    'title.zh-CN': '快速开始',
    type: 'group',
    children: [
      {
        title: 'Installation',
        'title.zh-CN': '安装',
        children: [
          '/welcome/getting-started/installation',
          '/welcome/getting-started/installation/docker-compose',
          '/welcome/getting-started/installation/create-nocobase-app',
          '/welcome/getting-started/installation/git-clone',
          // '/welcome/getting-started/installation/install-plugin',
        ],
      },
      {
        title: 'Upgrading',
        'title.zh-CN': '升级',
        children: [
          '/welcome/getting-started/upgrading',
          '/welcome/getting-started/upgrading/docker-compose',
          '/welcome/getting-started/upgrading/create-nocobase-app',
          '/welcome/getting-started/upgrading/git-clone',
        ],
      },
      {
        title: 'Deployment',
        'title.zh-CN': '部署',
        children: [
          '/welcome/getting-started/deployment',
          '/welcome/getting-started/deployment/docker-compose',
          '/welcome/getting-started/deployment/create-nocobase-app',
          '/welcome/getting-started/deployment/git-clone',
        ],
      },
      '/welcome/getting-started/env',
      '/welcome/getting-started/plugin',
    ],
  },
  {
    title: 'Releases',
    'title.zh-CN': '产品发布',
    type: 'group',
    children: [
      {
        title: 'Roadmap',
        'title.zh-CN': '路线图',
        link: '/welcome/release/roadmap',
      },
      {
        title: 'Release notes',
        'title.zh-CN': '更新日志',
        children: [
          '/welcome/release/v1001-changelog',
          '/welcome/release/v0210-changelog',
          '/welcome/release/v0200-changelog',
          '/welcome/release/v0190-changelog',
          '/welcome/release/v0180-changelog',
          '/welcome/release/v0170-changelog',
          '/welcome/release/v0160-changelog',
          '/welcome/release/v0150-changelog',
          '/welcome/release/v0140-changelog',
          '/welcome/release/v0130-changelog',
          '/welcome/release/v0120-changelog',
          '/welcome/release/v0110-changelog',
          '/welcome/release/v0100-changelog',
          '/welcome/release/v0094-changelog',
          '/welcome/release/v0093-changelog',
          '/welcome/release/v0092-changelog',
          '/welcome/release/v0091-changelog',
          '/welcome/release/v0080-changelog',
          '/welcome/release/v0075-changelog',
          '/welcome/release/v0074-changelog',
          '/welcome/release/v0073-changelog',
          '/welcome/release/v0072-changelog',
          '/welcome/release/v0071-changelog',
          '/welcome/release/v0070-changelog',
          '/welcome/release/v0060-changelog',
          '/welcome/release/v0050-changelog',
          '/welcome/release/v0040-changelog',
        ],
      },
    ],
  },
  {
    title: 'Community',
    'title.zh-CN': '社区',
    type: 'group',
    children: [
      '/welcome/community/contributing',
      // '/welcome/community/faq',
      '/welcome/community/translations',

      '/welcome/community/thanks',
    ],
  },
]