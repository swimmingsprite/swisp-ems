package com.swimmingsprite.ems.controller.post;

import com.swimmingsprite.ems.model.post.Post;
import com.swimmingsprite.ems.service.post.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
public class PostController {
    @Autowired
    PostService service;

    @GetMapping("/posts/nextSequence/{lastPostTimestamp}")
    public List<Post> getNextPostsSequence(@PathVariable long lastPostTimestamp) {
        return service.getNextPostsSequence(lastPostTimestamp);
    }

    @PostMapping("/posts")
    public Post addPost(@Valid @RequestBody Post post) {
        return service.save(post);
    }

    @DeleteMapping("/posts/{id}")
    public void deletePost(@PathVariable String id) {
        service.delete(id);
    }
}
