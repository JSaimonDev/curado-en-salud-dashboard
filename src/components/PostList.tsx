import { useEffect, useState } from "react";
import { getPostList } from "../services/postServices";
import { FetchedPost } from "../types";
import PostListElement from "./PostList/PostListElement";
import { Link } from "react-router-dom";
import Pagination from "./PostList/Pagination";
import ConfirmDeleteModal from "./PostList/ConfirmDeleteModal";

const PAGE_SIZE = 20

const PostList = () => {
    const [postList, setPostList] = useState<FetchedPost[]>([])
    const [page, setPage] = useState(0)
    const [numberOfPages, setNumberOfPages] = useState(1)
    const [showModal, setShowModal] = useState(false)
    const [deleteId, setDeleteId] = useState<number>()

    const handleClickX = (id: number) => {
        setDeleteId(id)
        setShowModal(true)
    }

    useEffect(() => {
        const gettingData = async () => {
            const data = await getPostList(PAGE_SIZE, page) as { postList?: FetchedPost[], numberOfPages?: number }
            if (data.postList && Array.isArray(data.postList)) setPostList(data.postList)
            if (data.numberOfPages != undefined && typeof numberOfPages === 'number') setNumberOfPages(data.numberOfPages)
        }
        gettingData()
    }, [page, numberOfPages])

    return (
        <section className="flex flex-col justify-center w-full gap-4">
            <ConfirmDeleteModal setShowModal={setShowModal} showModal={showModal} id={deleteId} />
            {postList && postList.map((post: FetchedPost) => {
                return (
                    <div className="flex w-full gap-2" key={post.id}>
                        <div className="basis-1/4">
                            <PostListElement content={post.title} className='' />
                        </div>
                        <div className="basis-1/4">
                            <PostListElement content={post.category.name} className='' />
                        </div>
                        <div className="basis-1/4">
                            <PostListElement content='Subcategoria' className='' />
                        </div>
                        <div className="basis-1/4 flex justify-center items-center  ml-4 gap-2">
                            <Link to={`/post/${post.id}`} className="h-full w-full">
                                <button className=" bg-main font-bold text-white flex justify-center items-center w-full h-full rounded-xl basis-2/3">
                                    Editar
                                </button>
                            </Link>
                            <button className=" bg-red font-bold text-white flex justify-center items-center w-full h-full rounded-xl basis-1/3" onClick={() => handleClickX(post.id)}>
                                X
                            </button>

                        </div>
                    </div>
                )
            })}
            <div className="flex justify-center">
                <Pagination numberOfPages={numberOfPages} page={page} setPage={setPage} />
            </div>
        </section>
    );
}

export default PostList;