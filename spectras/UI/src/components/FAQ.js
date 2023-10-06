import { BsChevronDown } from "react-icons/bs"; // Import the ChevronDown icon

const FAQ = () => {
  const faqData = [
    {
      id: 1,
      question: "What is Lorem Ipsum?",
      answer: "Lorem ipsum dolor sit amet...",
    },
    {
      id: 2,
      question: "Why do we use it?",
      answer: "It is a long established fact...",
    },
    // Add more FAQ items here
  ];

  const toggleDropdown = (id) => {
    const dropdownContent = document.getElementById(`faq-answer-${id}`);
    dropdownContent.classList.toggle("hidden");
  };

  return (
    <div className="bg-gray-100 py-16">
      <h2 className="text-3xl max-w-6xl mx-auto font-thin mb-7 md:max-w-3xl lg:max-w-5xl ">FAQ</h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:max-w-3xl lg:max-w-5xl lg:gap-0">
        <div className="w-full md:w-1/3">
          {/* Place your single image here */}
          <img
            src="https://media.licdn.com/dms/image/C4E03AQFAK-4OomPYFg/profile-displayphoto-shrink_800_800/0/1662920335346?e=2147483647&v=beta&t=5yDT-m5dyEB3LvaCjYaEXGCBqYlM5K3aARpGCEQAwtc" // Replace with actual image URL
            alt="FAQ"
            className="w-full h-full "
          />
        </div>
        <div className="w-full md:w-2/3 p-4">
          {faqData.map((item) => (
            <div
              key={item.id}
              className="dropdown mb-4 bg-white p-4 rounded-lg shadow-md"
            >
              <button
                className="flex justify-between items-center w-full dropdown-title text-blue-500"
                onClick={() => toggleDropdown(item.id)}
              >
                <span>{item.question}</span>
                <BsChevronDown className="ml-2 text-gray-500" />
                {/* Dropdown icon */}
              </button>
              <p
                id={`faq-answer-${item.id}`}
                className="dropdown-content hidden mt-2"
              >
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;