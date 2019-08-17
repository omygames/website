import Head from 'next/head'
import { SITE_NAME } from '../config'

export default () => {
  return (
    <div className="container">
      <Head>
        <title>{SITE_NAME}</title>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0"
        />
      </Head>
      <a href="/" className="logo-link">
        <h1 className="logo">
          <img alt={SITE_NAME} src="/static/logo.png" />
        </h1>
      </a>
      <div
        style={{
          marginTop: 10,
        }}
      >
        <a href="https://github.com/OhMyGames" target="_blank" rel="noopener referrer">
          GitHub
        </a>
      </div>
      <h3 className="section-title">Latest games</h3>
      <ul className="game-list">
        <li>
          <a href="#">tankgame</a> <span className="hint">(will be published soon)</span>
        </li>
      </ul>
      <p className="hint">more games coming soon...</p>
      <style jsx>{`
        :global(body) {
          font-family: Arial;
          color: #333;
          margin: 0;
        }
        .container {
          padding: 20px;
        }
        .logo {
          margin: 0;
        }
        .logo img {
          max-width: 100px;
          height: auto;
          display: block;
        }
        .game-list {
          list-style: none;
          padding-left: 0;
        }
        .logo-link {
          display: inline-block;
        }
        .section-title {
          margin: 20px 0;
        }
        h1 {
          font-family: Arial;
          font-weight: normal;
        }
        .hint {
          font-size: 14px;
          opacity: 0.8;
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
