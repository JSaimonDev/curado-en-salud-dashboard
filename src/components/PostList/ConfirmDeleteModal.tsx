import { deletePost } from "../../services/postServices";

const ConfirmDeleteModal = ({ setShowModal, showModal, id, onDelete }:
    { setShowModal: React.Dispatch<React.SetStateAction<boolean>>, showModal: boolean, id: number | undefined, onDelete: () => void }) => {
    const handleDelete = async () => {
        setShowModal(false)
        if (id) {
            const deletedPost = await deletePost(id)
            console.log(deletedPost)
            onDelete()
        }
    }
    return (
        <div className={`${showModal ? 'visible' : 'hidden'} absolute right-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
         w-[400px] h-[250px] flex flex-col justify-center items-center bg-white shadow-lg
         p-10 text-center gap-10 rounded-2xl`}>
            ¿Estás seguro de que quieres borrar este post?
            <div className="flex gap-6">
                <button className="w-[100px] h-[50px] bg-red rounded-xl text-white" onClick={handleDelete} >
                    Borrar
                </button>
                <button className="w-[100px] h-[50px] bg-main rounded-xl text-white" onClick={() => setShowModal(false)}>
                    Cancelar
                </button>
            </div>
        </div>
    );
}

export default ConfirmDeleteModal;