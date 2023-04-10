import Head from 'next/head';
import QRCodeGenerator from './qr-code';


export default function Home() {
  return (
    <>
      <Head>
        <title>QRcode Generator | Ramazan Azimli</title>
        <meta name="description" content="Advanced QRcode Generator | Ramazan Azimli" />
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500&f[]=author@500,600,700&f[]=general-sans@500,600,700&f[]=outfit@800,500,700&f[]=beVietnam-pro@600,900,700,800&f[]=excon@900,700,500&f[]=chillax@600,700&f[]=nippo@700&f[]=work-sans@800,600,700,601&display=swap" rel="stylesheet"></link>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Head>
    <div>
      <QRCodeGenerator/>
      <div className='creator-content'>
        <h3>Developed by <a href="">Ramazan Azimli</a></h3>
      </div>
    </div>
    </>
  )
}
