import naoelixoImg from '../../assets/naoelixo.png'
import 
fashionRImg from '../../assets/fashionR.jpeg'
import styles from './sobre.module.css'

function Sobre() {
  return (
    <>
      <div className={styles.header}>
        <h1>
          Precisamos Repensar o Consumo
        </h1>
        <img src={naoelixoImg} />
      </div>
      <div className={styles.subtitulo}>
      <a className={styles.itemLista} href="https://www.fashionrevolution.org/about/" target="-blank"> <img src={fashionRImg}/></a>

        <p>        Somos um movimento global que trabalha para que a moda conserve e restaure o meio ambiente, valorizando as pessoas acima do
         crescimento e do lucro. Existimos para que a moda seja limpa, segura, justa, transparente, diversa e responsável para todos
          e todas.</p>
      </div>
      <div className={styles.containerSobre}>
        <div className={styles.tituloSobre}>
        <h2 >Documentário Sobre o Mercado da Moda</h2>
        A mensagem principal do documentário é a de que não podemos mais ignorar os custos reais gerados pelo consumo desenfreado 
        e por preços desproporcionalmente baixos que sustentam o modelo vigente na indústria da Moda. Uso a forma verbal ‘podemos’ 
        para enfatizar que todos os envolvidos na cadeia de valor temos o nosso papel e precisamos nos sentir parte do problema e 
        da solução.
        </div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/SlwYq7t0ctw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </>
 
  )
}

export default Sobre