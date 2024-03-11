type Props = { default?: string };

const Build = (props: Props) => {
  return (
    <div className="build-container">
      <div className="build-title-container">
        <h3 className="build-title">{props.default}</h3>
      </div>
    </div>
  );
};

export default Build;
