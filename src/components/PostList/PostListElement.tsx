const PostListElement =
    ({ className, content }: { className: string, content: string }) => {
        return (
            <div className={`${className} border border-greyLight1 rounded-md p-2 h-full border-opacity-30`}>
                {content}
            </div>
        );
    }

export default PostListElement;