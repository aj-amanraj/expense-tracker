import React, { createContext, useState } from 'react'

/**
 * context to handle auto refresh 
 */

export const ExpenseContext = createContext({
    reload: false,
    onReload: () => {}
})

function ExpenseProvider({children}) {
    const [reload, setReload] = useState(false);

    const handleReload = React.useCallback(() => setReload(prev => !prev));     //function to toogle state
  return (
    <ExpenseContext.Provider value={{
        reload, onReload: handleReload
    }} >
        {children}
    </ExpenseContext.Provider>
  )
}

export default ExpenseProvider