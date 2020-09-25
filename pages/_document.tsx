import Document, { DocumentProps, Html, Head, Main, NextScript } from 'next/Document'

class MyDocument extends Document<DocumentProps>{
    render(): JSX.Element {
        return (
            <Html >
                <Head>
                    <meta name="theme-color" content="#E8685E" />
                    <meta name="apple-mobile-web-app-status-bar-style" content="#E8685E"/>
                    <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;700&display=swap" rel="stylesheet" />
                </Head>
                <body>
                    <Main />
                    <NextScript />                    
                </body>
            </Html>
        )
    }
}

export default MyDocument;