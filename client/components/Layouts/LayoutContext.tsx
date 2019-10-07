import { createContext, useState, useContext, useEffect } from 'react'

export const LayoutContext = createContext({
  breadCrumb: [],
  title: '',
  setBreadCrumb: () => ({}),
  setTitle: () => ({}),
})

export function LayoutManager({ children }) {
  const [title, setTitle] = useState('Mercado Libre');
  const [breadCrumb, setBreadCrumb] = useState([]);

  return (
    <LayoutContext.Provider value={{ breadCrumb, setBreadCrumb, title, setTitle }}>
      {children}
    </LayoutContext.Provider>
  )
}
