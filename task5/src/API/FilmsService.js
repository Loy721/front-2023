import axios from "axios";

export class FilmsService {
    static async getAll() {
        try {
            const response = await axios.get("http://localhost:3000/movies");
            return response.data;
        } catch (e) {
            console.log(e)
        }
    }

    static async createFilm(film) {
        try {
            const response = await axios.post("http://localhost:3000/movies", film);
        } catch (e) {
            console.log(e)
        }
    }

    static async getFilm(id) {
        try {
            const response = await axios.get("http://localhost:3000/movies/" + id);
            return response.data;
        } catch (e) {
            console.log(e)
        }
    }

    static async editFilm(id, film) {
        try {
            const response = await axios.put("http://localhost:3000/movies/" + id, film);
            return response.data;
        } catch (e) {
            console.log(e)
        }
    }
}