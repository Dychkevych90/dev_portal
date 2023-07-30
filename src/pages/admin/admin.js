import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import LoginForm from '../../components/loginForm/loginForm';
import ArticleCreator from '../../components/modals/createArticle/articleCreator';

import { AdminPageWrapper } from './styled';

const AdminPage = ( { isMenuOpen } ) => {
  const [ isModalOpen, setIsModalOpen ] = useState( false );

  const currentUser = useSelector( ( state ) => state.user );

  return (
    <>
      <AdminPageWrapper isMenuOpen={ isMenuOpen }>
        <div className="container" style={ { paddingLeft: '0' } }>
          <div className="row">
            <div className="column column-12" style={ { paddingLeft: '0' } }>
              <div className="section_title">Panel controls</div>
            </div>
          </div>

          <div className="row">
            {
              Object.keys( currentUser ).length === 0 ? (
                <LoginForm/>
              ) : (
                <div>Hello!!!</div>
              )
            }
          </div>
        </div>

        <button
          style={ {
            padding: '10px',
            width: '200px',
            color: '#000',
            borderRadius: '10px',
            height: '50px',
            position: 'fixed',
            bottom: '50px',
            right: '50px',
          } }
          onClick={ () => setIsModalOpen( !isModalOpen ) }
        >
          add article
        </button>
      </AdminPageWrapper>

      {
        isModalOpen && (
          <ArticleCreator/>
        )
      }
    </>
  );
};

export default AdminPage;
