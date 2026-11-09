import { useEffect } from 'react'

function usePageMetadata({ title, description }) {
  useEffect(() => {
    const descriptionTag = document.querySelector('meta[name="description"]')
    const originalTitle = document.title
    const originalDescription = descriptionTag?.content

    document.title = title
    if (descriptionTag) descriptionTag.content = description

    return () => {
      document.title = originalTitle
      if (descriptionTag && originalDescription !== undefined) {
        descriptionTag.content = originalDescription
      }
    }
  }, [title, description])
}

export default usePageMetadata
