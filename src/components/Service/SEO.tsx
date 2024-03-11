type Props = { default?: string };

const SEO = (props: Props) => {
  return (
    <div className="seo-container">
      <div className="seo-title-container">
        <h3 className="seo-title">{props.default}</h3>
      </div>
    </div>
  );
};

export default SEO;
