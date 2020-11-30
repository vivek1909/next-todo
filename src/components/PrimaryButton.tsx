export const PrimaryButton = ({ name, onClick }) => {
  return (
    <button className="m-2 bg-blue-600 p-2 rounded-md" onClick={onClick}>
      {name}
    </button>
  );
};
