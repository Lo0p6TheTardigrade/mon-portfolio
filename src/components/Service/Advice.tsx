type Props = { default?: string };

const Advice = (props: Props) => {
  return (
    <div className="advice-container">
      <div className="advice-title-container">
        <h3 className="advice-title">{props.default}</h3>
      </div>
    </div>
  );
};

export default Advice;
