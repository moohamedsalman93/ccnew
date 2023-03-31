import CreatableSelect from "react-select/creatable";

const CatDropdown = ({sel}) => {
  const options = [
    { value: "Technology", label: "Technology" },
    { value: "Food", label: "Food" },
    { value: "Vehicles", label: "Vehicles" },
  ];

  const colorStyles = {
    control: (styles, { isFocused }) => ({
      ...styles,
      boxShadow: "none",
      borderColor: isFocused ? "rgba(105, 102, 102, 1)" : "rgba(105, 102, 102, 1)",
      "&:hover": {
        borderColor: isFocused ? "rgba(105, 102, 102, 1)" : "rgba(105, 102, 102, 1)"
      }
    }),

    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return { ...styles, };
    },

    multiValue: (styles, { data }) => {
      return {
        ...styles,
        backgroundColor: "rgba(58, 3, 46, 1)",
        color: "#fff",
        borderRadius: "11px"
      };
    },

    multiValueLabel: (styles, { data }) => {
      return {
        ...styles,
        color: "#fff",
      };
    },
    multiValueRemove: (styles, { data }) => {
      return {
        ...styles,
        color: "#fff",
        cursor: "pointer",
        ":hover": {
          color: "#fff",
        },
      };
    },
  };

  const handleChange = (selectedOption, actionMeta) => {
    console.log("handleChange", selectedOption, actionMeta);
  };

  const handleInputChange = (inputValue, actionMeta) => {
    console.log("handleInputChange", inputValue, actionMeta);
  };

 // const value = [{ value: "Food", label: "Food" }];

  return (
    <CreatableSelect
      options={options}
     // value={value}
      onChange={handleChange}
      onInputChange={handleInputChange}
      isMulti
      styles={colorStyles}
      placeholder='Category'
    />
  );
};

export default CatDropdown;
