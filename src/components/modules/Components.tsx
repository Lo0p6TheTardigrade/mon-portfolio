import React from 'react';

const Components = (prop: any) => {
  const Children = prop.children;
  const State = prop.state;
  const Tag = prop.tag;
  const Id = prop.id;
  const Class = prop.class;
  const Src = prop.src;
  const Href = prop.href;
  const To = prop.to;
  const Alt = prop.alt;
  const Icon = prop.icon;
  const Height = prop.height;
  const Width = prop.width;
  const Title = prop.title;
  const Name = prop.name;
  const Content = prop.content;
  const OnClick = prop.onClick;
  const OnChange = prop.onChange;
  const OnToggle = prop.onToggle;
  const OnFocus = prop.onFocus;
  const OnBlur = prop.onBlur;
  const OnMouseEnter = prop.onMouseEnter;
  const OnMouseLeave = prop.onMouseLeave;
  const Value = prop.value;
  const Target = prop.target;
  const Disabled = prop.disabled;
  return (
    <Tag
      //   Start attributes
      id={Id}
      className={Class}
      src={Src}
      href={Href}
      to={To}
      alt={Alt}
      icon={Icon}
      height={Height}
      width={Width}
      title={Title}
      name={Name}
      onClick={OnClick}
      onChange={OnChange}
      onToggle={OnToggle}
      onFocus={OnFocus}
      onBlur={OnBlur}
      onMouseEnter={OnMouseEnter}
      onMouseLeave={OnMouseLeave}
      value={Value}
      target={Target}
      disabled={Disabled}
      state={State}
      //   End attributes
    >
      {/* Content */}
      {Content}
      {/* Children element */}
      {Children}
    </Tag>
  );
};

export default Components;
