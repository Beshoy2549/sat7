import axios from "axios";

const api = axios.create({
  baseURL: "https://sat7.faulio.com/api/v1/",
});

api.interceptors.request.use((config) => {
  let authToken = useCookie('authUser') //usecookie to call end point from server side

  if (authToken.value) {
    config.headers.Authorization = `${authToken.value.auth_token}`;
  }


  return config;
});

api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const router = useRouter();
    if (error.response) {
      console.error(
        "Response Error:",
        error.response.status,
        error.response.data
      );
      if (error.response.status == 401) {
        router.push('/auth/sign-in')
      }
    } else if (error.request) {
      console.error("Request Error:", error.request);
    } else {
      console.error("Request Setup Error:", error.message);
    }
    return Promise.reject(error);
  }
);

export default api;
