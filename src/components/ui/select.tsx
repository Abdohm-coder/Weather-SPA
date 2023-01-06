import Select from "react-select";

const SelectUI = ({
  name,
  label,
  options,
  defaultValue,
  getOptionLabel,
  getOptionValue,
  ...rest
}: {
  name: string;
  label: string;
  options: any[] | undefined;
  defaultValue: any;
  getOptionLabel: any;
  getOptionValue: any;
  [x: string]: any;
}) => {
  return (
    <>
      <label className="font-medium" htmlFor={name}>
        {label}
      </label>
      <Select
        aria-label={label}
        id={name}
        name={name}
        options={options}
        isLoading={options ? false : true}
        defaultValue={defaultValue}
        getOptionLabel={getOptionLabel}
        getOptionValue={getOptionValue}
        className="mt-2 font-medium tracking-wide"
        {...rest}
      />
    </>
  );
};

export default SelectUI;
