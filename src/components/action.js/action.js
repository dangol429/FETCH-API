export const fetchDataSuccess = (data) => {
    return {
      type: 'FETCH_DATA_SUCCESS',
      payload: Array.isArray(data) ? data : [data],
    }
  }
  
  export const fetchDataFailure = (error) => {
    return {
      type: 'FETCH_DATA_FAILURE',
      payload: error,
    }
  }
  
  export const fetchData = () => {
    return (dispatch) => {
        fetch('https://random-data-api.com/api/v2/users')
            .then(response => response.json())
            .then(data => {
                const dataArray = Array.isArray(data) ? data : [data];
                dispatch(fetchDataSuccess(dataArray))
            })
            .catch(error => {
                dispatch(fetchDataFailure(error.message))
            })

    }
}