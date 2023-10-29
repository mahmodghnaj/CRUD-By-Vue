
const state = () => ({
    movies: [
        {
            id: 1,
            title: 'Before Of Me',
            description: 'Young and quirky Louisa "Lou" Clark (Emilia Clarke) moves from one job to the next to help her family make ends meet. Her cheerful attitude is put to the test when she becomes a caregiver for Will Traynor (Sam Claflin), a wealthy young banker left paralyzed from an accident two years earlier. Will`s cynical outlook starts to change when Louisa shows him that life is worth living.As their bond deepens, their lives and hearts change in ways neither one could have imagined.',
            year: '2016',
            actors: [
                {
                    id: 1,
                    name: 'Sam Claflin',
                    age: '37',
                    joinDate: '2015-5-5',
                    role: 'Background role'

                },
                {
                    id: 2,
                    name: 'Emilia Clarke',
                    age: '37',
                    joinDate: '2015-5-5',
                    role: 'Background role'
                }
            ]

        },
        {
            id: 2,
            title: 'The Best of Me',
            description: 'Amanda (Michelle Monaghan) and Dawson (James Marsden) were once high-school sweethearts. They have a bittersweet reunion when they return to their hometown for the funeral of a mutual, beloved friend. Seeing each other again after 20 years apart reignites the love they`ve never forgotten, but Amanda and Dawson soon discover that the forces that drove them apart when they were younger pose even more threats today. Based on the novel by Nicholas Sparks.',
            year: '2014',
            actors: [
                {
                    id: 1,
                    name: 'James Marsden',
                    age: '50',
                    role: 'Background role',
                    joinDate: '2020-1-1'

                },
                {
                    id: 2,
                    name: 'Michelle Monaghan',
                    age: '47',
                    role: 'Background role',
                    joinDate: '2020-1-5'
                },

            ]
        },

    ],
    filters: {
        title: '',
        year: '',
        numberOfActors: ''
    }
})
const getters = {
    movies: (state) => {
        const { title, year, numberOfActors } = state.filters;
        let filteredMovies = state.movies;
        if (title)
            filteredMovies = filteredMovies.filter(movie => movie.title.toLowerCase().includes(title.toLowerCase()));
        if (year)
            filteredMovies = filteredMovies.filter(movie => movie.year === year);
        if (numberOfActors)
            filteredMovies = filteredMovies.filter(movie => movie.actors.length >= numberOfActors);

        return filteredMovies;
    },
    filters: (state) => state.filters,


}

const mutations = {
    setMovies(state, value) {
        state.movies = value
    },
    setFilters(state, { key, value }) {
        if (key in state.filters) {
            state.filters[key] = value
        }
    },
    addMovie(state, movie) {
        movie.id = state.movies.length + 1;
        state.movies.push(movie);
    },
    removeMovie(state, movieId) {
        const index = state.movies.findIndex(movie => movie.id === movieId);
        if (index !== -1) {
            state.movies.splice(index, 1);
        }
    },
    updateMovie(state, updatedMovie) {
        const index = state.movies.findIndex(movie => movie.id === updatedMovie.id);
        if (index !== -1) {
            state.movies[index] = updatedMovie;
        }
    }
}

const actions = {}



export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}