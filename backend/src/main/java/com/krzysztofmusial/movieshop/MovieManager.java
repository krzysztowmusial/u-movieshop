package com.krzysztofmusial.movieshop;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
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

    public List<Movie> findByCategory(String category) { return movieRepo.findByCategory(category); }

//

    public Movie save(Movie movie) {
        return movieRepo.save(movie);
    }

    @EventListener(ApplicationReadyEvent.class)
    public void fillDB() {
        save(new Movie(
                1L,
                "The Shawshank Redemption",
                "Dramat",
                LocalDate.of(1994, 9,10),
                "Adaptacja opowiadania Stephena Kinga. Niesłusznie skazany na dożywocie bankier, stara się przetrwać w brutalnym, więziennym świecie.",
                (float) 20
        ));
        save(new Movie(
                2L,
                "Intouchables",
                "Komedia",
                LocalDate.of(2011, 9,23),
                "Sparaliżowany milioner zatrudnia do opieki młodego chłopaka z przedmieścia, który właśnie wyszedł z więzienia.",
                (float) 15
        ));
        save(new Movie(
                3L,
                "The Green Mile",
                "Dramat",
                LocalDate.of(1999, 12,6),
                "Emerytowany strażnik więzienny opowiada przyjaciółce o niezwykłym mężczyźnie, którego skazano na śmierć za zabójstwo dwóch 9-letnich dziewczynek.",
                (float) 22
        ));
        save(new Movie(
                4L,
                "The Godfather",
                "Gangsterski",
                LocalDate.of(1972, 3,15),
                "Opowieść o nowojorskiej rodzinie mafijnej. Starzejący się Don Corleone pragnie przekazać władzę swojemu synowi.",
                (float) 30
        ));
        save(new Movie(
                5L,
                "12 Angry Men",
                "Dramat",
                LocalDate.of(1957, 4,10),
                "Dwunastu przysięgłych ma wydać wyrok w procesie o morderstwo. Jeden z nich ma wątpliwości dotyczące winy oskarżonego.",
                (float) 27
        ));
    }
}
