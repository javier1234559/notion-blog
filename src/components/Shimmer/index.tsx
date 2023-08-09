import Image from 'next/image'

const shimmer = (w: string, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`

const toBase64 = (str: string) =>
    typeof window === 'undefined'
        ? Buffer.from(str).toString('base64')
        : window.btoa(str)

type Props ={
    className:string;
    src :string;
    alt :string;
}

const Shimmer = ({
    className,
    src,
    alt
}:Props) => (
    <Image
        width="0"
        height="0"
        sizes="100vw"
        alt={alt}
        placeholder='blur'
        className={className}
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer("100vw", 700))}`}
        src={src}
    />
)

export default Shimmer