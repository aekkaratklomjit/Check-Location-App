export default function (state = [], action){
    switch (action.type) {
      case 'ADD_CURRENT_LOCATION':
        return {
          blogsCurrentLocation:action.payload
        }
      default:
        return state;
    }
  };