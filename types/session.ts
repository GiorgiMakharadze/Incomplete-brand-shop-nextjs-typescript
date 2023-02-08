export default interface SessionProps {
  user: {
    name: string;
    image: string;
    [key: string]: any;
  };
  [key: string]: any;
}
