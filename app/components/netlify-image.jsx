const IMAGE_ENDPOINT = '/.netlify/images';

function buildImageUrl({ src, width, height, fit, quality, format }) {
  const params = new URLSearchParams();
  params.set('url', src);

  if (width) params.set('w', `${width}`);
  if (height) params.set('h', `${height}`);
  if (fit) params.set('fit', fit);
  if (quality) params.set('q', `${quality}`);
  if (format) params.set('fm', format);

  return `${IMAGE_ENDPOINT}?${params.toString()}`;
}

export default function NetlifyImage({
  src,
  alt,
  width,
  height,
  quality = 95,
  format = 'avif',
  fit = 'cover',
  sizes,
  className,
  priority = false
}) {
  if (width && height) {
    const standardSrc = buildImageUrl({ src, width, height, fit: 'contain', quality, format });
    const retinaSrc = buildImageUrl({ src, width: width * 2, height: height * 2, fit: 'contain', quality, format });

    return (
      <img
        src={standardSrc}
        srcSet={`${standardSrc} 1x, ${retinaSrc} 2x`}
        alt={alt}
        width={width}
        height={height}
        className={className}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding="async"
      />
    );
  }

  const targetWidths = [480, 768, 1024, 1280, 1536, 1920];
  const fallbackSrc = buildImageUrl({ src, width: 1536, quality, format });
  const srcSet = targetWidths
    .map((targetWidth) => `${buildImageUrl({ src, width: targetWidth, quality, format })} ${targetWidth}w`)
    .join(', ');

  return (
    <img
      src={fallbackSrc}
      srcSet={srcSet}
      sizes={sizes ?? '100vw'}
      alt={alt}
      className={className}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding="async"
    />
  );
}
