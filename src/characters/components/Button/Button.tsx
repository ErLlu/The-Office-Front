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
  action: handleKeyDown,
}: Button): React.ReactElement => {
  return (
    <button className="button" onClick={() => {}} onKeyDown={handleKeyDown}>
      <img
        src={source}
        alt={alternativeText}
        width={width}
        height={height}
        className={className}
      />
    </button>
  );
};

export default Button;
