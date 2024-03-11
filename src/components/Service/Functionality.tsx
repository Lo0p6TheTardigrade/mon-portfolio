type Props = { default?: string };

const Functionality = (props: Props) => {
  return (
    <div className="functionality-container">
      <div className="functionality-title-container">
        <h3 className="functionality-title">{props.default}</h3>
      </div>
    </div>
  );
};

export default Functionality;
