import { FC } from 'react'

interface Props {
    onFileSelect: (file: any) => void
}

export const FileUploader : FC<Props> = ({ onFileSelect }) => {

    const handleFileInput = (e: any) => {
        // handle validations
        if (!e.target.files[0]) return

        const file = e.target.files[0];
        const fileSize = file.size / 1024 / 1024; // in MiB

        if (fileSize > 1) {
            return alert('Imagen no puede ser mayor a 1MB')
        }

        onFileSelect(file)
    }

    return (
        <div className="form-control w-full">
            <label className="label">
                <span className="label-text">Image file</span>
            </label>
            <input type="file" onChange={handleFileInput} accept="image/png, image/jpeg" />
        </div>
    )
}