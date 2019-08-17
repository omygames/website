import Head from 'next/head'
import { SITE_NAME } from '../config'

export default () => {
  return (
    <div>
      <Head>
        <title>{SITE_NAME}</title>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0"
        />
      </Head>
      <h1>{SITE_NAME}</h1>
      <p>Latest games</p>
      <ul>
        <li>
          <a href="#">tankgame</a> (will be published soon)
        </li>
      </ul>
      <p>more games coming soon...</p>
      <style jsx>{`
        h1 {
          font-family: Arial;
          font-weight: normal;
        }
        :global(body) {
          font-family: Arial;
        }
        a {
          color: rgb(0, 146, 231);
        }
        a:hover {
          color: rgb(74, 181, 243);
        }
      `}</style>
    </div>
  )
}
