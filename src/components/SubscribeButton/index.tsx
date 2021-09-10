import styles from './styles.module.scss'

interface SubscribeButtonProps {
  price_id: string;
}

export function SubscribeButton({ price_id }: SubscribeButtonProps) {
  return (
    <button
      type="button"
      className={styles.subscribeButton}
    >
      Subscribe now
    </button>
  );
}

