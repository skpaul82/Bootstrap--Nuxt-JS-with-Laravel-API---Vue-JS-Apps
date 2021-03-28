import axios from "axios";

// create a store
export const state = () => ({
    posts: {},
    photos: {}
});

// getters
export const getters = {
    posts(state) {
        return state.posts;
    },

    photos(state) {
        return state.photos;
    }
};

// mutations
export const mutations = {
    SET_POSTS(state, posts) {
        state.posts = posts;
    },

    SET_PHOTOS(state, photos) {
        state.photos = photos;
    }
};

// actions
export const actions = {
    // NuxtServerInit Method
    /* async nuxtServerInit({ commit }) {
        let { data } = await axios.get(
            "https://jsonplaceholder.typicode.com/posts"
        );
        commit("SET_POSTS", data);
    } */

    setPosts({ commit }, posts) {
        commit("SET_POSTS", posts);
    },

    setPhotos({ commit }, photos) {
        commit("SET_PHOTOS", photos);
    }
};
