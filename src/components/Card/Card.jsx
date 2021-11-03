import styles from './Card.module.scss';
import { ReactComponent as DownloadIcon } from './svg/download.svg';
import { ReactComponent as EacIcon } from './svg/eac.svg';
import { ReactComponent as CeIcon } from './svg/ce.svg';

export default function Card({
  imageUrl,
  imageAlt,
  title,
  instLinkEn,
  instLinkUkr,
  instLinkRu,
  eacLink,
  ceLink,
}) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={imageUrl} alt={imageAlt} />
      </div>

      <div className={styles.infoWrapper}>
        <h3 className={styles.title}>{title}</h3>

        <ul className={`${styles.linksWrapper} ${'list'}`}>
          <li className={styles.linksItem}>
            <a
              className={`${styles.link} ${'link'}`}
              href={instLinkEn}
              download
            >
              Download instructions &gt;
            </a>
          </li>
          <li className={styles.linksItem}>
            <a
              className={`${styles.link} ${'link'}`}
              href={instLinkUkr}
              lang="ukr"
              download
            >
              Завантажити інструкцію &gt;
            </a>
          </li>
          <li className={styles.linksItem}>
            <a
              className={`${styles.link} ${'link'}`}
              href={instLinkRu}
              lang="ru"
              download
            >
              Скачать инструкцию &gt;
            </a>
          </li>
        </ul>

        {(eacLink || ceLink) && (
          <ul className={`${styles.buttonWrapper} ${'list'}`}>
            {eacLink && (
              <li className={styles.buttonItem}>
                <button className={styles.button} type="button" href={eacLink}>
                  <DownloadIcon className={styles.buttonIcon} />
                  <EacIcon className={styles.buttonIcon} />
                </button>
              </li>
            )}
            {ceLink && (
              <li className={styles.buttonItem}>
                <button className={styles.button} type="button" href={ceLink}>
                  <DownloadIcon className={styles.buttonIcon} />
                  <CeIcon className={styles.buttonIcon} />
                </button>
              </li>
            )}
          </ul>
        )}
      </div>
    </div>
  );
}
