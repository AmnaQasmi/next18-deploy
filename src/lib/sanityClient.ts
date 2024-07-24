import { createClient } from 'next-sanity'

// import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion: "2024-06-27",
  dataset: "production",
  projectId: 'bebv08tg',
  useCdn: false,
})