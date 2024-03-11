type Props = { default?: string };

const Collaboration = (props: Props) => {
  return (
    <div className="collaboration-container">
      <div className="collaboration-title-container">
        <h3 className="collaboration-title">{props.default}</h3>
      </div>
    </div>
  );
};

export default Collaboration;
