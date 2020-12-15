import Link from 'next/link'

import Avatar from './avatar'
import CoverImage from './cover-image'
import Date from './date'

const Hero = ({title, coverImage, date, excerpt, author, slug}) => {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage slug={slug} title={title} url={coverImage} type="post" />
      </div>
      <div className="mb-20 md:grid md:grid-cols-2 md:col-gap-16 lg:col-gap-8 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl font-bold leading-tight tracking-tight lg:text-6xl">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="transition-colors duration-200 hover:underline hover:text-fuchsia-600">
                {title}
              </a>
            </Link>
          </h3>
          <div className="mb-4 text-lg md:mb-0">
            <Date dateString={date} />
          </div>
        </div>
        <div>
          <p className="mb-4 text-lg leading-relaxed tracking-wide">{excerpt}</p>
          <Avatar name={author.name} picture={author.avatar} />
        </div>
      </div>
    </section>
  )
}

export default Hero