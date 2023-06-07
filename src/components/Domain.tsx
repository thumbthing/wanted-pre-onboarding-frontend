const getCurrentDomain = () => {
  const { protocol, hostname, port } = window.location;
  const domain = `${protocol}//${hostname}${port ? `:${port}` : ""}`;
  return domain;
};

export default getCurrentDomain;
