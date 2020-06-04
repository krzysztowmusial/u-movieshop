package com.krzysztofmusial.movieshop;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/api/movies")
public class MovieApi {

    private MovieManager movieManager;

    @Autowired
    public MovieApi(MovieManager movieManager) {
        this.movieManager = movieManager;
    }

    @GetMapping("/all")
    public Iterable<Movie> findAll() {
        return movieManager.findAll();
    }

    @GetMapping
    public Optional<Movie> findById(@RequestParam Long id) {
        return movieManager.findById(id);
    }

}
