interface IconProps {
  name?: string;
  className?: string;
}

const Icon = (props: IconProps) => {
  const { name, className } = props;
  return (
    <svg className={"icon w-[24px] h-[24px] " + (className ? ` ${className}` : "")}>
      <use xlinkHref={`/sprite.svg#${name}`} />
    </svg>
  );
};

export default Icon;
