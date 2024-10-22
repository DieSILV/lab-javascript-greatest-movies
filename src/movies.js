// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let directorsArray = moviesArray.map(movie => movie.director)
    const uniqueDirectors = directorsArray.filter((director, index) => {
        return directorsArray.indexOf(director) === index
    })

    return uniqueDirectors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    return moviesArray.filter(
        (movie) => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
    ).length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (!moviesArray.length) {
        return 0
    } else {
        const averageMovie = moviesArray.reduce(
            (acc, movie) => acc + (movie.score || 0),
            0
        )
        return +(averageMovie / moviesArray.length).toFixed(2)
    }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaArray = moviesArray.filter(movie => movie.genre.includes('Drama'))

    if (!dramaArray.length) {
        return 0
    }

    const DramaScore = dramaArray.reduce((acc, movie) => {
        if (movie.score !== undefined) {
            return acc + movie.score
        } else {
            return acc
        }
    }, 0)

    const averageScore = DramaScore / dramaArray.length
    return Number(averageScore.toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesArrayCopy = [...moviesArray]
    //console.log(moviesArrayCopy)
    moviesArrayCopy.sort((a, b) => {
        if (a.year !== b.year) {
            return a.year - b.year
        }
        return a.title.localeCompare(b.title)
    })
    //console.log(moviesArray)
    return moviesArrayCopy
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const moviesCopy = [...moviesArray]
    moviesCopy.sort((a, b) => {
        return a.title.localeCompare(b.title)
    })
    const titles = moviesCopy.slice(0, 20).map(movie => movie.title)
    return titles
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    return moviesArray.map(movie => {
        // Crear una copia del objeto de la película para no mutar el original
        const movieCopy = { ...movie };

        // Separar las horas y minutos en partes
        const durationParts = movie.duration.match(/\d+h|\d+m/g); // Captura 'h' y 'm' en partes separadas
        let totalMinutes = 0;

        // Convertir cada parte a minutos
        durationParts.forEach(part => {
            if (part.includes('h')) {
                totalMinutes += parseInt(part) * 60; // Convertir horas a minutos
            } else if (part.includes('m')) {
                totalMinutes += parseInt(part); // Sumar los minutos
            }
        });

        // Asignar la duración total en minutos
        movieCopy.duration = totalMinutes;
        return movieCopy; // Devolver la copia con la duración modificada
    });
}


// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {

}
