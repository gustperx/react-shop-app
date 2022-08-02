import axios from 'axios'

export const uploadImage = async (file: any) => {

    if (!file) return ""

    try {
        const URL = import.meta.env.VITE_CLOUDINARY_UPLOAD_URL

        const formData = new FormData()
        formData.append('file', file);
        formData.append('upload_preset', import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET)

        const { data } = await axios.post(URL, formData)

        return data.secure_url

    } catch (error) {
        console.log('Error al cargar la imagen')
        console.log(error)
        return ""
    }
}