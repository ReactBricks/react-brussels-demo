import React from 'react'
import Link from 'next/link'
import { types } from 'react-bricks/frontend'
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'

interface SpeakersListItemProps {
  slug: string
  photoUrl: string
  name: string
  role: string
  company: string
  location: string
  shortBio: string
  linkedinUrl: string
  twitterUrl: string
  githubUrl: string
  talkTitle: string
}

const SpeakersListItem: React.FC<SpeakersListItemProps> = ({
  slug,
  photoUrl,
  name,
  company,
  location,
  shortBio,
  linkedinUrl,
  twitterUrl,
  githubUrl,
  talkTitle,
}) => {
  return (
    <Link
      href={`/speakers/${slug}`}
      className="bg-white border rounded p-6 min-w-[250px] max-w-[15%] hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
    >
      <img src={photoUrl} className="border rounded-sm mb-6" />

      <div className="mb-6">
        <h3 className="font-extrabold uppercase text-xl dark:text-white">
          {name}
        </h3>
        <p className="leading-6 text-gray-800 dark:text-gray-100">
          {company}, {location}
        </p>
      </div>

      <p className="mb-6 leading-6 text-gray-800 dark:text-gray-100">
        "{talkTitle}"
      </p>

      <div className="flex items-center space-x-2">
        {twitterUrl && (
          <a href={twitterUrl} className="text-sky-500 hover:text-sky-600">
            <FiTwitter />
          </a>
        )}
        {githubUrl && (
          <a href={githubUrl} className="text-sky-500 hover:text-sky-600">
            <FiGithub />
          </a>
        )}
        {linkedinUrl && (
          <a href={linkedinUrl} className="text-sky-500 hover:text-sky-600">
            <FiLinkedin />
          </a>
        )}
      </div>
    </Link>
  )
}

export default SpeakersListItem
