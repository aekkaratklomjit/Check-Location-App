export const addLocation = (data) => 
{
   return {
        type: 'ADD_LOCATION',
        payload: data,
   }
}
export const editLocation = (id) => 
{
   return {
        type: 'EDIT_LOCATION',
        payload: id,
   }
}
export const updateLocation = (data,id) => 
{
   return {
        type: 'UPDATE_LOCATION',
        payload: data,
        id :id
   }
}
export const deleteLocation = (id) => 
{
   return {
        type: 'DELETE_LOCATION',
        payload: id,
   }
}
export const addCurrentLocation = (data) => 
{
   return {
        type: 'ADD_CURRENT_LOCATION',
        payload: data,
   }
}