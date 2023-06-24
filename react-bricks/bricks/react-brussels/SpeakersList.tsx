import React from 'react'
import { Text, types, usePageValues } from 'react-bricks/frontend'
import SpeakersListItem from '../../../components/SpeakersListItem'
import Section from '../react-bricks-ui/shared/components/Section'
import Container from '../react-bricks-ui/shared/components/Container'
import {
  LayoutProps,
  neutralBackgroundSideGroup,
} from '../react-bricks-ui/LayoutSideProps'
import { bgColors } from '../react-bricks-ui/colors'

interface ExternalData {
  speakers: types.PageFromList[]
}

export interface SpeakersListProps extends LayoutProps {}

const SpeakersList: types.Brick<SpeakersListProps> = ({ backgroundColor }) => {
  const [pageValues] = usePageValues()

  const { externalData } = pageValues
  const { speakers } = externalData as ExternalData

  return (
    <Section backgroundColor={backgroundColor}>
      <Container>
        <Text
          propName="title"
          placeholder="Title..."
          renderBlock={({ children }) => (
            <h1 className="text-3xl font-extrabold text-center mb-8">
              {children}
            </h1>
          )}
        />
        <div className="flex flex-wrap space-x-6">
          {speakers?.map((speaker) => (
            <SpeakersListItem
              key={speaker.id}
              slug={speaker.slug}
              name={speaker.meta.title}
              photoUrl={speaker.meta.image.src}
              role={speaker.customValues.role}
              company={speaker.customValues.company}
              location={speaker.customValues.location}
              shortBio={speaker.meta.description}
              linkedinUrl={speaker.customValues.linkedinUrl}
              twitterUrl={speaker.customValues.twitterUrl}
              githubUrl={speaker.customValues.githubUrl}
              talkTitle={speaker.customValues.talkTitle}
            />
          ))}
        </div>
      </Container>
    </Section>
  )
}

SpeakersList.schema = {
  name: 'speakers-list',
  label: 'Speakers List',
  getDefaultProps: () => ({
    title: 'Speakers',
    backgroundColor: bgColors.GRAY.value,
  }),

  // Sidebar Edit controls for props
  sideEditProps: [neutralBackgroundSideGroup],
}

export default SpeakersList
