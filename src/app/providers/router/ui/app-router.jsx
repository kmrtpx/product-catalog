import { Route, Routes } from 'react-router-dom'
import { Suspense } from 'react'
import { ProductsPage } from '../../../../pages/products'

export function AppRouter () {
  return (<Suspense fallback={<div>Loading ...</div>}>
        <Routes>
            <Route path="/products" element={<ProductsPage/>}/>
        </Routes>
    </Suspense>)
}
