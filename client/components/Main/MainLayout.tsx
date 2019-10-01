import Head from "next/head"
import Header from "../Header/Header"
import { ResetCss } from "../Reset/style"
import { MainLayoutStyleGlobal } from "./styleGlobal"

const MainLayout = ({ breadCrumb, children }) => (
  <div>
    <Head>
      <title>Mercado Libre</title>
    </Head>

    <div className="container-site">
      <Header />
      { breadCrumb }
      <div className="content">
        { children }
      </div>
    </div>
  </div>
)

export default MainLayout
