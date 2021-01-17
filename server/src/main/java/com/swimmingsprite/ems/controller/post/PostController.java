package com.swimmingsprite.ems.controller.post;

import com.swimmingsprite.ems.model.post.Comment;
import com.swimmingsprite.ems.model.post.Post;
import com.swimmingsprite.ems.model.user.AvatarUser;
import com.swimmingsprite.ems.model.user.AvatarUserImpl;
import com.swimmingsprite.ems.service.post.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import javax.validation.Valid;
import java.time.Instant;
import java.util.List;

@RestController
public class PostController {
    @Autowired
    PostService service;

    @Autowired
    EntityManager entityManager;

    //todo AUTHENTICATION in INTERCEPTOR, AUTHORIZATION in SERVICE

    @GetMapping("/posts/nextSequence/{lastPostTimestamp}")
    public List<Post> getNextPostsSequence(
            @PathVariable long lastPostTimestamp,
            @RequestHeader("userId") String userId) {
        return service.getNextPostsSequence(lastPostTimestamp, userId);
    }

    @PostMapping("/posts")
    public Post addPost(
            @Valid @RequestBody Post post,
            @RequestHeader("userId") String userId) {
        return service.save(post, userId);
    }

    @DeleteMapping("/posts/{id}")
    public void deletePost(
            @PathVariable String postId,
            @RequestHeader("userId") String userId) {
        service.deleteById(postId, userId);
    }

    // TODO: 16. 1. 2021 fetch current user from header token
    @PostMapping("/posts/{postId}/like")
    public void addLikeToPost(
            @PathVariable String postId,
            @RequestHeader("userId") String userId) {
        service.giveLike(postId, userId);
    }

    // TODO: 16. 1. 2021 fetch current user from header token
    @DeleteMapping("/posts/{postId}/like")
    public void removeLikeFromPost(
            @PathVariable String postId,
            @RequestHeader("userId") String userId) { service.removeLike(postId, userId); }

    @PostMapping("/posts/{postId}/comment")
    public void addCommentToPost(
            @PathVariable String postId,
            @Valid @RequestBody Comment comment,
            @RequestHeader("userId") String userId) {
        service.addComment(postId, comment, userId);
    }

    // TODO: 16. 1. 2021 fetch current user from header token
    @DeleteMapping("/posts/comment/{commentId}")
    public void deleteCommentFromPost(
            @PathVariable String commentId,
            @RequestHeader("userId") String userId) { service.deleteComment(commentId, userId); }



}
