package com.swimmingsprite.ems.service.post;

import com.swimmingsprite.ems.authorization.exception.AccessDeniedException;
import com.swimmingsprite.ems.dto.post.CommentDTO;
import com.swimmingsprite.ems.model.post.Comment;
import com.swimmingsprite.ems.model.post.Post;
import com.swimmingsprite.ems.model.user.CurrentUser;
import com.swimmingsprite.ems.repository.post.PostRepository;
import org.springframework.stereotype.Service;

import java.security.InvalidParameterException;
import java.util.Optional;
import java.util.Set;

@Service
public class PostService {
    final PostRepository repository;
    final CurrentUser currentUser;

    public PostService(PostRepository repository, CurrentUser currentUser) {
        this.repository = repository;
        this.currentUser = currentUser;
    }

    public Set<Post> getNextPostsSequence(long lastPostTimestamp) {
        return repository.getNextPostsSequence(lastPostTimestamp);
    }

    public Set<Comment> getNextCommentsSequence(String postId, long lastCommentTimestamp) {
        return repository.getNextCommentsSequence(lastCommentTimestamp, postId);
    }

    public void addPost(Post post) {
        repository.save(post);
    }

    public void deletePostById(String postId) {
        Optional<Post> optPost = repository.findById(postId);
        if (optPost.isPresent()) {
            if (optPost.get().getAuthor().getId().equals(currentUser.getUser().getId())
                    || currentUser.getUser().getUserPermission().equals("ADMIN")) {
                repository.deleteById(postId);
            } else {
                throw new AccessDeniedException("Unauthorized.");
            }
        } else throw new InvalidParameterException("Post with id: " + postId + " does not exist.");

    }

    public void addLikeToPost(String postId) {
        //authorization layer
    }

    public void removeLikeFromPost(String postId) {
        //authorization layer
    }

    public void addComment(String postId, CommentDTO comment) {
        //authorization layer
    }

    public void deleteComment(String commentId) {
        //authorization layer
    }
}
