import { ChangeEvent, FC, FormEvent, useRef } from 'react'

interface Props {
    onFileSelect: (file: any) => void
}

export const FileUploader : FC<Props> = ({ onFileSelect }) => {
    const fileInput = useRef(null)

    const handleFileInput = (e: any) => {
        // handle validations
        if (!e.target.files[0]) return

        const file = e.target.files[0];
        const fileSize = file.size / 1024 / 1024; // in MiB

        if (fileSize > 1) {
            return alert('Muy pesada')
        }

        onFileSelect(file)
    }

    return (
        <div className="file-uploader">
            <input type="file" onChange={handleFileInput} accept="image/png, image/jpeg" />
        </div>
    )
}