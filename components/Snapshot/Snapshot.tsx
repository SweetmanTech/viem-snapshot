import useSnapshot from '@/hooks/useSnapshot';

const Snapshot = () => {
  const { snapshot } = useSnapshot();

  return <div>HELLO WORLD</div>;
};

export default Snapshot;
