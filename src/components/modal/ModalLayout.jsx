import React from 'react';

import { Modal, Button } from 'react-bootstrap';
import '../../styles/_modalLayout.scss';



interface ModalLayoutProps {
  show: boolean;
  onClose: () => void;
  title?: string;
  date?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

const ModalLayout: React.FC<ModalLayoutProps> = ({ show, onClose, title, date, children, footer }) => {
  return (

    <Modal show={show} onHide={onClose} centered scrollable dialogClassName="modal-style">
      {title && (
        <Modal.Header>
          <div className="mt-1">
            <Modal.Title><h2>{title}</h2></Modal.Title>
            {date && <p className="tab mt-2">{date}</p>}
          </div>
        </Modal.Header>
      )}

      <div className="line"></div>

      <Modal.Body className="modal-body px-4 pt-4 pb-0 ms-4">
        {children} {/*각각 모달창 컴포넌트 렌더링*/}
      </Modal.Body>
 

      <div className="line mt-4"></div>

      {footer && (
        <Modal.Footer className="post-modal-footer d-flex justify-content-center align-items-center">
          {footer}
        </Modal.Footer>
      )}
    </Modal>
         
  );
};

export default ModalLayout;
