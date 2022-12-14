import axios from "axios";

export class ProductService {

    // baseUrl = "http://localhost:8080/api/productos/";
    baseUrl = "https://nuevo-heroku.herokuapp.com//api/productos/";

    create(producto){
        return axios.post(this.baseUrl+"producto/", producto).then(res => res.data);
    }

    readAll(){
        return axios.get(this.baseUrl).then(res => res.data);
    }

    update(producto){
        return axios.put(this.baseUrl+"producto/"+producto._id, producto).then(res => res.data);
    }

    delete(id){
        return axios.delete(this.baseUrl+"producto/"+id).then(res => res.data);
    }
}