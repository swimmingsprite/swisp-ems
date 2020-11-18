export function elementTimestampCompareTo(element1, element2) {
    console.log("POST1 " + element1.timestamp);
    console.log("POST2 " + element2.timestamp);
    if (element1.timestamp > element2.timestamp) return 1;
    if (element1.timestamp < element2.timestamp) return -1;
    return 0;
}

function getPostById(posts, postId) {
    var filteredPost = posts.filter(p => p.id === postId);
    if (filteredPost.length > 0) {
        return filteredPost[0]
    }
    return null;
}

export function setCommentsLimit(posts, postId, value) {
    var post = getPostById(posts, postId);
    if (post !== null) post.commentsLimit = value;
    console.log("SETTING LIMIT TO: " + value);
    return posts;
}

export function addNewComment(posts, postId, comment) {
    var post = getPostById(posts, postId);
    if (post !== null) post.comments.unshift(comment);
    if (post.commentsLimit === 0) post.commentsLimit = 5;
    else post.commentsLimit++;
    return posts;
}

export function deletePostFilter(posts, id) {
    return posts.filter(p => p !== id);
}  //todo refactor

export function getStatePostLikeToggle(posts, postId, userId) {
    var post = getPostById(posts, postId);
    if (post === null) return posts;


    if (post.likes.filter(l => l === userId).length > 0) {
        post.likes = post.likes.filter(l => l !== userId);
        return posts;
    }
    post.likes.push(userId);
    return posts;
}