// Dependencies.
import React from 'react'

// CSS.
import style from '../../css/_t7-data-table.css'

// Utility methods.
import utils from '../../utils'

// Define class.
class DataTableHeader extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)
  }

  handleClick (e) {
    const index = this.props.index
    const sortDirection = this.props.sortDirection
    const handleClick = this.props.handleClick

    if (typeof handleClick !== 'function') {
      return
    }

    handleClick(e, index, sortDirection)
  }

  // Render method.
  render () {
    const index = this.props.index
    const label = this.props.label
    const sortable = this.props.sortable
    const sortIndex = this.props.sortIndex
    const handleClick = sortable ? this.handleClick.bind(this) : null

    var sortDirection = this.props.sortDirection

    if (index !== sortIndex) {
      sortDirection = ''
    }

    var className = style['t7-data-table__th']

    if (sortable) {
      className = style['t7-data-table__th--sortable']
    }

    return (
      <th
        data-sort-direction={sortDirection}
        className={className}
        onClick={handleClick}
      >
        {label}
      </th>
    )
  }
}

// Validation.
DataTableHeader.propTypes = {
  index: React.PropTypes.number,
  label: React.PropTypes.string,
  sortIndex: React.PropTypes.number,
  sortDirection: React.PropTypes.string,
  sortable: React.PropTypes.bool,
  handleClick: React.PropTypes.func
}

// Defaults.
DataTableHeader.defaultProps = {
  handleClick: function (e, index, sortDirection) {
    utils.log(e, index, sortDirection)
  }
}

// Export.
export default DataTableHeader