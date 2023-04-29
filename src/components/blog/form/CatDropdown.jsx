import { useState, useEffect } from "react";
import CreatableSelect from "react-select/creatable";
import axios from "axios";

const apiConfig = require('../../../Data/Api.json');
const api = apiConfig.api;
const accessToken = apiConfig.token;

const CatDropdown = ({valued,setvalued}) => {
  useEffect(() => {
    if (valued) {
      setSelectedValue({ value: valued, label: valued });
    } else {
      setSelectedValue(null);
    }
  }, [valued]);
  
   const [selectedValue, setSelectedValue] = useState();
   const [options, setOptions] = useState([
   
   ]);
   const primaryColor = 'rgba(58, 3, 46, 1)';
   const secondaryColor = 'rgba(58, 3, 46,0.2)';
 
   const colorStyles = {
     control: (styles, { isFocused }) => ({
       ...styles,
       boxShadow: "none",
       color:"black",
       borderColor: isFocused ? primaryColor : "rgba(105, 102, 102, 1)",
       "&:hover": {
         borderColor: isFocused ? primaryColor : "rgba(105, 102, 102, 1)"
       },
     }),
 
     option: (styles, { data, isDisabled, isFocused, isSelected }) => {
       return {
         ...styles,
         backgroundColor: isSelected ? primaryColor : null,
         color: isSelected ? "white" : null, // add this line
         ":hover": {
           backgroundColor: isFocused ? secondaryColor : null,
 
         },
       };
     },
   };

  const createTag = async (tag) => {
    try {
      const response = await axios.post(api + "blog/tag/", {
        name: tag,
      },
        {
          headers: {
            'Authorization': `bearer ${accessToken}`
          }
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  async function fetchTags(q) {
    console.log(`${q} 2nd`);
    try {
      const response = await axios.get(`${api}blog/tag/?name=${q}`, {
        headers: {
          'Authorization': `bearer ${accessToken}`
        }
      });
      if (response.data) {
        console.log(response.data);

        if (response.data.status === 'success') {
          const tags = response.data.data.map(tag => ({ value: tag.name, label: tag.name }));
          setOptions(tags);

        }

      }
    } catch (error) {
      console.error(error);
    }
  };


  const handleChange = (selectedOption, actionMeta) => {
    if (!selectedOption) {
      setSelectedValue(null);
      setvalued(null);
    } else {
      if (actionMeta.action === "create-option") {
        createTag(selectedOption.value);
      }
      setSelectedValue(selectedOption);
      setvalued(selectedOption.value);
    }
  };
  
  
  

  function handleInputChange(inputValue) {
    console.log(`${inputValue} 1st`); // log the current input value to the console
    // do other things with the input value
    fetchTags(inputValue)
  }

  return (
    
    
    <CreatableSelect
      options={options}
      value={selectedValue}
      onInputChange={handleInputChange}
      onChange={handleChange}
      placeholder="Select or create a tag"
      isClearable={true}
      isSearchable={true}
      styles={colorStyles}
    />
    
  );
};

export default CatDropdown;
