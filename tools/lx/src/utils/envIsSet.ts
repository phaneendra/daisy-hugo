export const envIsSet = (name: string): boolean => {
  return (
    // process.env.hasOwnProperty(name) &&
    process.env[name] && process.env[name] !== "undefined"
  );
};
