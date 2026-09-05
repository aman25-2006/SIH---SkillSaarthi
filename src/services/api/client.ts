import type { ApiErrorShape } from '@/types'

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL?.trim() ?? ''

export class ApiClientError extends Error implements ApiErrorShape {
  status?: number

  constructor(message: string, status?: number) {
    super(message)
    this.name = 'ApiClientError'
    this.status = status
  }
}

type RequestOptions = RequestInit & {
  query?: Record<string, string | number | boolean | undefined>
}

export async function requestJson<T>(path: string, options: RequestOptions = {}): Promise<T> {
  if (!baseUrl) {
    throw new ApiClientError('API base URL is not configured.')
  }

  const url = new URL(path, baseUrl)

  if (options.query) {
    for (const [key, value] of Object.entries(options.query)) {
      if (value !== undefined) {
        url.searchParams.set(key, String(value))
      }
    }
  }

  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers ?? {}),
    },
  })

  if (!response.ok) {
    throw new ApiClientError(`Request failed with status ${response.status}.`, response.status)
  }

  return (await response.json()) as T
}
