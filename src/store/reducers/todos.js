const INITIAL_STATE = [{ id: 1, text: 'Lanchar' }, { id: 2, text: 'Assistir Game of Thrones' }];

export default function todos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: state.length + 1, text: action.payload.text }];
    default:
      return state;
  }
}
