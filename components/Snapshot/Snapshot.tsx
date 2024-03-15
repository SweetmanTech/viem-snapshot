import useSnapshot from '@/hooks/useSnapshot';

const Snapshot = () => {
  const { snapshot } = useSnapshot();

  return (
    <div>
      <h2>Snapshot</h2>
      <table border={1}>
        <thead>
          <tr>
            <th>Token ID</th>
            <th>Owner</th>
          </tr>
        </thead>
        <tbody>
          {snapshot &&
            snapshot.map((owner: string, index: number) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{owner}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Snapshot;
