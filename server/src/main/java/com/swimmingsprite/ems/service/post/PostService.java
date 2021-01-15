package com.swimmingsprite.ems.service.post;

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

    public List<Post> getNextPostsSequence(long lastPostTimestamp) {
        return repository.getNextPostsSequence(lastPostTimestamp);
    }

    public Post save(Post post) {
        return repository.save(post);
    }

    public void delete(String id) {
        repository.deleteById(id);
    }
}
