import 'react-toastify/dist/ReactToastify.css';

import { toast } from 'react-toastify';

interface IProps {
  message: string;
  status: 'success' | 'error' | 'warn' | 'info';
}

const useToast = () => {
  const notify = ({ message, status }: IProps) => {
    switch (status) {
      case 'success':
        toast.success(message, { position: toast.POSITION.TOP_CENTER, toastId: `${message}-${status}` });
        break;
      case 'error':
        toast.error(message, { position: toast.POSITION.TOP_CENTER, toastId: `${message}-${status}` });
        break;
      case 'warn':
        toast.warn(message, { position: toast.POSITION.TOP_CENTER, toastId: `${message}-${status}` });
        break;
      case 'info':
        toast.info(message, { position: toast.POSITION.TOP_CENTER, toastId: `${message}-${status}` });
        break;
      default:
        toast(message, { position: toast.POSITION.TOP_CENTER, toastId: `${message}-${status}` });
    }
  };

  return notify;
};

export default useToast;
