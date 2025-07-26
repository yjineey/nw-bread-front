export function imgPath(path: string) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || ''
  return `${base}${path.startsWith('/') ? path : `/${path}`}`
}
