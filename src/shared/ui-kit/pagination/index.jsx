import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons'
import { Button } from '../button'
import styles from './index.module.scss'

export function Pagination ({ totalItems, itemsPerPage, currentPage, onPageChange }) {
  const totalPages = Math.ceil(totalItems / itemsPerPage)
  const [current, setCurrent] = useState(currentPage)

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return
    setCurrent(page)
    onPageChange(page)
  }

  return (
        <div className={styles.pagination}>
            <Button
                variant="iconable"
                className={styles.pageButton}
                onClick={() => handlePageChange(current - 1)}
                disabled={current === 1}
            >
                <ChevronLeftIcon width={20} height={20} />
            </Button>

            {[...Array(totalPages)].map((_, index) => {
              const page = index + 1
              return (
                    <Button
                        key={page}
                        className={`${styles.pageButton} ${current === page ? styles.active : ''}`}
                        onClick={() => handlePageChange(page)}
                    >
                        {page}
                    </Button>
              )
            })}

            <Button
                variant="iconable"
                className={styles.pageButton}
                onClick={() => handlePageChange(current + 1)}
                disabled={current === totalPages}
            >
                <ChevronRightIcon width={20} height={20} />
            </Button>
        </div>
  )
}

Pagination.propTypes = {
  totalItems: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
}
