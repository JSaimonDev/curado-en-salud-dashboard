import { useParams } from "react-router-dom";
import PostForm from "../components/PostForm/PostForm";

const EditPost = () => {
    const id = Number(useParams().id)
    return (
        <main className='flex justify-center h-full'>
            <div className='flex flex-col gap-6 customContainer bg-white   h-full p-6'>
                <PostForm id={id} />
            </div>
        </main>

    );
}

export default EditPost;