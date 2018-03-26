import axios from "axios";

const instance = axios.create({
  baseURL: "https://my-book-notes.firebaseio.com/"
});

export default instance;