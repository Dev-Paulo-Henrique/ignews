import Head from 'next/head'
import styles from './styles.module.scss'

export default function Posts(){
  return (
    <>
    <Head>
    <title>Posts | Ignews</title>
    </Head>

    <main className={styles.container}>
      <div className={styles.posts}>
        <a href="#">
          <time>18 de março de 2021</time>
          <strong>Mapas com React usando Leaflet</strong>
          <p>Leaflet é uma biblioteca JavaScript open-source para trabalhar com Mapas em aplicações web e mobile. Pode ser simplesmente integrada a um site usando apenas HTML, CSS e JavaScript.Podemos também integrar a Leaflet ao React com a biblioteca React Leaflet, que tem suporte ao TypeScript sendo bastante simples de utilizar. Ambas serão utilizadas em nossa aplicação de demonstração.Conforme podemos observar na animação acima, quando o usuário digita o endereço, sugestões de locais semelhantes começam a aparecer no autocomplete. Quando algum endereço é selecionado, o pin aparece centralizado no mapa, mostrando a localidade escolhida.</p>
        </a>
        <a href="#">
          <time>18 de março de 2021</time>
          <strong>Mapas com React usando Leaflet</strong>
          <p>Leaflet é uma biblioteca JavaScript open-source para trabalhar com Mapas em aplicações web e mobile. Pode ser simplesmente integrada a um site usando apenas HTML, CSS e JavaScript.Podemos também integrar a Leaflet ao React com a biblioteca React Leaflet, que tem suporte ao TypeScript sendo bastante simples de utilizar. Ambas serão utilizadas em nossa aplicação de demonstração.Conforme podemos observar na animação acima, quando o usuário digita o endereço, sugestões de locais semelhantes começam a aparecer no autocomplete. Quando algum endereço é selecionado, o pin aparece centralizado no mapa, mostrando a localidade escolhida.</p>
        </a>
        <a href="#">
          <time>18 de março de 2021</time>
          <strong>Mapas com React usando Leaflet</strong>
          <p>Leaflet é uma biblioteca JavaScript open-source para trabalhar com Mapas em aplicações web e mobile. Pode ser simplesmente integrada a um site usando apenas HTML, CSS e JavaScript.Podemos também integrar a Leaflet ao React com a biblioteca React Leaflet, que tem suporte ao TypeScript sendo bastante simples de utilizar. Ambas serão utilizadas em nossa aplicação de demonstração.Conforme podemos observar na animação acima, quando o usuário digita o endereço, sugestões de locais semelhantes começam a aparecer no autocomplete. Quando algum endereço é selecionado, o pin aparece centralizado no mapa, mostrando a localidade escolhida.</p>
        </a>
      </div>
    </main>
    </>
  )
}