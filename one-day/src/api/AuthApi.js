import ApiClient from "./ApiClient";

export {
    login,
    logout,
    signup,
    verifyToken,
    refreshToken,
}


async function login({ username, password }) {
    ApiClient.post("/auth/login/", { username, password }).then(
        (response) => {
        }
    )
}

async function logout({ username, password }) {
    ApiClient.post("/auth/logout/").then(
        (response) => {
        }
    )
}

async function signup({ username, email, password1, password2 }) {
    ApiClient.post("/auth/registration/", {
        username, email, password1, password2,
    }).then(
        (response) => {
        }
    )
}

async function verifyToken({ token }) {
    ApiClient.post("/token/verify/", { token }).then(
        (response) => {
        }
    )
}

async function refreshToken({ token }) {
    return ApiClient.post("/token/refresh/", { token }).then(
        (response) => response.data.access
    )
}
