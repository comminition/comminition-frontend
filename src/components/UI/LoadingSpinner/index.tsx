import { Spinner } from '@chakra-ui/react';

const LoadingSpinner = () => {
  return <Spinner position="fixed" top="50%" left="50%" transform="translate(-50%,-50%)" zIndex="1000" />;
};

export default LoadingSpinner;
