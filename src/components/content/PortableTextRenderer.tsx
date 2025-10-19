import React from 'react'
import { PortableText } from '@portabletext/react'
import { urlFor } from '@/lib/sanity/client'
import Image from 'next/image'

const components = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="my-8">
          <Image
            src={urlFor(value).width(800).height(600).url()}
            alt={value.alt || ''}
            width={800}
            height={600}
            className="rounded-lg shadow-medium"
          />
          {value.caption && (
            <p className="text-sm text-neutral-600 mt-2 text-center italic">
              {value.caption}
            </p>
          )}
        </div>
      )
    },
    code: ({ value }: any) => {
      return (
        <div className="my-8">
          <pre className="bg-neutral-900 text-neutral-100 p-4 rounded-lg overflow-x-auto">
            <code className={`language-${value.language || 'javascript'}`}>
              {value.code}
            </code>
          </pre>
        </div>
      )
    },
  },
  block: {
    h2: ({ children }: any) => (
      <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6 first:mt-0">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl font-bold text-neutral-900 mt-10 mb-4 first:mt-0">
        {children}
      </h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-xl font-bold text-neutral-900 mt-8 mb-3 first:mt-0">
        {children}
      </h4>
    ),
    normal: ({ children }: any) => (
      <p className="text-neutral-700 leading-relaxed mb-4">
        {children}
      </p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-primary-500 pl-6 py-2 my-6 italic text-neutral-600 bg-neutral-50">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc list-inside space-y-2 my-4 text-neutral-700">
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal list-inside space-y-2 my-4 text-neutral-700">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => <li>{children}</li>,
    number: ({ children }: any) => <li>{children}</li>,
  },
  marks: {
    strong: ({ children }: any) => (
      <strong className="font-semibold text-neutral-900">{children}</strong>
    ),
    em: ({ children }: any) => (
      <em className="italic text-neutral-800">{children}</em>
    ),
    code: ({ children }: any) => (
      <code className="bg-neutral-100 text-neutral-800 px-1.5 py-0.5 rounded text-sm font-mono">
        {children}
      </code>
    ),
    link: ({ children, value }: any) => (
      <a
        href={value.href}
        className="text-primary-600 hover:text-primary-700 underline transition-colors duration-200"
        target={value.href.startsWith('http') ? '_blank' : undefined}
        rel={value.href.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    ),
  },
}

interface PortableTextRendererProps {
  content: any[]
  className?: string
}

export function PortableTextRenderer({ content, className }: PortableTextRendererProps) {
  return (
    <div className={className}>
      <PortableText value={content} components={components} />
    </div>
  )
}
