type Button = {
  source: string;
  alternativeText: string;
  width: string;
  height: string;
  className: string;
  action: () => void;
};

const Button = ({
  source,
  alternativeText,
  width,
  height,
  className,
  action,
}: Button): React.ReactElement => {
  return (
    <button className="button">
      <img
        src={source}
        alt={alternativeText}
        width={width}
        height={height}
        className={className}
        onClick={action}
      />
    </button>
  );
};

export default Button;
