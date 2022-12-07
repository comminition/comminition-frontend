const pageVariants = {
  initial: {
    opacity: 0,
    x: '100vh',
  },
  in: {
    opacity: 1,
    x: '0',
  },
  out: {
    opacity: 0,
    x: '-100vw',
  },
};

export const pageTransition = {
  type: 'tween',
  duration: 0.3,
};

export default pageVariants;
