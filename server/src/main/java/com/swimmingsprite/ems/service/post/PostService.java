package com.swimmingsprite.ems.service.post;

import com.swimmingsprite.ems.authentication.exception.NotFoundException;
import com.swimmingsprite.ems.authorization.exception.AccessDeniedException;
import com.swimmingsprite.ems.dto.post.PublishableDTO;
import com.swimmingsprite.ems.model.post.Comment;
import com.swimmingsprite.ems.model.post.Post;
import com.swimmingsprite.ems.model.user.CurrentUser;
import com.swimmingsprite.ems.repository.post.CommentRepository;
import com.swimmingsprite.ems.repository.post.PostRepository;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.Optional;
import java.util.Set;

@Service
public class PostService {
    final PostRepository postRepository;
    final CurrentUser currentUser;
    final CommentRepository commentRepository;

    public PostService(PostRepository postRepository,
                       CurrentUser currentUser,
                       CommentRepository commentRepository) {
        this.postRepository = postRepository;
        this.currentUser = currentUser;
        this.commentRepository = commentRepository;
    }

    public Set<Post> getNextPostsSequence(long lastPostTimestamp) {
        return postRepository.getNextPostsSequence(lastPostTimestamp);
    }

    public Set<Comment> getNextCommentsSequence(String postId, long lastCommentTimestamp) {
        return postRepository.getNextCommentsSequence(lastCommentTimestamp, postId);
    }

    public String addPost(String content) {
        Post post = new Post(currentUser.getUser(), Instant.now(), content, null, null);
        return postRepository.save(post).getId();
    }

    public void deletePostById(String postId) {
        Optional<Post> optPost = postRepository.findById(postId);
        if (optPost.isPresent()) {
            if (optPost.get().getAuthor().getId().equals(currentUser.getUser().getId())
                    || currentUser.getUser().getUserPermission().equals("ADMIN")) {
                postRepository.deleteById(postId);
            } else {
                throw new AccessDeniedException("Unauthorized.");
            }
        } else throw new NotFoundException("Post with id: " + postId + " not found.");

    }

    public void addLikeToPost(String postId) {
        Optional<Post> optPost = postRepository.findById(postId);
        if (optPost.isPresent()) {
            Post post = optPost.get();
            post.getLikes().add(currentUser.getUser());
            postRepository.save(post);
        }
        else throw new NotFoundException("Post with id: " + postId + " not found.");
    }

    public void removeLikeFromPost(String postId) {
        Optional<Post> optPost = postRepository.findById(postId);
        if (optPost.isPresent()) {
            Post post = optPost.get();
            post.getLikes().remove(currentUser.getUser());
            postRepository.save(post);
        }
        else throw new NotFoundException("Post with id: " + postId + " not found.");
    }

    public String addComment(String postId, PublishableDTO publishableDTO) {
        Optional<Post> optPost = postRepository.findById(postId);
        if (optPost.isPresent()) {
            Post post = optPost.get();
            Comment comment = new Comment(
                    post,
                    currentUser.getUser(),
                    Instant.now(),
                    publishableDTO.getContent());
            post.getComments().add(comment);
            postRepository.save(post);
            return comment.getId();
        }
        else throw new NotFoundException("Post with id: " + postId + " not found.");
    }

    /*public void deleteComment(String commentId) {
        Optional<Comment> optComment = commentRepository.findById(commentId);
        if (optComment.isPresent()) {
            Post post = optComment.get().getPost();
            Comment comment = optComment.get();
            if (comment.getAuthor().getId().equals(currentUser.getUser().getId())
                    || currentUser.getUser().getUserPermission().equals("ADMIN")) {
                post.getComments().remove(comment);
                postRepository.save(post);
            } else {
                throw new AccessDeniedException("Unauthorized.");
            }
        } else throw new NotFoundException("Comment with id: " + commentId + " not found.");
    }*/

    public void deleteComment(String commentId) {
        if (commentRepository.existsById(commentId)) {
            Comment comment = commentRepository.findById(commentId).get();
            if (comment.getAuthor().getId().equals(currentUser.getUser().getId())
                    || currentUser.getUser().getUserPermission().equals("ADMIN")) {
                commentRepository.delete(comment);
            } else {
                throw new AccessDeniedException("Unauthorized.");
            }
        } else throw new NotFoundException("Comment with id: " + commentId + " not found.");
    }
}
