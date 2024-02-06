import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'email',
    link: 'helissoncg@hotmail.com',
    href: 'mailto:helissoncg@hotmail.com',
  },
  {
    social: 'github',
    link: 'Helisson-Sousa',
    href: 'https://github.com/Helisson-Sousa',
  },
  {
    social: 'linkedin',
    link: 'Helisson Sousa',
    href: 'https://www.linkedin.com/in/helisson-sousa-a5b068236/',
  },
  {
    social: 'X',
    link: 'Helisson',
    href: 'https://www.twitter.com/@HelissonSa2eng',
  },
  {
    social: 'instagram',
    link: 'Helisson Sousa',
    href: 'https://www.instagram.com/helisson_pb',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
