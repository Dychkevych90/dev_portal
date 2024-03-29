import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import app from '../../../firebase';

import TextComponent from './blocks/textBlock.js';
import ImageComponent from './blocks/imageBlock';
import CodeComponent from './blocks/codeBlock';
import TextAreaComponent from './blocks/textareaBlock';
import LinkComponent from './blocks/linkBlock';

import { useApi } from '../../../context/apiContext';

import { ArticleWrapper } from './styled';
import { setAllPosts } from '../../../redux-store/actions/actions';

const ArticleCreator = () => {
  const [ sections, setSections ] = useState( [] );
  const [ inputType, setInputType ] = useState( '' );
  const [ inputValue, setInputValue ] = useState( '' );
  const [ inputName, setInputName ] = useState( '' );
  const [ currentBlock, setCurrentBlock ] = useState( {
    id: 1,
    sortOrder: 1,
  } );
  const [ setFile ] = useState( null );
  const [ pills, setPills ] = useState( [] );
  const [ form, setForm ] = useState( {
    title: '',
    desc: '',
    banner: null,
    cover: 'No',
    classes: '',
    category: '',
    pills: [],
    content: [],
    hasExample: 'No',
    video: '',
    github: '',
  } );

  const posts = useSelector( ( state ) => state.posts );

  const { createPost } = useApi();

  const dispatch = useDispatch();

  const changeHandler = ( event ) => {
    setForm( { ...form, [ event.target.name ]: event.target.value } );
  };

  const changeCat = ( e ) => {
    setPills( e.target.value.split( ',' ) );
  };

  const handleButtonClick = () => {
    setCurrentBlock( {
      id: currentBlock.id + 1,
      sortOrder: currentBlock.sortOrder + 1,
    } );
    setSections( ( prevArray ) => [ ...prevArray, currentBlock ] );
  };

  const addFields = ( type ) => {
    setInputType( type );
    setInputName( type );
  };

  const handleInputChange = ( e ) => {
    setInputValue( e.target.value );
  };

  const handleImageChange = ( e ) => {
    setInputValue( e.target.files[ 0 ] );
  };

  const handleAddValue = ( index ) => {
    const updatedList = [ ...sections ];
    updatedList[ index ] = { ...updatedList[ index ], [ inputName ]: inputValue };
    setSections( updatedList );
  };

  const handleSubmit = async ( e ) => {
    e.preventDefault();
    const newData = {
      ...form,
      title: form.title,
      desc: form.desc,
      cover: form.cover,
      classes: form.classes,
      category: form.category,
      github: form.github,
      pills: pills,
      hasExample: form.hasExample,
      video: form.video,
      content: sections,
    };

    await createPost( newData )
        .then( ( res ) => {
          const updatedPostsList = [ ...posts, res ];
          console.log( 'updatedPostsList', updatedPostsList );
          dispatch( setAllPosts( updatedPostsList ) );
        } )
        .catch( ( err ) => console.error( err ) );
  };

  const test = () => {
    dispatch( setAllPosts( [] ) );
  };

  const handleImageUpload = ( event ) => {
    const file = event.target.files[ 0 ];

    const fileName = new Date().getTime() + file.name;
    const storage = getStorage( app );
    const storageRef = ref( storage, fileName );
    const uploadTask = uploadBytesResumable( storageRef, file );
    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
        'state_changed',
        ( snapshot ) => {
        // Observe state change events such as progress, pause, and resume
          // eslint-disable-next-line max-len
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress
          = ( snapshot.bytesTransferred / snapshot.totalBytes ) * 100;
          console.log( 'Upload is ' + progress + '% done' );
          switch ( snapshot.state ) {
            case 'paused':
              console.log( 'Upload is paused' );
              break;
            case 'running':
              console.log( 'Upload is running' );
              break;
            default:
          }
        },
        ( error ) => {
        // Handle unsuccessful uploads
        },
        () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL( uploadTask.snapshot.ref ).then( ( downloadURL ) => {
            setFile( downloadURL );
          } );
        },
    );
  };

  const handleSectionsImageUpload = ( event, index ) => {
    const file = inputValue;

    const fileName = new Date().getTime() + file.name;
    const storage = getStorage( app );
    const storageRef = ref( storage, fileName );
    const uploadTask = uploadBytesResumable( storageRef, file );
    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
        'state_changed',
        ( snapshot ) => {
        // Observe state change events such as progress, pause, and resume
        // eslint-disable-next-line max-len
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress
          = ( snapshot.bytesTransferred / snapshot.totalBytes ) * 100;
          console.log( 'Upload is ' + progress + '% done' );
          switch ( snapshot.state ) {
            case 'paused':
              console.log( 'Upload is paused' );
              break;
            case 'running':
              console.log( 'Upload is running' );
              break;
            default:
          }
        },
        ( error ) => {
        // Handle unsuccessful uploads
        },
        () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL( uploadTask.snapshot.ref ).then( ( downloadURL ) => {
            const updatedList = [ ...sections ];
            updatedList[ index ] = { ...updatedList[ index ], [ inputName ]: downloadURL };
            setSections( updatedList );
          } );
        },
    );
  };

  const handleSelectChange = ( event ) => {
    const { value } = event.target;
    setForm( ( prevForm ) => ( {
      ...prevForm,
      hasExample: value,
    } ) );
  };

  const handleCoverChange = ( event ) => {
    const { value } = event.target;
    setForm( ( prevForm ) => ( {
      ...prevForm,
      cover: value,
    } ) );
  };

  const renderBlocks = ( index ) =>{
    switch ( inputType ) {
      case 'title':
        // eslint-disable-next-line max-len
        return <TextComponent onChange={ handleInputChange } add={ () => handleAddValue( index ) }/>;

      case 'text':
        // eslint-disable-next-line max-len
        return <TextAreaComponent onChange={ handleInputChange } add={ () => handleAddValue( index ) }/>;

      case 'code':
        // eslint-disable-next-line max-len
        return <CodeComponent onChange={ handleInputChange } add={ () => handleAddValue( index ) }/>;

      case 'file':
        // eslint-disable-next-line max-len
        return <ImageComponent onChange={ handleImageChange } add={ ( event ) => handleSectionsImageUpload( index ) }/>;

      case 'link':
        // eslint-disable-next-line max-len
        return <LinkComponent onChange={ handleInputChange } add={ ( event ) => handleAddValue( index ) } />;

      default:
        return null;
    }
  };

  return (
    <ArticleWrapper>
      <div className="background" />
      <form>
        <h2 className='title'>Add new article</h2>

        {/* eslint-disable-next-line max-len */}
        <input placeholder="main title" name="title" onChange={ changeHandler } required/>

        <input placeholder="description" name="desc" onChange={ changeHandler } required/>

        <input
          placeholder="add classes(ex.column-4,column-sm-4)"
          name="classes"
          onChange={ changeHandler }
          required
        />

        <input
          placeholder="add one main category(ex.JS or CSS)"
          name="category"
          onChange={ changeHandler }
          required
        />

        <input
          placeholder="add banner"
          type="file"
          onChange={ handleImageUpload }
        />

        <select value={ form.cover } onChange={ handleCoverChange }>
          <option value="No">Add custom cover ?</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        <input placeholder="add pills" onChange={ changeCat }/>

        <select value={ form.hasExample } onChange={ handleSelectChange }>
          <option value="No">Has example ?</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        <input
          placeholder="github link"
          name="github"
          onChange={ changeHandler }
          required
        />

        <button
          className='create_section'
          type='button'
          onClick={ handleButtonClick }
        >
            Create Section
        </button>

        <div className="sections">
          {
            sections.map( ( object, index ) => {
              return (
                <div key={ index } className='section'>
                  <div className="buttons">
                    <button
                      type='button'
                      onClick={ () => addFields( 'title', index ) }
                    >
                        add title
                    </button>
                    <button
                      type='button'
                      onClick={ () => addFields( 'text', index ) }
                    >
                        add text
                    </button>
                    <button
                      type='button'
                      onClick={ () => addFields( 'code', index ) }
                    >
                        add code
                    </button>
                    <button
                      type='button'
                      onClick={ () => addFields( 'file', index ) }
                    >
                        add image
                    </button>

                    <button
                      type='button'
                      onClick={ () => addFields( 'link', index ) }
                    >
                      add link
                    </button>
                  </div>

                  {renderBlocks( index )}

                  <div className='preview'>
                    <div className='preview_item'>
                      <span className='preview_item--title'>ID:</span>
                      {object.id}
                    </div>

                    <div className='preview_item'>
                      <span className='preview_item--title'>sortOrder:</span>
                      {object.sortOrder}
                    </div>

                    <div className='preview_item'>
                      <span className='preview_item--title'>title:</span>
                      {object.title }
                    </div>

                    <div className='preview_item text'>
                      <span className='preview_item--title'>text:</span>
                      <span>{object.text }</span>
                    </div>

                    <div className='preview_item code'>
                      <span className='preview_item--title'>code:</span>
                      <pre>
                        {object.code }
                      </pre>
                    </div>
                  </div>
                </div>
              );
            } )
          }
        </div>

        <button
          className='save'
          type='submit'
          onClick={ ( e ) => handleSubmit( e ) }
        >
            Save
        </button>
        <button
          type='button'
          onClick={ test }
        >
          clear
        </button>
      </form>
    </ArticleWrapper>
  );
};

export default ArticleCreator;
