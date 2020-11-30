export const PrimaryInput = ({ value, placeholder, onChange }) => {
  return (
    <input
      className="bg-transparent p-2 m-2"
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      required
    />
  );
};
