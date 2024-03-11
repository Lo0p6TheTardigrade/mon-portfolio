type Props = { default?: string };

const Redesign = (props: Props) => {
  return (
    <div className="redesign-container">
      <div className="redesign-title-container">
        <h3 className="redesign-title">{props.default}</h3>
      </div>
    </div>
  );
};

export default Redesign;
