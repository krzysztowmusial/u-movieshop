package com.krzysztofmusial.movieshop;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MovieRepo extends CrudRepository<Movie, Long> {

    @Query(value = "SELECT * FROM movie WHERE category = ?1", nativeQuery = true)
    List<Movie> findByCategory(String category);

}
