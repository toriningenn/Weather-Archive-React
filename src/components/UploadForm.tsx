import {ChangeEvent, FormEvent, useState} from "react";
import axios from "axios";

const UploadForm = (props: {}) => {
    const [files, setFiles] = useState({} as FileList);

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        if (event.target.files)
            setFiles(event.target.files);
    }

    async function uploadFile(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData();
        if (files) {
            for (let i = 0; i < files.length; i++) {
                formData.append(`files${i}`, files[i], files[i].name);
            }
            await axios.post("http://localhost:8080/upload", formData)
        }
    }

    return <form onSubmit={uploadFile}>
        <label>Upload:</label>
        <input multiple id="upload-files" name="files" type="file" onChange={handleChange}></input>
        <button type="submit">submit</button>
    </form>
}

export default UploadForm;