import "./styles.scss";

export type Option = {
  label: string;
  value: string;
};

type RadioInputProps = {
  options: Option[];
  selectedOption: string;
  onChange: (value: string) => void;
};

const RadioInput: React.FC<RadioInputProps> = ({
  options,
  selectedOption,
  onChange,
}) => {
  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <>
      {options.map((option) => (
        <label className="label" key={option.value}>
          <input
            type="radio"
            className={"input"}
            value={option.value}
            checked={selectedOption === option.value}
            onChange={handleOptionChange}
          />
          <span className="tag">{option.label}</span>
        </label>
      ))}
    </>
  );
};

export default RadioInput;
