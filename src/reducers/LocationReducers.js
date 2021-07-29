export default function (state = [], action){
    switch (action.type) {
      case 'ADD_LOCATION':
        return state.concat([action.payload])
      case 'EDIT_LOCATION':
        return state.map((location)=>location.id===action.payload ? {...location, editing:!location.editing}:location)
      case 'UPDATE_LOCATION':
        return state.map((location) => {
          if (location.id === action.id) {
               return {
                   ...location,
                   latitude: action.payload.newLatiude,
                   longitude: action.payload.newLongitude,
                   editing: !location.editing
               }
           } else return location;
      })
      case 'DELETE_LOCATION':
        return state.filter((location) => location.id !== action.payload);
      default:
        return state;
    }
  };