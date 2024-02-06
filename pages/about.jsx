import styles from '../styles/ContactCode.module.css';

const AboutPage = () => {
  return (
    <>
      <h4>
        <span className={styles.className}>import</span>
        {' '}
        <span className={styles.classLib}>{'{Engenharia de Software}'}</span>
        {' '}
        <span className={styles.className}>from</span>
        {' '}
        <span className={styles.classModule}>Faculdade Metropolitana;</span>
      </h4>
      <h4>
        <span className={styles.className}>import</span>
        {' '}
        <span className={styles.classLib}>{'{Dev Front-End}'}</span>
        {' '}
        <span className={styles.className}>from</span>
        {' '}
        <span className={styles.classModule}>.StartSe;</span>
      </h4>
      <h4>
        <span className={styles.className}>import</span>
        {' '}
        <span className={styles.classLib}>{'{Web Developer}'}</span>
        {' '}
        <span className={styles.className}>from</span>
        {' '}
        <span className={styles.classModule}>freeCodeCamp;</span>
      </h4>
      <h4>
        <span className={styles.className}>import</span>
        {' '}
        <span className={styles.classLib}>{'{Administração}'}</span>
        {' '}
        <span className={styles.className}>from</span>
        {' '}
        <span className={styles.classModule}>UFPB;</span>
      </h4>
      <h4>
        <span className={styles.className}>import</span>
        {' '}
        <span className={styles.classLib}>{'{Engenharia Civil}'}</span>
        {' '}
        <span className={styles.className}>from</span>
        {' '}
        <span className={styles.classModule}>UFCG;</span>
      </h4>

      <h4 style={{ marginTop: 50 }}>
        console.log("Hello Word")! <br/> 
        <br/> 
        Sou um desenvolvedor front-end criativo, comunicativo, curioso
        e que adora resolver problemas lógicos e inovar.
        Com formação também em Engenharia Civil e Administração, trago para meus
        projetos o melhor destas áreas.
        <br />
        <br />
        <br />
        Confira os projetos em que trabalhei na aba projects.js e entre em contato.
      </h4>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
