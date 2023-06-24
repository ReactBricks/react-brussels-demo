import { fetchPages, types } from 'react-bricks/frontend'
import config from './config'

const pageTypes: types.IPageType[] = [
  {
    name: 'page',
    pluralName: 'pages',
    defaultLocked: false,
    defaultStatus: types.PageStatus.Published,
    getDefaultContent: () => [],
    getExternalData: async (page, args) => {
      const pages = await fetchPages(config.apiKey, {
        type: 'speaker',
        pageSize: 100,
        sort: 'publishedAt',
      })
      return {
        speakers: pages,
      }
    },
  },
  {
    name: 'speaker',
    pluralName: 'speakers',
    defaultLocked: false,
    defaultStatus: types.PageStatus.Published,
    allowedBlockTypes: ['speaker'],
    getDefaultContent: () => ['speaker'],
    customFields: [
      {
        name: 'twitterUrl',
        label: 'Twitter URL',
        type: types.SideEditPropType.Text,
        validate: (value) =>
          !value ||
          value.startsWith('https://twitter.com/') ||
          'Invalid Twitter URL',
      },
      {
        name: 'githubUrl',
        label: 'Github URL',
        type: types.SideEditPropType.Text,
        validate: (value) =>
          !value ||
          value.startsWith('https://github.com/') ||
          'Invalid Twitter URL',
      },
      {
        name: 'linkedinUrl',
        label: 'Linkedin URL',
        type: types.SideEditPropType.Text,
        validate: (value) =>
          !value ||
          value.startsWith('https://www.linkedin.com/in/') ||
          'Invalid Linkedin URL',
      },
    ],
  },
  {
    name: 'layout',
    pluralName: 'layout',
    defaultLocked: false,
    defaultStatus: types.PageStatus.Published,
    getDefaultContent: () => [],
    isEntity: true,
  },
]

export default pageTypes
