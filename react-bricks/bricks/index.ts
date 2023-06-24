import { types } from 'react-bricks/frontend'

import HeroUnit from './custom/MyHeroUnit'
import reactBricksUITheme from './react-bricks-ui'
import Speaker from './react-brussels/Speaker'
import SpeakersList from './react-brussels/SpeakersList'

const bricks: types.Theme[] = [
  reactBricksUITheme, // React Bricks UI
  {
    themeName: 'React Brussels',
    categories: [
      {
        categoryName: 'Speaker',
        bricks: [Speaker, SpeakersList], // Custom Bricks
      },
    ],
  },
  {
    themeName: 'Default',
    categories: [
      {
        categoryName: 'Hero sections',
        bricks: [HeroUnit], // Custom Bricks
      },
    ],
  },
]

export default bricks
