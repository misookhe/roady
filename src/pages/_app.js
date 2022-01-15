
// import '../styles/header.scss'


import '../../styles/_app.scss';
import Layout from '~/components/layout/layout'

export default function MyApp({ Component, pageProps }) {
  
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}