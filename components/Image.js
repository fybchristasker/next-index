import Image from 'next/image'

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality}`
}

const NextImage = ({ src, width, height, layout }) => {
  return <Image loader={myLoader} src={src} alt="" width={width} height={height} layout={layout} />
}

export default NextImage
