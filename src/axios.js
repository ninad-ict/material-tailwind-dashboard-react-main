import axios  from "axios";

const instance=axios.create({
    // baseURL:"http://localhost:8888/AAA/Code_0.2/"
    baseURL:"https://dhan.org/AAA/Code_0.2/"
});

export default instance;
