import NextImage, {
  ImageProps as NextImageProps,
  StaticImageData,
} from "next/image"

export type ImageProps = NextImageProps

export const Image = (props: ImageProps) => {
  const hasBlurData = !!(
    (props.src as StaticImageData).blurDataURL || props.blurDataURL
  )
  return <NextImage placeholder={hasBlurData ? "blur" : "empty"} {...props} />
}
