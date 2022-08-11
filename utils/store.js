import React, { useContext, useCallback, useReducer, createContext } from 'react'
import set from 'lodash-es/set'
import produce from 'immer'

const initialState = {
  news: {
    bilibili: [],
    weibo: [],
    baidu: [],
    zhihu: [],
    toutiao: [],
  },
}

const StateContext = createContext(initialState)
const UpdateContext = createContext(null)

export const ContextProvider = ({ children }) => {
  const [view, setView] = useReducer(produce, initialState)
  const viewSet = useCallback((path, value) => {
    setView(produce((draft) => set(draft, path, value)))
  }, [])

  return (
    <UpdateContext.Provider value={viewSet}>
      <StateContext.Provider value={view}>{children}</StateContext.Provider>
    </UpdateContext.Provider>
  )
}

export function useView() {
  return [useContext(StateContext), useContext(UpdateContext)]
}
