export function postCompareTo(post, post2) {
    console.log("POST1 " + post.timestamp);
    console.log("POST2 " + post2.timestamp);
    if (post.timestamp > post2.timestamp) return 1;
    if (post.timestamp < post2.timestamp) return -1;
    return 0;
}