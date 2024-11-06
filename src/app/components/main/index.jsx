import React, { useEffect, useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
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

  const handlePageChange = (page) => {
    setCurrentPage(page)
    setProductsLoading(true)
  }

  const fetchProducts = ({ operation, value, field }) => {
    const props = {
      currentPage,
      currentValue: operation === 'filter'
        ? { ...filterAndSortValue, [field]: value }
        : filterAndSortValue,
      navigate,
      setProducts,
      setTotalItems,
      setError
    }

    console.log('props', props)

    if (operation === 'filter') {
      setProductsLoading(true)
      setFilterAndSortValue(prev => ({ ...prev, ...props.currentValue }))
    } else {
      setLoading(true)
    }

    loadProductsData(props).finally(() => {
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
            <ProductsUI.TopBar/>

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

Main.propTypes = {
  currentPage: PropTypes.number.isRequired,
  filterAndSortValue: PropTypes.object.isRequired,
  setFilterAndSortValue: PropTypes.func.isRequired,
  loadProductsData: PropTypes.func.isRequired,
  navigate: PropTypes.func.isRequired,
  setProducts: PropTypes.func.isRequired,
  setTotalItems: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired
}
