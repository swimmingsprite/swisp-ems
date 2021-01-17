package com.swimmingsprite.ems.repository.post;

import com.swimmingsprite.ems.model.post.Comment;
import com.swimmingsprite.ems.model.post.Post;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PostRepository extends CrudRepository<Post, String> {
    //    @Query("select a from Post a where a.publishTime < ?1")
    @Query(nativeQuery = true, value = "select * from post where publish_time < 50000 limit 5")
    List<Post> getNextPostsSequence(long lastPostTimestamp);

    @Query(nativeQuery = true, value = "select * from comment where publish_time < 50000 limit 5")
    List<Comment> getNextCommentsSequence(long lastCommentTimestamp, String postId);
}
