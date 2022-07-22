import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  
  render() {

    return (
      
      <Html>
        <Head>
          <title>Raqzid</title>
          <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js" async />
          <script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js" async />
          <link rel="icon" href="https://cdn.discordapp.com/attachments/964124997503307776/999371084690362519/R.png" />
<script src="https://unpkg.com/@popperjs/core@2/dist/umd/popper.min.js" async/>
<script src="https://unpkg.com/tippy.js@6/dist/tippy-bundle.umd.js" async/>
<script src="https://unpkg.com/@popperjs/core@2" async/>
<script src="https://unpkg.com/tippy.js@6" async />
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
<link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400;600;700;900&display=swap" rel="stylesheet"/>
        </Head>
        <body className='bg-white text-black'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
