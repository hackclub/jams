import styles from './Prose.module.scss'

export default function Prose({ children, props }) {
  return (
    <Box {...props} className={styles.prose}>
      {children}
    </Box>
  )
}
