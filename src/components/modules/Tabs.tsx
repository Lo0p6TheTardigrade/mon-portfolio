// @flow
import { Any_Null, String_Null, String_Undefined } from '../../types';

const Tabs = (propertyObj: {
  tab: {
    name: {
      name1: String_Null;
      class1: String_Null;
      name2: String_Null;
      class2: String_Null;
      name3: String_Null;
      class3: String_Null;
    };
    function: {
      onclicked1: Any_Null;
      onclicked2: Any_Null;
    };
    href: {
      link1: String_Undefined;
      class1: String_Null;
    };
    image: {
      file: {
        image1: any;
      };
      class: {
        class1: string;
      };
    };
    content: {
      value: {
        content1: string;
        content2: string;
        content3: String_Null;
      };
      class: {
        class1: string;
        class2: string;
      };
    };
  };
  state: {
    basic: boolean;
  };
}) => {
  const handleHeader2Section = () => {
    switch (propertyObj.state.basic) {
      case true:
        return <h2 className={`title-tab-content ${propertyObj.tab.content.class.class1}`}>{propertyObj.tab.content.value.content1}</h2>;

      case false:
        return <h2 className={`title-tab-content ${propertyObj.tab.content.class.class2}`}>{propertyObj.tab.content.value.content2}</h2>;
    }
  };
  return (
    <div className="main-tab-container">
      <div className="main-tab-box">
        <div className="main-tab-content tab-box">{handleHeader2Section()}</div>
        <nav className="main-tab-item tab-box">
          {propertyObj.state.basic && (
            <>
              <div
                className="click-text-button"
                onClick={propertyObj.tab.function.onclicked1}>
                {propertyObj.tab.content.value.content3}
              </div>
              <span
                className={`tab-item tab ${propertyObj.tab.name.class1}`}
                onClick={propertyObj.tab.function.onclicked1}>
                {propertyObj.tab.image.file.image1}
              </span>
            </>
          )}
          {!propertyObj.state.basic && (
            <>
              <div
                className="click-text-button"
                onClick={propertyObj.tab.function.onclicked2}>
                {propertyObj.tab.content.value.content3}
              </div>
              <span
                className={`tab-item tab ${propertyObj.tab.name.class2}`}
                onClick={propertyObj.tab.function.onclicked2}>
                {propertyObj.tab.image.file.image1}
              </span>
            </>
          )}
          <a
            className={`${propertyObj.tab.href.class1}`}
            href={propertyObj.tab.href.link1}>
            <span className="">{propertyObj.tab.name.name3}</span>
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Tabs;
