function Buisness(){
    return(
        <div className="min-h-screen bg-pink-100 flex justify-center items-center py-10 px-4">
        <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-2xl font-bold mb-4">Planning to order Big?</h1>
          <p className="mb-6 text-gray-600">
            Please fill the details and our team will reach out to you
          </p>
          <form className="space-y-4">
            <div>
              <label className="block font-medium text-gray-700">Full Name *</label>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full mt-1 border border-gray-300 rounded-md p-2 bg-beige focus:outline-none focus:border-brown"
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700">Brand / Company Name *</label>
              <input
                type="text"
                placeholder="Brand / Company Name"
                className="w-full mt-1 border border-gray-300 rounded-md p-2 bg-beige focus:outline-none focus:border-brown"
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700">Nature of your business *</label>
              <input
                type="text"
                placeholder="Nature of your business"
                className="w-full mt-1 border border-gray-300 rounded-md p-2 bg-beige focus:outline-none focus:border-brown"
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700">City & Postal Code? *</label>
              <input
                type="text"
                placeholder="City & Postal Code?"
                className="w-full mt-1 border border-gray-300 rounded-md p-2 bg-beige focus:outline-none focus:border-brown"
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700">Phone *</label>
              <input
                type="tel"
                placeholder="Phone"
                className="w-full mt-1 border border-gray-300 rounded-md p-2 bg-beige focus:outline-none focus:border-brown"
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700">Email *</label>
              <input
                type="email"
                placeholder="Email"
                className="w-full mt-1 border border-gray-300 rounded-md p-2 bg-beige focus:outline-none focus:border-brown"
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700">
                Which Products are you looking to order? *
              </label>
              <select
                className="w-full mt-1 border border-gray-300 rounded-md p-2 bg-beige focus:outline-none focus:border-brown"
              >
                <option>4-Way Stretchable Pants</option>
                <option>Other Product</option>
              </select>
            </div>
            <div>
              <label className="block font-medium text-gray-700">
                What product quantities are you looking to order? *
              </label>
              <select
                className="w-full mt-1 border border-gray-300 rounded-md p-2 bg-beige focus:outline-none focus:border-brown"
              >
                <option>0-50 pcs</option>
                <option>50-100 pcs</option>
                <option>100+ pcs</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-orange-900 text-white font-medium py-2 rounded-md hover:bg-dark-brown"
            >
              Send
            </button>
          </form>
          <p className="text-xs text-center text-gray-500 mt-4">
            Never submit passwords or credit card details through this form.
          </p>
        </div>
      </div>
    )
}
export default Buisness;