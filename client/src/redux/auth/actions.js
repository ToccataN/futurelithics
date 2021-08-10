import * as Types from "./types";
const api_url = process.env.REACT_APP_API_URL;

export const requestLogin = (creds) => {
  return {
    type: Types.LOGIN_REQUEST,
    creds,
  };
};

export const receiveLogin = (response) => {
  return {
    type: Types.LOGIN_SUCCESS,
    response: response,
  };
};

export const failedLogin = (response) => {
  return {
    type: Types.LOGIN_FAILURE,
    response: response,
  };
};

export const loginUser = (creds) => (dispatch) => {
  const user = { username: creds.username };
  dispatch(requestLogin(user));

  return fetch("" + api_url + "users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(creds),
  })
    .then((res) => {
      if (res.ok) {
        return res;
      } else {
        return {
          success: false,
          status: "error",
          message: `Error: ${res.status}: ${res.statusText}`,
        };
      }
    })
    .then((res) => {
      try {
        return res.json();
      } catch {
        return res;
      }
    })
    .then((res) => {
      if (res.success) {
        console.log(res.message)
        localStorage.setItem("token", res.token);
        localStorage.setItem("creds", JSON.stringify(res.user));
        dispatch(receiveLogin(res));
      } else {
        dispatch(failedLogin(res));
      }
    })
    .catch((err) => console.log(err));
};

export const requestLogout = () => {
  return {
    type: Types.LOGOUT_REQUEST,
  };
};

export const receiveLogout = () => {
  return {
    type: Types.LOGOUT_SUCCESS,
  };
};

// Logs the user out
export const logoutUser = () => (dispatch) => {
  dispatch(requestLogout());
  localStorage.removeItem("token");
  localStorage.removeItem("creds");
  dispatch(receiveLogout());
};