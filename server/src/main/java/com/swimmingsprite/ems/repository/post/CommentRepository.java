package com.swimmingsprite.ems.repository.post;

import com.swimmingsprite.ems.model.post.Comment;
import com.swimmingsprite.ems.model.post.Post;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Set;

@Repository
public interface CommentRepository extends CrudRepository<Comment, String> {

}
