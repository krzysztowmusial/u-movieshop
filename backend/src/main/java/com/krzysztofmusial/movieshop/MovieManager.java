package com.krzysztofmusial.movieshop;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class MovieManager {

    private MovieRepo movieRepo;

    @Autowired
    public MovieManager(MovieRepo movieRepo) {
        this.movieRepo = movieRepo;
    }

    public Optional<Movie> findById(Long id) {
        return movieRepo.findById(id);
    }

    public Iterable<Movie> findAll() {
        return movieRepo.findAll();
    }
}
