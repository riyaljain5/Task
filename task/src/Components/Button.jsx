

const Button = ({ text, onClick, type = 'button', className = '' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-[#286181] hover:bg-[#A91B60] text-[#FFF8FB] py-2 px-6 rounded-xl font-semibold transition duration-300 ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
