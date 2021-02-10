export function elementTimestampCompareTo(element1, element2) {
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
    return posts;
}

export function addNewComment(posts, postId, comment) {
    var post = getPostById(posts, postId);
    if (post !== null) {post.comments.push(comment); post.commentsCount++}
    if (post.commentsLimit === 0) post.commentsLimit = 5;
    else post.commentsLimit++;
    return posts;
}

export function deletePostFilter(posts, id) {
    var array = posts.filter(p => p.id !== id);
    return array;
}

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

export function isZeroPostInteraction(post) {
    return !(post.likes.length || post.comments.length > 0);
}

export function isPostLiked(post, currentUserId) {
    return post.likes.filter(id => id === currentUserId).length > 0;
}


export function deleteComment(posts, postId, commentId) {
    var post = getPostById(posts, postId);
    if (post !== null) {
        if (commentId) post.comments = post.comments.filter(c => c.id !== commentId);
    }
    return posts;
}






















































