import Card from '../Card';
import styles from './Stations.module.scss';

export default function Stations() {
  return (
    <>
      <section className={styles.stations}>
        <div className={`${styles.containerWrapper} ${'container'}`}>
          <h2 className={'visually-hidden'}>Stations</h2>
          <Card
            imageUrl={'./images/single.jpg'}
            imageAlt={'station "single"'}
            title={'"Single"'}
            instLinkEn={'/'}
            instLinkUkr={'/'}
            instLinkRu={'/'}
            eacLink={'/'}
            ceLink={'/'}
          />
          <Card
            imageUrl={'./images/i-station.jpg'}
            imageAlt={'station "I-Station"'}
            title={'"I-Station"'}
            instLinkEn={'/'}
            instLinkUkr={'/'}
            instLinkRu={'/'}
            eacLink={'/'}
            ceLink={'/'}
          />
          <Card
            imageUrl={'./images/dc-travel-charger.jpg'}
            imageAlt={'station DC Travel Charger'}
            title={'DC Travel Charger'}
            instLinkEn={'/'}
            instLinkUkr={'/'}
            instLinkRu={'/'}
          />
          <Card
            imageUrl={'./images/wall-charge-complex.jpg'}
            imageAlt={'station Wall Charge Complex'}
            title={'Wall Charge Complex'}
            instLinkEn={'/'}
            instLinkUkr={'/'}
            instLinkRu={'/'}
            eacLink={'/'}
          />
          <Card
            imageUrl={'./images/charge-complex-t.jpg'}
            imageAlt={'station Charge Complex-T'}
            title={'Charge Complex-T'}
            instLinkEn={'/'}
            instLinkUkr={'/'}
            instLinkRu={'/'}
            eacLink={'/'}
          />
          <Card
            imageUrl={'./images/charge-complex-y.jpg'}
            imageAlt={'station Charge Complex-y'}
            title={'Charge Complex-Y'}
            instLinkEn={'/'}
            instLinkUkr={'/'}
            instLinkRu={'/'}
            eacLink={'/'}
          />
        </div>
      </section>

      <section className={styles.archive}>
        <div className={`${styles.containerWrapper} ${'container'}`}>
          <h2 className={styles.title}>Archive</h2>
          <Card
            imageUrl={'./images/home.jpg'}
            imageAlt={'station Home'}
            title={'Home'}
            instLinkEn={'/'}
            instLinkUkr={'/'}
            instLinkRu={'/'}
          />
          <Card
            imageUrl={'./images/edison.jpg'}
            imageAlt={'station Edison'}
            title={'Edison'}
            instLinkEn={'/'}
            instLinkUkr={'/'}
            instLinkRu={'/'}
          />
          <Card
            imageUrl={'./images/shnaider.jpg'}
            imageAlt={'station Shnaider'}
            title={'Shnaider'}
            instLinkEn={'/'}
            instLinkUkr={'/'}
            instLinkRu={'/'}
          />
          <Card
            imageUrl={'./images/charge-complex-p.jpg'}
            imageAlt={'station Charge Complex-P'}
            title={'Charge Complex-P'}
            instLinkEn={'/'}
            instLinkUkr={'/'}
            instLinkRu={'/'}
          />
        </div>
      </section>
    </>
  );
}
