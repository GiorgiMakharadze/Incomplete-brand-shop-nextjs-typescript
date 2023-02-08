interface IProvider {
  id: string;
  name: string;
  icon?: string;
  component?: any;
}

export default interface IProviders {
  providers: IProvider[];
}
