function ResponsiveImage({ image, sizes = '100vw', ...imageProps }) {
  return (
    <picture className="responsive-picture">
      <source type="image/webp" srcSet={image.webpSrcSet} sizes={sizes} />
      <img
        {...imageProps}
        src={image.src}
        sizes={sizes}
        width={image.width}
        height={image.height}
      />
    </picture>
  )
}

export default ResponsiveImage
