import React, { useEffect, useState, useMemo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { loadProductsData } from './api'
import { ProductsUI } from '../../../features/products/src'
import { Drawer, Pagination, Loader, ErrorMessage } from '../../../shared/ui-kit'
import { useLocalStorage } from '../../../shared/hooks'
import { initialValue, itemsPerPage } from './constants'
import styles from './index.module.scss'

export function Main () {
  const [products, setProducts] = useState(null)
  const [loading, setLoading] = useState(true)
  const [productsLoading, setProductsLoading] = useState(true)
  const [error, setError] = useState('')

  const [currentPage, setCurrentPage] = useState(1)
  const [totalItems, setTotalItems] = useState(0)

  const navigate = useNavigate()
  const { openDrawer } = Drawer.useDrawer()
  const [filterAndSortValue, setFilterAndSortValue] = useLocalStorage('filterAndSort', initialValue)

  useEffect(() => {
    fetchProducts({ operation: 'load' })
  }, [currentPage])

  const handlePageChange = useCallback((page) => {
    setCurrentPage(page)
    setProductsLoading(true)
  }, [currentPage])

  const fetchProducts = ({ operation, value, field }) => {
    const args = {
      currentPage,
      currentValue: operation === 'filter'
        ? { ...filterAndSortValue, [field]: value }
        : filterAndSortValue,
      navigate,
      setProducts,
      setTotalItems,
      setError
    }

    if (operation === 'filter') {
      setProductsLoading(true)
      setFilterAndSortValue(prev => ({ ...prev, ...args.currentValue }))
    } else {
      setLoading(true)
    }

    loadProductsData(args).finally(() => {
      setLoading(false)
      setProductsLoading(false)
    })
  }

  const renderPagination = useMemo(() => (
    totalItems > itemsPerPage && (
            <Pagination
                totalItems={totalItems}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
    )
  ), [totalItems, currentPage, handlePageChange])

  if (error) {
    return <ErrorMessage error={error.message}/>
  }

  if (loading) {
    return <Loader/>
  }

  return <main className={styles.main}>
        <ProductsUI.Header itemsCount={products.items}/>
        <ProductsUI.TopBar title="FILTER & SORT"/>

        <section className={styles.section}>
            <ProductsUI.FilterBox
                initialValue={filterAndSortValue}
                updateFilterValue={(field, value) => fetchProducts({ operation: 'filter', value, field })}
            />
            <ProductsUI.ProductsList
                products={products.data}
                loading={productsLoading}
            />
            <ProductsUI.FixedButton
                label="FILTER & SORT"
                onClick={openDrawer}
            />
        </section>

        {renderPagination}

        <Drawer title="FILTER & SORT">
            <ProductsUI.FilterForm
                initialValue={filterAndSortValue}
                updateFilterValue={(field, value) => fetchProducts({ operation: 'filter', value, field })}
            />
        </Drawer>
    </main>
}
