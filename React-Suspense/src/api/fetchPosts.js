import wrapePromise from "../Utils/wrapPromise";

const fetchPosts = (url) => {
    const response = fetch(url).then(res => res.json())

    return wrapePromise(response);
}

export default fetchPosts;