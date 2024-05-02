import Link from 'next/link'
import { Link as ScrollLink } from 'react-scroll'

export const CustomLink = ({ name, path }: { name: string; path: string; }) => {
    
    return path[0] === '#' 
        ? <Link
            id={name}
            href={`/${path}`}
          >
            {name}
          </Link>
        : <ScrollLink
            to={path}
            smooth={true}
            duration={500}
          >
            {name}
          </ScrollLink>
}