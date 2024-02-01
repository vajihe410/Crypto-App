import React from 'react'
//styles
import styles from './Layout.module.css'

function Layout({children}) {
  return (
    <>
        <header className={styles.header}>
            <h1>Crypto App</h1>
        </header>
        {children}
        <footer className={styles.footer}>
            <p>Developed with </p>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAZxJREFUSEvFlT9Lw0AYxp/nevgNhA4KHSJJO7qoaEHBwVFBN0FwcvSbOLo7KXRQcBXEFnRxbRKMINLBPx+h8V6Jf0qTpjU1Lb0xl3t+9zzv3XvEmAfHrI/JAELb3lXklgALAARAQ8gz7brnkePQtrcJbINcBkACd4asadc9TSYScyCWNS1anwiwkRadkA2IaAKLafMELhmG+wyC99/5DkCAwofj1Aks5amLiNQLvr9KwEQ6HcCHbR+APM4j/rtWyD3tuidxgOPcA5gfCQC41p63lgS0AehRAAC8FjyvOE5Aq+B5szFA6Dh3/D6WuQfJC+W6m3EH5fIhRI5yq0cXR2RH+34tBpBKZcoYc5u30BS5Ur6/3nMPog9SqRSNMTcA5v7p5EG12yt8fHxLBXRB6gCsISGBUqrKZvOle11qs/txEsVVygh5UkotJcVjNUgKiWXNGK0jJ39BnlQYVhkErT79qf8eM0AGig900Okr/Z38KZ4J8FX4Xkgm8cyALkhU+HBQ5snAh3oyxXFKUMqw2XzOeLom9CZn3V2W/z4Bx2emGfJ9GFAAAAAASUVORK5CYII="/>
        </footer>
    </>
  )
}

export default Layout