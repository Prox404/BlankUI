import { FiUpload } from "react-icons/fi";
import { useState, memo } from "react";

function UploadFile({
    Label = '',
    ...props
}) {

    const [file, setFile] = useState();
    const handleFileChange = (e) => {
        if (!e.target.files) return;
        const files = e.target.files[0];
        const fileType = files.type.split('/')[0];
        if (files.type && (fileType === 'image' || files.type === 'video'))
            files.preview = URL.createObjectURL(files);
        setFile(files);
    };

    console.log('UploadFile rendered');

    return (<>
        <div className="flex flex-col">
            <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >{Label}</p>
            <label htmlFor="upload" className="py-5 border border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:bg-slate-50" >
                <FiUpload className="w-10 h-10 mx-auto text-gray-400 dark:text-gray-500" />
            </label>
            <input onChange={handleFileChange} id="upload" type="file" {...props} hidden/>
            <div className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="user_avatar_help">A profile picture is useful to confirm your are logged into your account</div>
        </div>
        {
            file && <div className="flex flex-col mt-2">
                {
                    file.preview && <img src={file.preview} alt={file.name} className="w-20 h-20 rounded-lg" />
                }
                <p className="text-sm font-medium text-gray-900 dark:text-white">{file.name}</p>
                <p className="text-sm text-gray-500 dark:text-gray-300">{file.type}</p>
                <p className="text-sm text-gray-500 dark:text-gray-300">{file.size}</p>
            </div>
        }
    </>);
}

export default memo(UploadFile);