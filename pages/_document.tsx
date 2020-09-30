import Document, { DocumentProps, Html, Head, Main, NextScript } from 'next/Document'

class MyDocument extends Document<DocumentProps>{
    render(): JSX.Element {
        return (
            <Html lang="pt-br">
                <Head>                 
                {/* Global site tag (gtag.js) - Google Analytics */}  
                <script dangerouslySetInnerHTML={{__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','G-RVXSE9GWK7');`}} />                     
                <meta name="theme-color" content="#E8685E" />
                <meta name="description" content="Aplicativo para consultas de códigos fiscais tributários brasileiro."></meta> 
                <meta name="apple-mobile-web-app-status-bar-style" content="#E8685E"/>
                <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;700&display=swap" rel="stylesheet" />              
                </Head>
                <noscript dangerouslySetInnerHTML={{__html: `<iframe src="https://www.googletagmanager.com/ns.html?id=G-RVXSE9GWK7" height="0" width="0" style="display:none;visibility:hidden;"></iframe>`}} />                      
                <body>
                    <Main />
                    <NextScript />                                        
                </body>
            </Html>
        )
    }
}

export default MyDocument;