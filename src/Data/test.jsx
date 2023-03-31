import React from 'react'

function test() {
    const [title, setTitle] = useState('');
    const [shortDesc, setShortDesc] = useState('');
    const [tags, setTags] = useState('');
    const [content, setContent] = useState('');
    const [thumbnail, setThumbnail] = useState(null);
  
    const apiConfig = require('../../Data/Api.json');
    const api = apiConfig.api;
    const accessToken = apiConfig.token;
  
    function handleSubmit(event) {
      event.preventDefault();
  
      const formData = new FormData();
      formData.append('title', title);
      formData.append('shortDesc', shortDesc);
      formData.append('tags', tags);
      formData.append('content', content);
      formData.append('thumbnail', thumbnail);
  
      // Send POST request using axios or fetch API
      axios.post(api+'blog/', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `bearer ${accessToken}`
          }
      })
        .then(response => {
            console.log(response);
          // Handle successful response (e.g. redirect to confirmation page)
        })
        .catch(error => {
          console.error(error);
        });
  
    }
  
    function handleFileUpload(file) {
      setThumbnail(file);
    }
  
    function handleContentChange(value) {
      setContent(value);
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={event => setTitle(event.target.value)} maxLength={100} />
        </label>
        <br />
        <label>
          Short Description:
          <input type="text" value={shortDesc} onChange={event => setShortDesc(event.target.value)} maxLength={50} />
        </label>
        <br />
        <label>
          Tags:
          <input type="text" value={tags} onChange={event => setTags(event.target.value)} />
        </label>
        <br />
        <label>
          Content:
          <ReactQuill value={content} onChange={handleContentChange} />
        </label>
        <br />
        <label>
          Thumbnail:
          <ImageUpload onUpload={handleFileUpload} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    );
}

export default test
