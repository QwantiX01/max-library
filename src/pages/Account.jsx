import BookCard from "../components/BookCard.jsx";

function Account() {
  return (
    <div className="min-h-screen bg-mint-pale flex flex-col items-center py-10">
      <div className="bg-mint-very-light shadow-md rounded-lg p-6 max-w-2xl w-full">
        <div className="flex items-center space-x-6">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-mint-dark"
          />
          <div>
            <h2 className="text-3xl font-bold text-mint-dark">John Doe</h2>
            <p className="text-sm text-gray-500">johndoe@example.com</p>
            <p className="text-sm text-gray-500">Member since: January 2023</p>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-mint-light p-4 rounded-lg text-center">
            <p className="text-2xl font-semibold text-mint-dark">
              Books Stored
            </p>
            <p className="text-4xl font-bold text-gray-700">150</p>
          </div>
          <div className="bg-mint-light p-4 rounded-lg text-center">
            <p className="text-2xl font-semibold text-mint-dark">Books Read</p>
            <p className="text-4xl font-bold text-gray-700">75</p>
          </div>
          <div className="bg-mint-light p-4 rounded-lg text-center">
            <p className="text-2xl font-semibold text-mint-dark">Books Liked</p>
            <p className="text-4xl font-bold text-gray-700">30</p>
          </div>
          <div className="bg-mint-light p-4 rounded-lg text-center">
            <p className="text-2xl font-semibold text-mint-dark">Wishlist</p>
            <p className="text-4xl font-bold text-gray-700">20</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <button className="bg-mint text-white font-semibold py-2 px-4 rounded-md hover:bg-mint-dark transition duration-200">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
}

export default Account;
