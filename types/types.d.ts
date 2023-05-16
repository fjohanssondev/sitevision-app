/* eslint-disable @typescript-eslint/no-empty-interface */

export interface AppProps {

}

export interface InitialProps {

}

export interface CategoryProps {
  category: {
    id: string;
    name: string;
    teams: {
      id: string;
      name: string;
    }[]
  }
}