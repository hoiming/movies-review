import axios from 'axios';


class MovieDataService {
    getAll(page = 0){
        return axios.get(`http://120.79.88.254:5000/api/v1/movies?page=${page}`)
    }
    get(id){
        return axios.get(`http://120.79.88.254:5000/api/v1/movies/id/${id}`)
    }
    find(query, by="title", page = 0){
        return axios.get(`http://120.79.88.254:5000/api/v1/movies?${by}=${query}&page=${page}`)
    }

    createReview(data){
        return axios.post("http://120.79.88.254:5000/api/v1/movies/review", data)
    }

    updateReview(data){
        return axios.put("http://120.79.88.254:5000/api/v1/movies/review", data)
    }

    deleteReview(id, userId){
        return axios.delete("http://120.79.88.254:5000/api/v1/movies/review", {data:{id, user_id: userId}})
    }

    getRatings(){
        return axios.get("http://120.79.88.254:5000/api/v1/movies/ratings")
    }
}

export default  new MovieDataService();