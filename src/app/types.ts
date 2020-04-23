export type Movie = {
    id: number,
    name: string,
    score: number,
    author: Author
}

export type Author = {
    id: number,
    name: string,
    email: string,
    movies: Movie[]
}

export type Query = {
    allMovie: Movie[]
}

export type QueryAllAuthors = {
    allAuthors: Author[]
}