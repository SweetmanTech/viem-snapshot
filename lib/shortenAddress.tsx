const shortenAddress = (address: string) => {
  if (address.includes('.eth')) return address;

  const first = address.substring(0, 5);
  const last = address.substring(address.length - 5);
  return `${first}...${last}`;
};

export default shortenAddress;
