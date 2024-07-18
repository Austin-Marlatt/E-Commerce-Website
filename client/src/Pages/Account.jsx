import { useQuery, useMutation } from '@apollo/client';
import { QUERY_CURRENT } from '../utils/queries'; 
import Auth from '../utils/auth';
import {ADD_PRODUCT} from '../utils/mutations'

function Account() {

  const { loading, data } = useQuery(QUERY_CURRENT);
  const [addProduct, { error }] = useMutation(ADD_PRODUCT);

  const userData = data?.current || {};
    console.log(userData);

    const productSubmit = async (event) => {
      event.preventDefault();
      try {
        const productRes = await addProduct({
          variables: {
            productName: formState.productName,
            description: formState.description,
            price: formState.price,
            shippingAddress: formState.shippingAddress,
          },
        });
      }

    return (
      <div>

        <div>
          <h1 className = "text-center text-light m-3">Account Page</h1>
        </div>

        <div className = "mt-4 p-2 bg-dark text-white rounded">
          <p>Username: {userData.username}</p>
          <p>Email: {userData.email}</p>
          <p>Shipping Address: {userData.shippingAddress}</p>
        </div>

        <div>
          <h1 className = "text-center text-light m-3">Products For Sale</h1>
        </div>

        <div className="row row-cols-1 row-cols-md-2 g-4">
        {userData.productsForSale?.map((product) => {
        return (
        <div className="col">
          <div className="card my-4 h-100">
            <img className="card-img-top" src="/src/public/images/No_Image_available.jpg" alt="product image"></img>
              <div className="card-body">
                <h3 className="card-title">{product.productName}</h3>
                <p className="card-text">{product.description}</p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">
                    <a href="#" className="btn">View</a>
                  </small>
                </div>
          </div>
        </div>
        );
        })}
      </div>

      <div className="row row-cols-1 row-cols-md-2 g-4">
        {userData.productsForSale?.map((product) => {
        return (
        <div className="col">
          <div className="card my-4 h-100">
            <img className="card-img-top" src="/src/public/images/No_Image_available.jpg" alt="product image"></img>
              <div className="card-body">
                <h3 className="card-title">{product.productName}</h3>
                <p className="card-text">{product.description}</p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">
                    <a href="#" className="btn">View</a>
                  </small>
                </div>
          </div>
        </div>
        );
        })}
      </div>


{/* ///////////////////////////////////////////// */}

<div className="mt-4 p-5 bg-dark text-white rounded">
      <div className="mb-3">
        <h2 className="">Create a product for sale</h2>
        <form onSubmit={productSubmit}>
          <div className="mb-3">
            <label className="form-label" htmlFor="productName">Name:</label>
            <input className = "form-control"
              placeholder="Product Name"
              name="productName"
              type="productName"
              id="productName"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="description">Description:</label>
            <input className = "form-control"
              placeholder="Write a description of your product"
              name="description"
              type="description"
              id="description"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="password">Price:</label>
            <input className = "form-control"
              placeholder="Your Username"
              name="password"
              type="password"
              id="password"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="shipping">Shipping Address:</label>
            <input className = "form-control"
              placeholder="Shipping Address"
              name="shippingAddress"
              type="shippingAddress"
              id="shipping"
              onChange={handleChange}
            />
          </div>
          <div>
            <button className="btn btn-outline-light" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
      <Link to="/login">Already have an account? Click here.</Link>
    </div>

{/* ///////////////////////////////////////////// */}


      </div>
    )
}
}
export default Account;