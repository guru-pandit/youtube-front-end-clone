import "./FilterLink.css";

const FilterLink = ({ label }) => {
  return (
    <a className="filterlink" href={label}>
      {label}
    </a>
  );
};

export default FilterLink;
