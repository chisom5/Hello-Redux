//  default state when no action is performed

export default (state, action) => {
    console.log(action);

    switch (action.type) {

        case 'SET_TEXT':
            // do something
            return {
                ...state,
                tech: action.payload
            }

        default:
            return state;

    }

}