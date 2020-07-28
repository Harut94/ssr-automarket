const { REACT_APP_LOCAL_SERVER_URL, REACT_APP_LOCAL_SOURCE_URL } = process.env;

export const url = {
    baseUrl: REACT_APP_LOCAL_SERVER_URL,
    carList: `${REACT_APP_LOCAL_SERVER_URL}/api/Cars`,
    car: `${REACT_APP_LOCAL_SERVER_URL}/api/Cars`
}