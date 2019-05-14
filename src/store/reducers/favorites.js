const INITIAL_STATE = [];

export default function favorites(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return [
        ...state,
        {
          id: state.length + 1,
          name: 'facebook/react',
          description:
            'A declarative, efficient, and flexible JavaScript library for building user interfaces.',
          url: 'https://github.com/facebook/react',
        },
      ];
    default:
      return state;
  }
}
