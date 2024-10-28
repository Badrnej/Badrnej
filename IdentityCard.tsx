import React from 'react'
import { GithubIcon, MailIcon, BookOpenIcon, CodeIcon } from 'lucide-react'

export default function IdentityCard() {
  const profile = {
    name: "Badr Nejaa",
    email: "nejaa.badr@gmail.com",
    github: "Badrnej",
    grade: "Full Stack Developer",
    simplon: "Web Development",
    alx: "Software Engineering",
    progressPercentage: 90,
  }

  const urls = {
    background: "https://images.playground.com/9f4dabd400264e38aa8b895f46a28ceb.jpeg",
    simplonLogo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture%20d%E2%80%99e%CC%81cran%202024-10-27%20a%CC%80%2022.14.31-aSp5shltAQLGBd8Zd5o5Y6kOZDV7fb.png",
    alxLogo: "https://avatars.githubusercontent.com/u/108390987?s=280&v=4",
    avatar: "https://i.ibb.co/qyNb1XR/Capture-d-cran-2024-10-27-22-45-54.png",
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="relative bg-gray-900 text-white rounded-lg overflow-hidden shadow-xl" style={{ aspectRatio: '1.6/1' }}>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${urls.background})` }}
        ></div>
        <div className="relative p-6 flex flex-col h-full">
          <header className="flex justify-between items-start mb-4">
            <h2 className="text-3xl font-bold tracking-tight">Developer Identity Card</h2>
            <div className="flex space-x-2">
              <Logo src={urls.simplonLogo} alt="Simplon" bgColor="bg-white" textColor="text-black" />
              <Logo src={urls.alxLogo} alt="ALX" bgColor="bg-white" textColor="text-white" />
            </div>
          </header>
          <main className="flex-grow flex">
            <div className="w-1/3 pr-4 flex flex-col justify-center">
              <img
                src={urls.avatar}
                alt="Profile"
                className="w-full rounded-lg border-4 border-white shadow-lg"
              />
              <div className="mt-4 text-center">
                <span className="bg-green-500 text-xs font-semibold px-2 py-1 rounded">DEVELOPER</span>
              </div>
            </div>
            <div className="w-2/3 flex flex-col justify-center">
              <ProfileInfo label="Name" value={profile.name} />
              <ProfileInfo label="Email" value={profile.email} />
              <ProfileInfo label="GitHub" value={profile.github} />
              <ProfileInfo label="Grade" value={profile.grade} />
              <ProfileInfo label="Simplon" value={profile.simplon} icon={<BookOpenIcon className="inline w-4 h-4 mr-1" />} />
              <ProfileInfo label="ALX" value={profile.alx} icon={<CodeIcon className="inline w-4 h-4 mr-1" />} />
            </div>
          </main>
          <footer className="mt-4">
            <div className="bg-gray-800 rounded-full h-4 mb-2">
              <div 
                className="bg-green-500 h-4 rounded-full" 
                style={{ width: `${profile.progressPercentage}%` }}
              ></div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Progress: {profile.progressPercentage}%</span>
              <div className="flex space-x-2">
                <SocialLink href={`https://github.com/${profile.github}`} icon={<GithubIcon className="w-6 h-6" />} />
                <SocialLink href={`mailto:${profile.email}`} icon={<MailIcon className="w-6 h-6" />} />
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}

const Logo = ({ src, alt, bgColor, textColor }) => (
  <span className={`${bgColor} ${textColor} text-xs font-semibold px-2 py-1 rounded flex items-center`}>
    <img src={src} alt={alt} className="h-4" />
  </span>
)

const ProfileInfo = ({ label, value, icon }) => (
  <p className="mb-2">
    <span className="font-semibold">
      {icon}{label}:
    </span>{' '}
    <span className="text-gray-300">{value}</span>
  </p>
)

const SocialLink = ({ href, icon }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300">
    {icon}
  </a>
)
