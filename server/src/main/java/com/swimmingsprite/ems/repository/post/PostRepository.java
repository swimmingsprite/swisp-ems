package com.swimmingsprite.ems.repository.post;

import com.swimmingsprite.ems.model.post.Comment;
import com.swimmingsprite.ems.model.post.Post;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Set;

@Repository
public interface PostRepository extends CrudRepository<Post, String> {
    //    @Query("select a from Post a where a.publishTime < ?1")
    @Query(nativeQuery = true,
            value = "select * from post " +
                    "where publish_time < ?1 " +
                    "order by publish_time desc limit 5")
    Set<Post> getNextPostsSequence(long lastPostTimestamp);

    @Query(nativeQuery = true,
            value = "select * from comment " +
                    "where postId = ?2 " +
                    "and publish_time < ?1 " +
                    "order by publish_time desc limit 5")
    Set<Comment> getNextCommentsSequence(long lastCommentTimestamp, String postId);
}
