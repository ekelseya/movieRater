export class API {
    static loginUser(body) {
        return fetch(`http://127.0.0.1:8000/auth/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( body )
        }).then(res => res.json() )
    }

    static registerUser(body) {
        return fetch(`http://127.0.0.1:8000/api/users/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify( body )
        }).then(res => res.json() )
    }

    static getMovies(){
        return fetch("http://127.0.0.1:8000/api/movies/", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }).then( res => res.json())
    }

    static getMovieDetail(movieID, token) {
        fetch(`http://127.0.0.1:8000/api/movies/${movieID}/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },
        }).then( res => res.json())
    }

    static updateMovie(movieID, body, token) {
        return fetch(`http://127.0.0.1:8000/api/movies/${movieID}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },
            body: JSON.stringify( body )
        }).then(res => res.json() )
    }

    static createMovie(body, token) {
        return fetch(`http://127.0.0.1:8000/api/movies/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },
            body: JSON.stringify( body )
        }).then(res => res.json() )
    }

    static deleteMovie(movieID, token) {
        return fetch(`http://127.0.0.1:8000/api/movies/${movieID}/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            }
        })
    }

    static getComments(commentID){
        return fetch(`http://127.0.0.1:8000/api/comments/${commentID}/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }).then( res => res.json())
    }

    static createComment(body, token) {
        return fetch(`http://127.0.0.1:8000/api/movies/comments/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },
            body: JSON.stringify(body )
        }).then(res => res.json() )
    }

    static updateComment(commentID, body, token) {
        return fetch(`http://127.0.0.1:8000/api/comments/${commentID}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },
            body: JSON.stringify( body )
        }).then(res => res.json() )
    }

    static deleteComment(commentID, token) {
        return fetch(`http://127.0.0.1:8000/api/comments/${commentID}/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            }
        })
    }

    static rateMovie(movieID, stars, token) {
        return fetch(`http://127.0.0.1:8000/api/movies/${movieID}/rate_movie/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },
            body: JSON.stringify( {stars} )
        })
    }
}
