import React from 'react';
import PropTypes from 'prop-types';

class CategoryList extends React.Component {
  render() {
    const { categoryList, handleClickCategory } = this.props;
    return (
      <aside>
        <ul>
          {categoryList.map((category) => (
            <button
              key={ category.id }
              type="button"
              data-testid="category"
              onClick={ () => handleClickCategory(category.id) }
            >
              {category.name}
            </button>
          ))}
        </ul>
      </aside>
    );
  }
}

CategoryList.propTypes = {
  categoryList: PropTypes.arrayOf(PropTypes.shape({})),
  handleClickCategory: PropTypes.func,
}.isRequired;

export default CategoryList;
