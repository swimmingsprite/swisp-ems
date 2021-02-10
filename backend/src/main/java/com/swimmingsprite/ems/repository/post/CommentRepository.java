package com.swimmingsprite.ems.repository.post;

import com.swimmingsprite.ems.entity.post.Comment;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CommentRepository extends CrudRepository<Comment, String> {

}
