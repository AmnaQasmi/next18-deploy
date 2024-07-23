export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-06-27'

  export const secretKey =
  process.env.STRIPE_SECRET_KEY || "sk_test_51Pf5EhCdXu8yBChALVGi9nzI26wGvd549P8gm8gMdguqc3vbnJd2ywGeu6b9XRvYhuiMy83FPlWYclNVlXhWBPtI0058EnbfMj"

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const useCdn = false

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
