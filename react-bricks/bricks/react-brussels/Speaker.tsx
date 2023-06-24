import { Image, Text, types, usePageValues } from 'react-bricks/frontend'
import Section from '../react-bricks-ui/shared/components/Section'
import Container from '../react-bricks-ui/shared/components/Container'
import { FiMapPin, FiTwitter, FiGithub, FiLinkedin } from 'react-icons/fi'

//=============================
// Component to be rendered
//=============================
const Speaker: types.Brick = () => {
  const [pageValues] = usePageValues()
  const {
    customValues: { twitterUrl, githubUrl, linkedinUrl },
  } = pageValues

  return (
    <Section>
      <Container>
        <div className="flex space-x-20">
          <div className="w-64 shrink-0">
            <Image
              metaFieldName="image"
              alt="Speaker's photo"
              maxWidth={800}
              aspectRatio={1}
              imageClassName="w-48 mb-5 border rounded-full"
            />
            <div className="mb-3">
              <Text
                renderBlock={(props) => (
                  <h1 className="text-2xl font-extrabold text-gray-900 dark:text-white">
                    {props.children}
                  </h1>
                )}
                placeholder="Name..."
                metaFieldName="title"
              />
              <Text
                renderBlock={(props) => (
                  <p className="text-gray-700 dark:text-gray-100">
                    {props.children}
                  </p>
                )}
                placeholder="Company..."
                customFieldName="company"
              />
            </div>
            <div className="flex items-center space-x-2 mb-6">
              <div>
                <FiMapPin className="text-sky-500" />
              </div>
              <div className="flex-1">
                <Text
                  renderBlock={(props) => (
                    <p className="text-gray-700 dark:text-gray-100">
                      {props.children}
                    </p>
                  )}
                  placeholder="Location..."
                  customFieldName="location"
                />
              </div>
            </div>
            <div className="mb-6">
              <Text
                renderBlock={(props) => (
                  <p className="text-gray-700 dark:text-gray-100">
                    {props.children}
                  </p>
                )}
                placeholder="Short bio..."
                metaFieldName="description"
              />
            </div>
            <div className="flex items-center space-x-2">
              {twitterUrl && (
                <a
                  href={twitterUrl}
                  className="text-sky-500 hover:text-sky-600"
                >
                  <FiTwitter />
                </a>
              )}
              {githubUrl && (
                <a href={githubUrl} className="text-sky-500 hover:text-sky-600">
                  <FiGithub />
                </a>
              )}
              {linkedinUrl && (
                <a
                  href={linkedinUrl}
                  className="text-sky-500 hover:text-sky-600"
                >
                  <FiLinkedin />
                </a>
              )}
            </div>
          </div>
          <div className="p-6 bg-gray-100">
            <div className="mb-6">
              <h2 className="text-lg font-bold">Talk title</h2>
              <Text
                renderBlock={(props) => (
                  <p className="leading-relaxed text-gray-700 dark:text-gray-100">
                    {props.children}
                  </p>
                )}
                placeholder="Talk title..."
                customFieldName="talkTitle"
              />
            </div>
            <div className="mb-6">
              <h2 className="text-lg font-bold">Talk abstract</h2>
              <Text
                renderBlock={(props) => (
                  <p className="leading-relaxed text-gray-700 dark:text-gray-100">
                    {props.children}
                  </p>
                )}
                placeholder="Talk title..."
                customFieldName="talkAbstract"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}

//=============================
// Brick Schema
//=============================
Speaker.schema = {
  name: 'speaker',
  label: 'Speaker',
  previewImageUrl: `/bricks-preview-images/custom-hero-unit.png`,
}

export default Speaker
