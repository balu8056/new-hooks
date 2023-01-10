import Head from 'next/head'
import { useId } from 'react'

type SampleFormType = {
  head: String
}

const WithUseId = ({head}: SampleFormType) => {
  const id = useId()
  return <>
    <h2>{head}</h2>
    <div style={{padding: '30px'}}>
      <label htmlFor={`${id}-username`}>Username</label>
      <div>
        <input id={`${id}-username`} type="text" />
      </div>
      <label htmlFor={`${id}-password`}>Password</label>
      <div>
        <input id={`${id}-password`} type="password" />
      </div>
    </div>
  </>
}

const WithoutUseId = ({head}: SampleFormType) => {
  return <>
    <h2>{head}</h2>
    <div style={{padding: '30px'}}>
      <label htmlFor="username">Username</label>
      <div>
        <input id="username" type="text" />
      </div>
      <label htmlFor="password">Password</label>
      <div>
        <input id="password" type="password" />
      </div>
    </div>
  </>
}

export default function Home() {
  return (
    <>
      <Head>
        <title>useId</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{ margin: '100px'}}>
        <WithUseId head={'Host'} />
        <hr />
        <WithUseId head={'Guest'} />
      </main>
    </>
  )
}
