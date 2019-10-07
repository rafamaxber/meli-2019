import { useContext } from 'react'

import Head from "next/head";
import { MainThemeProvider } from './ThemeProvider';
import * as S from '../Common/main.styled';
import Header from "../Header/Header"
import { LayoutContext, LayoutManager } from './LayoutContext';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';

interface MainLayout {
  children?: JSX.ElementChildrenAttribute
}

export const MainLayout = ({ children }: MainLayout): JSX.Element => {

  const { title, breadCrumb } = useContext(LayoutContext)

  return (
    <>
      <S.MainLayout />
      <Head>
        <title>{title}</title>
      </Head>

      <S.ContainerSite>
        <Header />
        <BreadCrumbs steps={breadCrumb} />
        <S.Content>
          { children }
        </S.Content>
      </S.ContainerSite>
    </>
  )
}

export default (props: MainLayout): JSX.Element => (
  <MainThemeProvider>
    <LayoutManager>
      <MainLayout {...props}/>
    </LayoutManager>
  </MainThemeProvider>
)
