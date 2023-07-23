import "./Colors.css";
import Input from "../../components/Input";

const Colors = ({ handleChange }) => {
  return (
    <>
      <div>
        <h2 className="sidebar-title color-title">Colors</h2>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test1" />
          <span className="checkmark all"></span>
          All
        </label>

        <Input
          handleChange={handleChange}
          value="gold"
          title="Gold"
          name="test1"
          color="gold"
        />

        <Input
          handleChange={handleChange}
          value="silver"
          title="Silver"
          name="test1"
          color="silver"
        />
        <Input
          handleChange={handleChange}
          value="red"
          title="Red"
          name="test1"
          color="red"
        />
         <Input
          handleChange={handleChange}
          value="white"
          title="White"
          name="test1"
          color="white"
        />
{/* 
    <label className="sidebar-label-container">
          <input
            onChange={handleChange}
            type="radio"
            value="white"
            name="test1"
          />
          <span
            className="checkmark"
            style={{ background: "white", border: "2px solid black" }}
          ></span>
          White
        </label> */}
      </div>
    </>
  );
};

export default Colors;
