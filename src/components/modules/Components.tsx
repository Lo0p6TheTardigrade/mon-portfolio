// @flow
import { Props } from '../../types';

const Components = ({ children, state, tag, id, classX, src, href, to, alt, icon, height, width, title, name, content, onClick, onChange, onToggle, onFocus, onBlur, onMouseEnter, onMouseLeave, value, target, disabled }: Props) => {
  const Children = children;
  const State = state;
  const Tag = tag;
  const Id = id;
  const Class = classX;
  const Src = src;
  const Href = href;
  const To = to;
  const Alt = alt;
  const Icon = icon;
  const Height = height;
  const Width = width;
  const Title = title;
  const Name = name;
  const Content = content;
  const OnClick = onClick;
  const OnChange = onChange;
  const OnToggle = onToggle;
  const OnFocus = onFocus;
  const OnBlur = onBlur;
  const OnMouseEnter = onMouseEnter;
  const OnMouseLeave = onMouseLeave;
  const Value = value;
  const Target = target;
  const Disabled = disabled;

  // Returns the current component
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
