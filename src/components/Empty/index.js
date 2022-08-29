import React from 'react';
import PropTypes from 'prop-types';
import EmptySection from './style';
import empty from '../../assets/svgs/Empty.svg';

export default function Empty({ page, setIsOpen, isOpen }) {
  return (
    <EmptySection>
      {
        page === 'admin' ? (
          <>
            <p className="title">No employers added</p>
            <p className="desc">You have no employers added to your dashboard yet</p>
            <button type="button" onClick={() => setIsOpen(!isOpen)}>+ Add Employer</button>
            <img src={empty} alt="Empty" />
          </>
        ) : (
          <>
            <p className="title">No employees joined SORA</p>
            <p className="desc">There aren’t employees using the SORA app.</p>
            <img src={empty} alt="Empty" />
          </>
        )
      }

    </EmptySection>
  );
}

Empty.propTypes = {
  page: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};
