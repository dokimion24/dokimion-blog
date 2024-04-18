import Link from 'next/link'
import { slug } from 'github-slugger'
interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className="mr-3 rounded-2xl bg-primary-200 px-2 py-1 text-sm font-medium uppercase text-primary-600 hover:bg-primary-300 hover:text-primary-700"
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
