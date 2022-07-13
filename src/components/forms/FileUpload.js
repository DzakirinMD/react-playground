import React, { Component } from 'react';

class FileUpload extends Component {
    
    constructor(props) {
        super(props);
      
        this.fileInputRef = React.createRef();
      }
    
      handleSubmit = (event) => {
        event.preventDefault();
    
        var filename = this.fileInputRef.current.files[0].name;
    
        alert(`Are you sure you want to upload - ${filename} file ?`);
    
        console.log('File uploaded: ', filename);
      }
    
      render() {
        return (
          <form className = "contens" onSubmit={this.handleSubmit}>
            <label>
              Select file to upload: <br/> <br/>
              <input type="file" ref={this.fileInputRef} />
            </label>
            <br />
            <button className = "button" type="submit">Upload</button>
          </form>
        );
      }
}

export default FileUpload;