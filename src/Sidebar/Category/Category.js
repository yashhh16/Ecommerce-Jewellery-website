import "./Category.css";
import Input from "../../components/Input";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="earrings"
          title="Earrings"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="rings"
          title="Rings"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="necklace"
          title="Necklace"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="pendents"
          title="Pendents"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="bridal set"
          title="Bridal set"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="bracelets"
          title="Bracelets"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;
