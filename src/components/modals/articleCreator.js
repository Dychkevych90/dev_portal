import React, { useState } from 'react';

import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import app from '../../firebase';

import { ArticleWrapper } from './styled';

export const TextComponent = ( { onChange, add } ) => {
  return (
    <div>
      <input
        type="text"
        placeholder='title'
        name='title'
        onChange={ onChange }
      />

      <button type='button' onClick={ add }>Add Value</button>
    </div>
  );
};

export const TextAreaComponent = ( { onChange, add } ) => {
  return (
    <div>
      <textarea name="description" onChange={ onChange } placeholder='type text here...'></textarea>

      <button type='button' onClick={ add }>Add Value</button>
    </div>
  );
};

export const CodeComponent = ( { onChange, add } ) => {
  return (
    <div>
      <textarea name="description" onChange={ onChange } placeholder='type code here...'></textarea>

      <button type='button' onClick={ add }>Add Value</button>
    </div>
  );
};

export const ImageComponent = ( { onChange, add } ) => {
  return (
    <div>
      <input
        type="file"
        placeholder='title'
        name='image'
        onChange={ onChange }
      />

      <button onClick={ add }>Add Value</button>
    </div>
  );
};

const AddBlock = () => {
  const [ sections, setSections ] = useState( [] );
  const [ inputType, setInputType ] = useState( '' );
  const [ inputValue, setInputValue ] = useState( '' );
  const [ inputName, setInputName ] = useState( '' );
  const [ currentBlock, setCurrentBlock ] = useState( {
    id: 1,
    sortOrder: 1,
  } );
  const [ file, setFile ] = useState( null );
  const [ category, setCategory ] = useState( [] );
  const [ form, setForm ] = useState( {
    id: 1,
    desc: '',
    banner: null,
    classes: '',
    category: [],
    content: [],
  } );
  console.log( 'file', file );
  const changeHandler = ( event ) => {
    setForm( { ...form, [ event.target.name ]: event.target.value } );
  };

  const changeCat = ( e ) => {
    setCategory( e.target.value.split( ',' ) );
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

  const handleAddValue = ( index ) => {
    const updatedList = [ ...sections ];
    updatedList[ index ] = { ...updatedList[ index ], [ inputName ]: inputValue };
    setSections( updatedList );
  };

  const handleSubmit = ( e ) => {
    e.preventDefault();
    const newData = {
      ...form,
      id: form.id + 1,
      title: form.title,
      desc: form.desc,
      classes: form.classes,
      categories: category,
      content: sections,
    };

    // Convert newData to JSON and save it as a file
    const jsonData = JSON.stringify( newData, null, 2 );
    console.log( 'jsonData', jsonData );
    // // Create a Blob object with the JSON data
    // const blob = new Blob( [ jsonData ], { type: 'application/json' } );
    //
    // // Create a URL for the Blob object
    // const url = URL.createObjectURL( blob );
    //
    // // Create a link element
    // const link = document.createElement( 'a' );
    // link.href = url;
    // link.download = 'data.json'; // Specify the filename
    //
    // // Simulate a click on the link to trigger the download
    // link.click();
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
          const progress =
          ( snapshot.bytesTransferred / snapshot.totalBytes ) * 100;
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
        return <ImageComponent onChange={ handleInputChange } add={ () => handleAddValue( index ) }/>;

      default:
        return null;
    }
  };

  return (
    <ArticleWrapper>
      <div>
        <form>
          <h2>Add new article</h2>

          <input placeholder="main title" name="title" onChange={ changeHandler } required/>

          <input placeholder="description" name="desc" onChange={ changeHandler } required/>

          <input
            placeholder="add classes(ex.column-4,column-sm-4)"
            name="classes"
            onChange={ changeHandler }
            required
          />

          <input
            placeholder="add banner"
            type="file"
            onChange={ handleImageUpload }
          />

          <input placeholder="categories" onChange={ changeCat }/>

          <button type='button' onClick={ handleButtonClick }>Create Section</button>

          {
            sections.map( ( object, index ) => {
              return (
                <div key={ index }>
                  <button type='button' onClick={ () => addFields( 'title' ) }>add title</button>
                  <button type='button' onClick={ () => addFields( 'text' ) }>add text</button>
                  <button type='button' onClick={ () => addFields( 'code' ) }>add code</button>
                  <button type='button' onClick={ () => addFields( 'file' ) }>add image</button>

                  {renderBlocks( index )}
                  <div style={ { border: '1px solid red' } }>
                    <p>
                      index:
                      {index}
                    </p>

                    <p>
                      ID:
                      {object.id}
                    </p>

                    <p>
                      sortOrder:
                      {object.sortOrder}
                    </p>

                    <p>
                      title:
                      {object.title || 'null' }
                    </p>

                    <p>
                      text:
                      {object.text || 'null' }
                    </p>

                    <p>
                      code:
                      {object.code || 'null' }
                    </p>
                  </div>
                </div>
              );
            } )
          }

          <button type='submit' onClick={ ( e ) => handleSubmit( e ) }>Save</button>
        </form>
      </div>
    </ArticleWrapper>
  );
};

export default AddBlock;
