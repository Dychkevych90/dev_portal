import React from 'react';
import { AdminPageWrapper } from './styled';

const AdminPage = ( { isMenuOpen } ) => {
  return (
    <AdminPageWrapper isMenuOpen={ isMenuOpen }>
      <div className="container" style={ { paddingLeft: '0' } }>
        <div className="row">
          <div className="column column-12" style={ { paddingLeft: '0' } }>
            <div className="section_title">Panel controls</div>
          </div>
        </div>
      </div>
    </AdminPageWrapper>
  );
};

export default AdminPage;
