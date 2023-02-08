interface AuthOptionsProps {
  clientId: string | undefined;
  clientSecret: string | undefined;
}

interface NextAuthOptions {
  providers: (AuthOptionsProps & {
    type: string | undefined;
  })[];
}
export default NextAuthOptions;
