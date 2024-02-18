import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Behavior_Custom_Interface } from '../types';
import { Behavior_Action_Object } from '../actions/behavior.action';

type Props = { cegefos: { name: string; file: string }; openclassroom: { name: string; file: string }; image: { src: string; alt: string; class: string } };

const Proof = (props: Props) => {
  const dispatch = useDispatch();
  const window5 = useSelector((state: { behavior: Behavior_Custom_Interface }) => state.behavior.window.window5);

  const cegefos = props.cegefos.file;
  const cegefos_name = props.cegefos.name;
  const openclassroom = props.openclassroom.file;
  const openclassroom_name = props.openclassroom.name;

  const switchState = () => {
    dispatch(Behavior_Action_Object.behavior.set.action.window.window5(!window5));
  };

  const switch_icon = (
    <div
      className="title-file-container-right-box"
      onClick={() => {
        switchState();
      }}>
      <p>Suivant</p>
      <div className="btn-file-switcher-container box">
        <img
          src={props.image.src}
          alt={props.image.alt}
          className={props.image.class}
        />
      </div>
    </div>
  );
  return (
    <div className="proof-container">
      <div className="proof-title-container">
        <h2 className="proof-title">Proof</h2>
      </div>
      <div className={`proof-file-container ${window5 ? 'animate-translate' : 'animate-opacity'}`}>
        {!window5 ? (
          <div className="file-box">
            <div className="title-file-container">
              <h3>{cegefos_name}</h3>
              {switch_icon}
            </div>
            <embed
              type="application/pdf"
              id="cegefos-file"
              className="proof-file"
              src={cegefos}
              height={500}
              width={500}
            />
          </div>
        ) : (
          <div className="file-box">
            <div className="title-file-container">
              <h3>{openclassroom_name}</h3>
              {switch_icon}
            </div>
            <embed
              type="application/pdf"
              id="openclassroom-file"
              className="proof-file"
              src={openclassroom}
              height={500}
              width={500}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Proof;
