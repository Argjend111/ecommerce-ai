'use client'

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schema} from './sanity/schemaTypes'
import {structure} from './sanity/structure'

export default defineConfig({
  basePath: '/studio',
  projectId: 'crto9m8t',
  dataset: 'production',

  schema,
  plugins: [
    structureTool({structure}),
    visionTool({defaultApiVersion: '2025-12-14'}),
  ],
})
