import axios from 'axios'

const initialFetch = store => next => action => {
  /*
  Pass all actions through by default
  */
  next(action)
  switch (action.type) {
    case 'GET_COLUMN_HEADERS':
      /*
    In case we receive an action to send an API request, send the appropriate request
    */
   
      axios.get('/api/data')
        .then((res:any) => {
            const variableNames = res.data.map(column => {
              return column.Field.charAt(0).toUpperCase() + column.Field.substr(1)
            }).filter(field => field !== 'Age').sort();

            // console.log('initialFetch middleware - variables', variableNames);

            /*
            Once data is received, dispatch an action telling the application
            that data was received successfully, along with the data
            */
            next({
              type: 'RETRIEVED_COLUMN_HEADERS',
              variableNames
            })
        })
       .catch((err:any) => {
          /*
          in case there is any error, dispatch an action containing the error
          */
         
        //  console.log('initialFetch middleware - err', err);

          return next({
            type: 'CANNOT_RETRIEVE_COLUMN_HEADERS',
            err
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

export default initialFetch;