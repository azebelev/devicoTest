

const CategoryForm = ({ handleChangeCategory }) => {

  return (
    <>
      <div>
        <label className="form-label form-label-sm " for="categoryName">Category name</label>
        <input onChange={handleChangeCategory} type="text" name="categoryName" className="form-control" required />
      </div>
      <div>
        <label className="form-label form-label-sm " for="description">Description</label>
        <input onChange={handleChangeCategory} type="text" name="description" className="form-control" required />
      </div>
    </>
  )
}

export default CategoryForm;