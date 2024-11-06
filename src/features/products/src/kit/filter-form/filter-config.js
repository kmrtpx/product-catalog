import { CheckboxGroup, RangeSlider } from '../../../../../shared/ui-kit'
import { sortOptions } from '../../../../../app/components/main/constants'

export const filterConfigField = {
  sort: { field: 'sort', label: 'Sort By' },
  category: { field: 'category', label: 'Category' },
  brand: { field: 'brand', label: 'Brand' },
  price: { field: 'price', label: 'Price' }
}

export const filterConfig = (filterOptions, updateFilterValue, initialValue) => {
  return [
    {
      field: filterConfigField.sort.field,
      label: filterConfigField.sort.label,
      content: <CheckboxGroup
                options={sortOptions.map(item => item.name)}
                onChange={(value) => updateFilterValue(filterConfigField.sort.field, value)}
                initialValue={initialValue?.sort || null}
            />
    },
    {
      field: filterConfigField.category.field,
      label: filterConfigField.category.label,
      content: <CheckboxGroup
                options={filterOptions.category || []}
                onChange={(value) => updateFilterValue(filterConfigField.category.field, value)}
                initialValue={initialValue?.category || null}
            />
    },
    {
      field: filterConfigField.brand.field,
      label: filterConfigField.brand.label,
      content: <CheckboxGroup
                options={filterOptions.brand || []}
                onChange={(value) => updateFilterValue(filterConfigField.brand.field, value)}
                initialValue={initialValue?.brand || null}
            />
    },
    {
      field: filterConfigField.price.field,
      label: filterConfigField.price.label,
      content: <RangeSlider
                min={10}
                max={1000}
                step={5}
                defaultValue={[initialValue?.price?.min, initialValue?.price?.max]}
                onValueChange={(value) => updateFilterValue(filterConfigField.price.field, value)}
            />
    }
  ]
}
