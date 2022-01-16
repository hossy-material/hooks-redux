export type ActionType = 'CREATE_EVENT' | 'DELETE_EVENT' | 'DELETE_ALL_EVENTS'

export type Action = {
  type : ActionType
  id?: number
  title?: string
  body?: string
}

export type EventType = Omit<Action, 'type'>

const events = (state: EventType[] = [], action: Action) => {
  switch(action.type) {
    case 'CREATE_EVENT':
      const event: EventType = {
        id: state.length === 0 ? 1 : state[state.length - 1].id as number + 1,
        title: action.title,
        body: action.body
      }
      return [...state, event]
    case 'DELETE_EVENT':
      return state.filter(event => event.id !== action.id)
    case 'DELETE_ALL_EVENTS':
      return []
    default:
      return state
  }
}

export default events;