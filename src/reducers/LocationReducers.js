export default function (state = [], action){
    switch (action.type) {
      case 'ADD_LOCATION':
        return state.concat([action.data])
      case 'DELETE_LOCARION':
        return state.filter((post) => post.id !== action.id);
      default:
        return state;
    }
  };