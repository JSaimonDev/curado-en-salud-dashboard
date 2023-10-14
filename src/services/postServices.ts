import config from "../config"

export const createPost = (post: FormData) => { // change name to createOrUpdatePost
    fetch(config.API_URL + 'api/post', {
        method: 'POST',
        body: post
    })
        .then(response => {
        if (response.ok) console.log('Post successfully sent') 
        })
        .catch(response => {
        throw new Error(response.message)
    })
}

export const updatePost = (post: FormData, id: number) => {
        fetch(`${config.API_URL}api/post/${id}`, {
        method: 'PUT',
        body: post
    })
        .then(response => {
        if (response.ok) console.log('Post successfully updated') 
        })
        .catch(response => {
        throw new Error(response.message)
    })
}

export const getPostList = (pageSize: number,
    page: number
) => {
    const getPostListUrl = `${config.API_URL}api/post?take=${pageSize}&skip=${page * pageSize}`
    return fetch(getPostListUrl)
            .then(response => response.json())
        .then(data => {
                if (data.postList && Array.isArray(data.postList)) {
                    return data
                }
            })
}

export const getPost = (id: number) => {
    const getPostUrl = `${config.API_URL}api/post/${id}`
    const post = fetch(getPostUrl)
        .then(response => response.json())
        .then(data => {
            return data
        })
    return post
}

export const deletePost = (id: number) => {
    const deletePostUrl = `${config.API_URL}api/post/delete/${id}`
    const postIsDeleted = fetch(deletePostUrl, {
        method: 'DELETE'
    })
    .then(response => response.json())
        .then(data => {
        return data
        })
    return postIsDeleted
}