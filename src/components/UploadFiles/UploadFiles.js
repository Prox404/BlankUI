import { useState } from 'react';
import { FiUpload } from "react-icons/fi";


function UploadFiles({
    Label = '',
    ...props
    
}) {
    const [fileList, setFileList] = useState([]);
    const handleFileChange = (e) => {
        if (!e.target.files) return;
        const files = e.target.files;
        const fileList = [];
        for (let i = 0; i < files.length; i++) {
            const fileType = files[i].type.split('/')[0];
            if (files[i].type && (fileType === 'image' || files[i].type === 'video'))
                files[i].preview = URL.createObjectURL(files[i]);
            fileList.push(files[i]);
        }
        setFileList(fileList);
    };
    return (<>

        <div className="flex flex-col">
            <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >{Label}</p>
            <label htmlFor="upload" className="py-5 border border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:bg-slate-50" >
                <FiUpload className="w-10 h-10 mx-auto text-gray-400 dark:text-gray-500" />
            </label>
            <input onChange={handleFileChange} id="upload" type="file" {...props} hidden multiple />
            <div className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="user_avatar_help">A profile picture is useful to confirm your are logged into your account</div>
        </div>

        {
            fileList && fileList.map((file, index) => {
                return <div key={index} className="flex flex-col mt-2">
                    {
                        file.preview && <img src={file.preview} alt={file.name} className="w-20 h-20 rounded-lg" />
                    }
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{file.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-300">{file.type}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-300">{file.size}</p>
                </div>
            })
        }
    </>);
}

export default UploadFiles;