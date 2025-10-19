'use client'

import { NextStudio } from 'next-sanity/studio'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { codeInput } from '@sanity/code-input'
import { schemaTypes } from '../../../../sanity/schemas'

const config = defineConfig({
  name: 'praimcraft',
  title: 'Praimcraft CMS',
  projectId: 'a9x04if7',
  dataset: 'production',
  basePath: '/studio',
  plugins: [
    structureTool(),
    visionTool(),
    codeInput(),
  ],
  schema: {
    types: schemaTypes,
  },
})

export default function StudioPage() {
  return (
    <NextStudio 
      config={config}
    />
  )
}