import React, { useState,useEffect } from 'react';
import BlogTitleBox from './form/BlogTitleinput';
import ShortDescBox from './form/ShortDescBox';
import CatDropdown from './form/CatDropdown';
import Richtext from './form/Richtext';
import '../../css/blog/Form.css';


const Form = ({value,setValue,content,setContent}) => {
  const [isDirty, setIsDirty] = useState(false);
  useEffect(() => {
    if (isDirty) {
      localStorage.setItem("formData", JSON.stringify(value));
    }
  }, [value, isDirty]);

  useEffect(() => {
    if (isDirty) {
      localStorage.setItem("content", JSON.stringify(content));
    }
  }, [content, isDirty]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setValue((prev) => {
      return { ...prev, [name]: value };
    });
    setIsDirty(true);
  };

  const handleChangerich = (e) => {
    setContent(e);
    setIsDirty(true);
  };

  const handleCancel = () => {
    setValue({
      BlogTitle: "",
      ShortDescription: "",
    });
    setContent("");
    setIsDirty(false);
    localStorage.removeItem("formData");
    localStorage.removeItem("content");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
    console.log(content);
    setIsDirty(false);
    localStorage.removeItem("formData");
    localStorage.removeItem("content");
  };


  return (
    <form onSubmit={handleSubmit}>
      <BlogTitleBox value={value.BlogTitle} handleChange={handleChange}/>
      <ShortDescBox value={value.ShortDescription} handleChange={handleChange}/>
      <CatDropdown sel={value.cat}/>
      <Richtext content={content} handleChangerich={handleChangerich}/>
      <div className='button-container'>
        <button
          type="button"
          onClick={handleCancel}
          className="cancelbutton">
          Cancel
        </button>
        <div className='draft-save'>
          <button
            type="submit"
            className="submitbutton"
          >
            Save Draft
          </button>
          <button
            type="submit"
            className="submitbutton"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
