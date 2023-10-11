import PostForm from "../components/PostForm/PostForm";

const NewPost = () => {
    return (
        <main className='flex justify-center h-full'>
            <div className='flex flex-col gap-6 customContainer bg-white rounded-2xl h-full p-6'>
                <PostForm />
            </div>
        </main>
    );
}

export default NewPost;