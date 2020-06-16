//Example redux 'action' data returned
// const data = {
//     type: 'MOVIES_LIST',
//     payload: [
//         {
//             id:182, 
//             name: 'pulp fiction'
//         }
//     ]
// }


//Reducer checks different action types and returns the payload data for each type.
export default function(state = null, action) {
    switch(action.type) {
        case 'MOVIES_LIST':
            return action.payload
        // must provide a default state 
        default: 
            return state;
    }
}