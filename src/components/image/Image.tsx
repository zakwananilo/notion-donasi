type Props = {
  src: string;
  id?: string;
  width?: number | string;
  height?: number | string;
  alt?: string;
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
  rounded?: number | string;
  className?: string;
}

function Image(props: Props) {
  const className = `${props.className || ''}`;

  return (
    <img id={props.id} className={className} src={props.src} alt={props.alt} style={{
      width: props.width,
      height: props.height,
      borderRadius: props.rounded,
      objectFit: (props.objectFit) ? props.objectFit : 'cover'
    }}/>
  )
}

export default Image