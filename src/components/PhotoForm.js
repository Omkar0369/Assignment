import React,{useState} from 'react'

const PhotoForm = ({addPhoto})=>{
    const [photo, setPhoto] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        if (photo && description){
            addPhoto({photo,description})
            setPhoto('')
            setDescription('');

        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Upload photo having Jpeg link</label>
                <input 
                    type="text"
                    placeholder='URL'
                    value={photo}
                    onChange={(e)=>setPhoto(e.target.value)}
                />
            </div>
            <div>
                <label>Description</label>
                <input 
                    type="text"
                    placeholder='Description'
                    value={description}
                    onChange={(e)=>setDescription(e.target.value)}
                />
            </div>
            <button type="submit">Add Photo</button>
        </form>
    )
}

export default PhotoForm;