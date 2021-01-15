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

    @GetMapping("/posts")
    public List<Post> getNextPostsSequence(long lastTimestamp) {
        return service.getNextPostsSequence(lastTimestamp);
    }

    @PostMapping
    public Post addPost(@Valid @RequestBody Post post) {
        return service.save(post);
    }

}
