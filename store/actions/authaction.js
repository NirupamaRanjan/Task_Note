export const SIGN_UP = "SIGN_UP";

export const signUp = (email, password) => {
  return async (dispatch) => {
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDGX-5s-hApFmuFCioAHKSFzgIV2KIMqvA",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
      }
    );
    if (!response.ok) {
      throw new Error("Something went wrong");
    }

    const resData = await response.json();
    console.log(resData);
    dispatch({
      type: SIGN_UP,
      signUpData: { email: email, password: password },
    });
  };
};
