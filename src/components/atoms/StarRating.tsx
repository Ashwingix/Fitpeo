import React from "react";

const reviews = [
  {
    id: 1,
    name: "Jenny Wilson",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    rating: 5,
    review:
      "The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.",
  },
  {
    id: 2,
    name: "Dianne Russell",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    rating: 5,
    review:
      "We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.",
  },
  {
    id: 3,
    name: "Devon Lane",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    rating: 4,
    review:
      "Normally wines are wines, but theirs are lean meatier and tannier, and highly impressive.",
  },
];

const StarRatingData: React.FC<{ rating: number }> = ({ rating }) => (
  <div className="flex">
    {[...Array(5)].map((_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${
          index < rating ? "text-yellow-400" : "text-gray-300"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.116 3.421a1 1 0 00.95.69h3.6c.969 0 1.371 1.24.588 1.81l-2.92 2.112a1 1 0 00-.364 1.118l1.115 3.421c.3.921-.755 1.688-1.54 1.118l-2.92-2.112a1 1 0 00-1.175 0l-2.92 2.112c-.785.57-1.84-.197-1.54-1.118l1.115-3.421a1 1 0 00-.364-1.118L2.293 8.848c-.784-.57-.38-1.81.588-1.81h3.6a1 1 0 00.95-.69l1.116-3.421z" />
      </svg>
    ))}
  </div>
);

const StarRating: React.FC = () => {
  return (
    <div className=" bg-gray-800 flex items-center justify-center rounded-lg shadow-lg">
      <div className="bg-gray-900 text-white max-w-2xl w-full p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Customer's Feedback</h2>
        {reviews.map((review) => (
          <div key={review.id} className="flex items-start mb-6">
            <img
              src={review.image}
              alt={review.name}
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <h3 className="text-lg font-semibold">{review.name}</h3>
              <StarRatingData rating={review.rating} />
              <p className="text-gray-400 mt-2">{review.review}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StarRating;
