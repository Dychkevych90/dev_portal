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
    created_date: new Date().toISOString(),
    content: [
      { small_title: '' },
    ],
  } );

  const changeHandler = ( event ) => {
    setForm( { ...form, [ event.target.name ]: event.target.value } );
  };

  const addCategory = ( e ) => {
    setCategory( e.target.value.split( ',' ) );
  };

  const handleAddSection = () => {
    setBlockList( ( prevBlockList ) => [ ...prevBlockList, { fields: [] } ] );
  };

  const handleAddField = ( blockIndex, fieldType ) => {
    setBlockList( ( prevBlockList ) => {
      const updatedBlockList = [ ...prevBlockList ];
      const block = updatedBlockList[ blockIndex ];

      // const existingField = block.fields.find( ( field ) => field.type === fieldType );
      //
      // if ( !existingField ) {
      //   block.fields.push( { type: fieldType, value: '' } );
      // }

      block.fields.push( { type: fieldType, value: '', desc: '' } );

      return updatedBlockList;
    } );
  };

  const handleFieldChange = ( blockIndex, fieldIndex, event ) => {
    const { value, description } = event.target;
    // eslint-disable-next-line prefer-const
    let sortOrder = 0;
    sortOrder++;
    setBlockList( ( prevBlockList ) => {
      const updatedBlockList = [ ...prevBlockList ];
      updatedBlockList[ blockIndex ].fields[ fieldIndex ].value = value;
      updatedBlockList[ blockIndex ].fields[ fieldIndex ].sortOrder = sortOrder + 1;
      updatedBlockList[ blockIndex ].fields[ fieldIndex ].description = description;
      return updatedBlockList;
    } );
  };

  const handleRemoveField = ( blockIndex, fieldIndex ) => {
    setBlockList( ( prevBlockList ) => {
      const updatedBlockList = [ ...prevBlockList ];
      updatedBlockList[ blockIndex ].fields.splice( fieldIndex, 1 );
      return updatedBlockList;
    } );
  };

  const handleRemoveSection = ( index ) => {
    setBlockList( ( prevBlockList ) => {
      const updatedBlockList = [ ...prevBlockList ];
      updatedBlockList.splice( index, 1 );
      return updatedBlockList;
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

  return (
    <ArticleWrapper>
      <form>
        <input type="text" name='title' placeholder='title' onChange={ changeHandler }/>
        <input type="file" onChange={ ( e ) => setBanner( e.target.files[ 0 ] ) }/>
        <input type="text" name='description' placeholder='description' onChange={ changeHandler }/>
        <input type="text" name='classes' placeholder='add classes' onChange={ changeHandler }/>
        <input type="text" name='categories' placeholder='add categories' onChange={ addCategory }/>
        <input type="text" name='small_title' placeholder='add' onChange={ changeHandler }/>

        <button type='button' onClick={ handleAddSection }>Add Section</button>

        { blockList.map( ( block, blockIndex ) => (
          <div key={ blockIndex }>
            <h3>
              Section
              {blockIndex + 1}
            </h3>

            {block.fields.map( ( field, fieldIndex ) => (
              <div key={ fieldIndex }>
                {field.type === 'text' && (
                  <input
                    type="text"
                    value={ field.value }
                    onChange={ ( event ) => handleFieldChange( blockIndex, fieldIndex, event ) }
                  />
                )}
                {field.type === 'description' && (
                  <input
                    type="text"
                    value={ field.value }
                    onChange={ ( event ) => handleFieldChange( blockIndex, fieldIndex, event ) }
                  />
                )}
                {field.type === 'image' && (
                  <input
                    type="file"
                    value={ field.value }
                    onChange={ ( event ) => handleFieldChange( blockIndex, fieldIndex, event ) }
                  />
                )}
                {field.type === 'video' && (
                  <input
                    type="url"
                    value={ field.value }
                    onChange={ ( event ) => handleFieldChange( blockIndex, fieldIndex, event ) }
                  />
                )}
                <button
                  onClick={ () => handleRemoveField( blockIndex, fieldIndex ) }
                  type='button'
                >
                  Remove Field
                </button>
              </div>
            ) ) }

            <div>
              <select onChange={ ( event ) => handleAddField( blockIndex, event.target.value ) }>
                <option value="">Select a field type</option>
                <option value="text">Text Field</option>
                <option value="description">description Field</option>
                <option value="image">Image Field</option>
                <option value="video">Video Field</option>
              </select>
            </div>

            {/* eslint-disable-next-line max-len */}
            <button type='button' onClick={ () => handleRemoveSection( blockIndex ) }>Remove Section</button>
          </div>
        ) )}

        <button onClick={ handleSubmit }>Submit</button>
      </form>
    </ArticleWrapper>
  );
};

export default AddBlock;
