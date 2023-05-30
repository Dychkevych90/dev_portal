import React, { useState } from 'react';

import { ArticleWrapper } from './styled';

const AddBlock = () => {
  const [ blockList, setBlockList ] = useState( [] );
  const [ banner, setBanner ] = useState( null );
  const [ category, setCategory ] = useState( [] );
  const [ form, setForm ] = useState( {
    id: 0,
    title: '',
    description: '',
    price: 0,
  } );
  // const [ showInputs, setShowInputs ] = useState( false );
  const [ inputSets, setInputSets ] = useState( [ {} ] );
  console.log( 'blockList', blockList );

  const changeHandler = ( event ) => {
    setForm( { ...form, [ event.target.name ]: event.target.value } );
  };

  const addCategory = ( e ) => {
    setCategory( e.target.value.split( ',' ) );
  };

  const handleAddObject = () => {
    const newObject = { };
    const selectedFields = inputSets[ inputSets.length - 1 ];

    Object.entries( selectedFields ).forEach( ( [ key, value ] ) => {
      newObject[ key ] = value;
    } );

    setBlockList( ( prevDataList ) => [ ...prevDataList, newObject ] );
    setInputSets( ( prevInputSets ) => [ ...prevInputSets, {} ] );
  };

  const handleInputChange = ( index, key, value ) => {
    setInputSets( ( prevInputSets ) => {
      const updatedInputSets = [ ...prevInputSets ];
      updatedInputSets[ index ][ key ] = value;
      return updatedInputSets;
    } );
  };

  const handleRemoveObject = ( index ) => {
    setBlockList( ( prevDataList ) => {
      const updatedDataList = [ ...prevDataList ];
      updatedDataList.splice( index, 1 );
      return updatedDataList;
    } );
    setInputSets( ( prevInputSets ) => {
      const updatedInputSets = [ ...prevInputSets ];
      updatedInputSets.splice( index, 1 );
      return updatedInputSets;
    } );
  };

  const handleSubmit = ( event ) => {
    event.preventDefault();
    console.log( blockList ); // Log all the data

    const data = {
      ...form,
      id: form.id + 1,
      banner: banner,
      created_date: new Date().toISOString(),
      categories: category,
      content: [ { small_title: form.small_title } ],
    };

    // Convert the blockList to JSON string
    const jsonData = JSON.stringify( data, null, 3 );
    console.log( 'jsonData', jsonData );
    // Create a Blob object with the JSON data
    const blob = new Blob( [ jsonData ], { type: 'application/json' } );

    // Create a URL for the Blob object
    const url = URL.createObjectURL( blob );

    // Create a link element
    const link = document.createElement( 'a' );
    link.href = url;
    link.download = 'data.json'; // Specify the filename

    // Simulate a click on the link to trigger the download
    link.click();
  };

  const [ newParamKey, setNewParamKey ] = useState( '' );
  const [ newParamValue, setNewParamValue ] = useState( '' );

  const handleAddParam = ( objectId ) => {
    setBlockList( ( prevObjects ) => {
      const updatedObjects = prevObjects.map( ( object ) => {
        if ( object.id === objectId ) {
          const updatedObject = { ...object, [ newParamKey ]: newParamValue };
          return updatedObject;
        }
        return object;
      } );
      return updatedObjects;
    } );
    setNewParamKey( '' ); // Reset the input field for the key after adding the parameter
    setNewParamValue( '' ); // Reset the input field for the value after adding the parameter
  };

  return (
    <ArticleWrapper>
      <form>
        <input type="text" name='title' placeholder='title' onChange={ changeHandler }/>
        <input type="file" onChange={ ( e ) => setBanner( e.target.files[ 0 ] ) }/>
        <input type="text" name='description' placeholder='description' onChange={ changeHandler }/>
        <input type="text" name='classes' placeholder='add classes' onChange={ changeHandler }/>
        <input type="text" name='categories' placeholder='add categories' onChange={ addCategory }/>
        <input type="text" name='small_title' placeholder='add' onChange={ changeHandler }/>

        <button type='button' onClick={ handleAddObject }>Add Object</button>

        <div>
          {inputSets.map( ( inputSet, index ) => (
            <div key={ index }>
              <h3>
                Object
                {index + 1}
              </h3>

              <input
                type="text"
                value={ inputSet.title || '' }
                onChange={ ( e ) => handleInputChange( index, 'title', e.target.value ) }
                placeholder="Title"
              />

              <input
                type="text"
                value={ inputSet.description || '' }
                onChange={ ( e ) => handleInputChange( index, 'description', e.target.value ) }
                placeholder="Description"
              />

              <input
                type="number"
                value={ inputSet.price || '' }
                onChange={ ( e ) => handleInputChange( index, 'price', e.target.value ) }
                placeholder="Price"
              />

              {/* eslint-disable-next-line max-len */}
              <button type='button' onClick={ () => handleRemoveObject( index ) }>Remove Object</button>
            </div>
          ) )}
        </div>

        {blockList.map( ( block, blockIndex ) => (
          <div key={ blockIndex }>
            {/* eslint-disable-next-line max-len */}
            <input type="text" value={ newParamKey } onChange={ ( e ) => setNewParamKey( e.target.value ) } />
            {/* eslint-disable-next-line max-len */}
            <input type="text" value={ newParamValue } onChange={ ( e ) => setNewParamValue( e.target.value ) } />
            <button type='button' onClick={ () => handleAddParam( block.id ) }>Add Param</button>
          </div>
        ) )}

        <button onClick={ handleSubmit }>Submit</button>
      </form>
    </ArticleWrapper>
  );
};

export default AddBlock;
