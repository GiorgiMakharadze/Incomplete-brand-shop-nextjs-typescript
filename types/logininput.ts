export default interface LoginIputProps {
  icon: string;
  placeholder: string;
  type: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
