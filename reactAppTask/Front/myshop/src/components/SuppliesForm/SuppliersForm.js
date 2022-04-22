const SuppliersForm = ({ handleChangeSupplier }) => {

  return (
    <>
      <div>
        <label className="form-label form-label-sm " for="supplierName">Supplier name</label>
        <input onChange={handleChangeSupplier} type="text" name="supplierName" className="form-control" required />
      </div>
      <div>
        <label className="form-label form-label-sm " for="city">City</label>
        <input onChange={handleChangeSupplier} type="text" name="city" className="form-control" required />
      </div>
      <div>
        <label className="form-label form-label-sm " for="country">Country</label>
        <input onChange={handleChangeSupplier} type="text" name="country" className="form-control" required />
      </div>
    </>
  )
}

export default SuppliersForm;