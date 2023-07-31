import React, { useEffect } from 'react';

import { useApi } from '../../../context/apiContext';
import { useDispatch, useSelector } from 'react-redux';
import { setAllPosts } from '../../../redux-store/actions/actions';

import { PostList } from '../styled';

const PostsTab = () => {
  const { getPosts, deletePost } = useApi();
  const dispatch = useDispatch();

  const posts = useSelector( ( state ) => state.posts );
  console.log( 'posts', posts );
  useEffect( () => {
    const getAllPosts = async () => {
      await getPosts()
          .then( ( res ) => dispatch( setAllPosts( res ) ) )
          .catch( ( err ) => console.error( err ) );
    };

    getAllPosts();
  }, [] );

  const deletePostById = async ( postId ) => {
    await deletePost( postId )
        .then( ( res ) => console.log( '3', res ) );
  };

  return (
    <PostList>
      {
        posts.map( ( item ) => {
          return (
            <div className='post--item' key={ item._id }>
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
                  className='btns_section--delete'
                  onClick={ () => deletePostById( item._id ) }
                >
                  delete
                </button>
                <button className='btns_section--update'>update</button>
              </div>
            </div>
          );
        } )
      }
    </PostList>
  );
};

export default PostsTab;
