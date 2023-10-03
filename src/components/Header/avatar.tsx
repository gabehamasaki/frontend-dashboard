'use client'
import * as AvatarUI from '@radix-ui/react-avatar'

interface AvatarProps {
  className?: string
  src?: string
  alt?: string
  fallback?: string
  name?: string
}

export default function Avatar(props: AvatarProps) {
  const {className, alt, name, fallback, src} = props;
  return (
    <AvatarUI.Root className={`rounded-full w-10 h-10 bg-dark-20 text-white flex items-center justify-center`}>
      <AvatarUI.Fallback>
        {fallback}
      </AvatarUI.Fallback>
    </AvatarUI.Root>
  )
}