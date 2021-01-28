package com.swimmingsprite.ems.controller.post;

import com.swimmingsprite.ems.dto.post.PublishableDTO;
import com.swimmingsprite.ems.model.post.Comment;
import com.swimmingsprite.ems.model.post.Post;
import com.swimmingsprite.ems.service.post.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityManager;
import javax.validation.Valid;
import javax.validation.constraints.Size;
import java.util.Set;

@RestController
public class PostController {
    @Autowired
    PostService service;

    @Autowired
    EntityManager entityManager;

    //todo AUTHENTICATION in INTERCEPTOR, AUTHORIZATION in SERVICE

    @GetMapping("/posts/nextSequence/{lastPostTimestamp}")
    public Set<Post> getNextPostsSequence(
            @PathVariable long lastPostTimestamp) {
        return service.getNextPostsSequence(lastPostTimestamp);
    }

    @GetMapping("/posts/{postId}/nextSequence/{lastPostTimestamp}")
    public Set<Comment> getNextCommentsSequence(
            @PathVariable long lastPostTimestamp,
            @PathVariable String postId) {
        return service.getNextCommentsSequence(postId,lastPostTimestamp);
    }

    @PostMapping("/posts")
    public String addPost(
            @Valid @RequestBody @Size(min = 2) String postContent) {
        return service.addPost(postContent);
    }

    @DeleteMapping("/posts/{id}")
    public void deletePost(
            @PathVariable("id") String postId) {
        service.deletePostById(postId);
    }

    @PostMapping("/posts/{postId}/like")
    public void addLikeToPost(
            @PathVariable String postId) {
        service.addLikeToPost(postId);
    }

    @DeleteMapping("/posts/{postId}/like")
    public void removeLikeFromPost(
            @PathVariable String postId) { service.removeLikeFromPost(postId); }

    @PostMapping("/posts/{postId}/comment")
    public String addCommentToPost(
            @PathVariable String postId,
            @Valid @RequestBody PublishableDTO comment) {
        return service.addComment(postId, comment);
    }

    @DeleteMapping("/posts/comment/{commentId}")
    public void deleteCommentFromPost(
            @PathVariable String commentId) {
        service.deleteComment(commentId); }



}
