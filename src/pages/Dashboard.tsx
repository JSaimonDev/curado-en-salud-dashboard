import { Link } from 'react-router-dom'
import PostList from '../components/PostList';
const Dashboard = () => {
    return (
        <main className='flex justify-center h-full'>
            <div className='flex flex-col gap-6 customContainer bg-white   h-full p-6 rounded-2xl'>
                <Link to='/new-post'>
                    <button className='rounded-2xl bg-main text-white font-bold py-2 px-4'>Nuevo Post</button>
                </Link>
                <PostList />
            </div>
        </main>
    )
}

export default Dashboard;

