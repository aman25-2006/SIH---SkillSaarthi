export type NavItem = {
  label: string
  href: string
}

export type ApiResponse<T> = {
  data: T
  message?: string
}

export type ApiErrorShape = {
  message: string
  status?: number
}
