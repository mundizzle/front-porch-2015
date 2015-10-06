/*
  You would call this when receiving a plain text
  value back from an API, and before inserting the
  text into the `contenteditable` area on a page.
*/
export default function (value) {
  value = value.trim()
  value = value.replace(/\n+\s+\n+/g, '\n\n')
  value = value.replace(/\n\n+/g, '\n\n')
  value = value.replace(/\n/g, '<br>')
  value = value.replace(/\s+/g, ' ')

  // Remove bullets.
  value = value.replace(/&#8226\s+/g, '')

  return value
}