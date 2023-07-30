const handleApiError = ( error ) => {
  let errorMessage = 'An error occurred.';

  if ( error.response ) {
    const { data, status } = error.response;
    errorMessage = data.message || `Request failed with status: ${status}`;
  } else if ( error.request ) {
    errorMessage = 'No response received from the server.';
  } else {
    errorMessage = error.message || 'An unknown error occurred.';
  }

  return errorMessage;
};

export default handleApiError;
