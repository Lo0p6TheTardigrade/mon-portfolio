type Props = { default?: string };

const Debug = (props: Props) => {
  return (
    <div className="debug-container">
      <div className="debug-title-container">
        <h3 className="debug-title">{props.default}</h3>
      </div>
    </div>
  );
};

export default Debug;
