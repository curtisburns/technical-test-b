import axios from 'axios'

const fetchData = store => next => action => {
  /*
  Pass all actions through by default
  */
  next(action)
  switch (action.type) {
    case 'GET_DEMOGRAPHIC_DATA':
      /*
    In case we receive an action to send an API request, send the appropriate request
    */
      axios.get('/api/data')
        .then((err, res) => {
        if (err) {
          /*
          in case there is any error, dispatch an action containing the error
          */
          return next({
            type: 'CANNOT_RETRIEVE_DATA',
            err
          })
        }
        const data = JSON.parse(res.data)
        /*
        Once data is received, dispatch an action telling the application
        that data was received successfully, along with the parsed data
        */
        next({
          type: 'RETRIEVED_DATA',
          data
        })
      })
      break
    /*
  Do nothing if the action does not interest us
  */
    default:
      break
  }
}

export default fetchData;