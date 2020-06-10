package com.krzysztofmusial.movieshop;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class MovieApi {

    private MovieManager movieManager;

    @Autowired
    public MovieApi(MovieManager movieManager) {
        this.movieManager = movieManager;
    }

    @RequestMapping("/api/movies/all")
    public Iterable<Movie> findAll() {
        return movieManager.findAll();
    }

    @RequestMapping("/api/movies/id/{id}")
    public Optional<Movie> findById(@PathVariable Long id) { return movieManager.findById(id); }

    @RequestMapping("/api/movies/category/{category}")
    public List<Movie> findByCategory(@PathVariable String category) { return movieManager.findByCategory(category); }

}
