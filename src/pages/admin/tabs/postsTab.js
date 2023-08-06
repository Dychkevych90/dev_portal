import React, { useEffect, useState } from 'react';

import { useApi } from '../../../context/apiContext';
import { useDispatch, useSelector } from 'react-redux';
import { setAllPosts } from '../../../redux-store/actions/actions';

import { PostList, EditPost } from '../styled';

const PostsTab = () => {
  const posts = useSelector( ( state ) => state.posts );

  const [ editPost, setEditPost ] = useState( {} );
  const [ updatedPostData, setUpdatedPostData ] = useState( {} );

  const { getPosts, deletePost, updatePost } = useApi();

  const dispatch = useDispatch();

  useEffect( () => {
    const getAllPosts = async () => {
      await getPosts()
          .then( ( res ) => dispatch( setAllPosts( res ) ) )
          .catch( ( err ) => console.error( err ) );
    };

    getAllPosts();
  }, [] );

  useEffect( () => {
    const initialEditingStates = {};
    posts.forEach( ( post ) => {
      initialEditingStates[ post._id ] = false;
    } );
    setEditPost( initialEditingStates );
  }, [ posts ] );

  const deletePostById = async ( postId ) => {
    const updatedPostsList = posts.filter( ( post ) => post._id !== postId );

    await deletePost( postId )
        .then( () => dispatch( setAllPosts( updatedPostsList ) ) )
        .catch( ( err ) => console.error( err ) );
  };

  const updatePostById = ( postId ) => {
    setEditPost( ( prevState ) => ( {
      ...prevState,
      [ postId ]: !prevState[ postId ],
    } ) );

    const postToUpdate = posts.find( ( post ) => post._id === postId );
    setUpdatedPostData( postToUpdate );
  };

  const handleUpdate = async ( postId ) => {
    await updatePost( postId, updatedPostData )
        .then( () => {
          setEditPost( ( prevState ) => ( {
            ...prevState,
            [ postId ]: false,
          } ) );
        } )
        .then( () => {
          const postIndex = posts.findIndex( ( post ) => post._id === postId );

          const updatedPostsArray = [
            ...posts.slice( 0, postIndex ),
            updatedPostData,
            ...posts.slice( postIndex + 1 ),
          ];

          dispatch( setAllPosts( updatedPostsArray ) );
        } )
        .catch( ( error ) => console.error( 'Error updating post:', error ) );
  };

  return (
    <PostList>
      {
        posts.map( ( item ) => {
          return (
            editPost[ item._id ] ? (
              <EditPost key={ item._id }>
                <input
                  type="text"
                  value={ updatedPostData.title }
                  onChange={ ( e ) =>
                    setUpdatedPostData( { ...updatedPostData, title: e.target.value } ) }
                />

                <textarea
                  value={ updatedPostData.description }
                  onChange={ ( e ) =>
                    setUpdatedPostData( { ...updatedPostData, description: e.target.value } ) }
                />

                <input
                  type="text"
                  value={ updatedPostData.category }
                  onChange={ ( e ) =>
                    setUpdatedPostData( { ...updatedPostData, category: e.target.value } ) }
                />

                <input
                  type="text"
                  value={ updatedPostData.classes }
                  onChange={ ( e ) =>
                    setUpdatedPostData( { ...updatedPostData, classes: e.target.value } ) }
                />

                {/* eslint-disable-next-line max-len */}
                <button onClick={ () => handleUpdate( item._id, editPost ) }>Update</button>
              </EditPost>
            ) : (
              <div className="post--item" key={ item._id }>
                <div className="title">{item.title}</div>
                <div className="desc">{item.description}</div>
                <div className="category">{item.category}</div>
                <div className="classes">{item.classes}</div>
                <div className="hasExample">{item.hasExample}</div>
                <div className="pills">
                  {item.pills.map( ( pill, index ) => (
                    <div key={ index }>{pill}</div>
                  ) )}
                </div>
                <div className="createdAt">{item.createdAt}</div>
                <div className="content">{item.content}</div>

                <div className="btns_section">
                  <button
                    className="btns_section--delete"
                    onClick={ () => deletePostById( item._id ) }
                  >
                    delete
                  </button>
                  <button
                    className="btns_section--update"
                    onClick={ () => updatePostById( item._id ) }
                  >
                    update
                  </button>
                </div>
              </div>
            )
          );
        } )
      }
    </PostList>
  );
};

export default PostsTab;
