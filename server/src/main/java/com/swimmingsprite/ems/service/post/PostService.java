package com.swimmingsprite.ems.service.post;

import com.swimmingsprite.ems.model.post.Comment;
import com.swimmingsprite.ems.model.post.Post;
import com.swimmingsprite.ems.repository.post.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostService {
    @Autowired
    PostRepository repository;

    public List<Post> getNextPostsSequence(long lastPostTimestamp, String userId) {
        return repository.getNextPostsSequence(lastPostTimestamp);
    }

    public Post save(Post post, String userId) {
        return repository.save(post);
    }

    public void deleteById(String postId, String id) {
        repository.deleteById(id);
    }

    public void giveLike(String postId, String userId) {
        //authorization layer
    }

    public void removeLike(String postId, String userId) {
        //authorization layer
    }

    public void addComment(String postId, Comment comment, String userId) {
        //authorization layer
    }

    public void deleteComment(String commentId, String userId) {
        //authorization layer
    }
}
