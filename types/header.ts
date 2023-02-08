export interface UserMenuProps {
  session:
    | {
        user: {
          name: string;
          image: string;
        };
      }
    | undefined;
}
