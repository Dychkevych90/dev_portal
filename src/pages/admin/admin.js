import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import LoginForm from '../../components/loginForm/loginForm';
import ArticleCreator from '../../components/modals/createArticle/articleCreator';

import { setUser } from '../../redux-store/actions/actions';

import {
  AdminContent,
  AdminPageWrapper,
  TabHead,
  TabBody,
  TabHeadNav,
} from './styled';
import PostsTab from './tabs/postsTab';

const AdminPage = ( { isMenuOpen } ) => {
  const [ isModalOpen, setIsModalOpen ] = useState( false );
  const [ tabStatus, setTabStatus ] = useState( 'users' );

  const handleChangeTab = ( e, tab ) => {
    setTabStatus( tab );
    document.querySelector( '.tabs-active' ).classList.remove( 'tabs-active' );
    e.target.classList.add( 'tabs-active' );
  };

  const dispatch = useDispatch();
  const currentUser = useSelector( ( state ) => state.user );

  const logOut = ( event ) => {
    event.preventDefault();
    if ( localStorage.getItem( 'token' ) ) {
      localStorage.clear();
      dispatch( setUser( {} ) );
    }
  };

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
                <AdminContent>
                  <TabHead>
                    <TabHeadNav
                      className='tabs-active'
                      onClick={ ( e ) => handleChangeTab( e, 'users' ) }
                    >
                      Users
                    </TabHeadNav>

                    <TabHeadNav onClick={ ( e ) => handleChangeTab( e, 'posts' ) }>
                      Posts
                    </TabHeadNav>

                    <TabHeadNav onClick={ ( e ) => handleChangeTab( e, 'others' ) }>
                      Others
                    </TabHeadNav>
                  </TabHead>

                  <TabBody>
                    {
                      tabStatus === 'posts'
                        ? <PostsTab/>
                        : 'Nothing!'
                    }
                  </TabBody>
                </AdminContent>
              )
            }
          </div>
        </div>

        {
          Object.keys( currentUser ).length !== 0 && (
            <>
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

              <button
                style={ {
                  padding: '10px',
                  width: '200px',
                  color: '#000',
                  borderRadius: '10px',
                  height: '50px',
                  position: 'fixed',
                  bottom: '0px',
                  right: '50px',
                } }
                className='logout_btn'
                onClick={ ( e ) => logOut( e ) }
              >
                log out
              </button>
            </>
          )
        }
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
