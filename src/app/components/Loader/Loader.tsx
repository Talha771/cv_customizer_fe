import styles from "./loader.module.scss"

interface LoaderProps{
    loading: boolean
}

export function Loader({loading}:LoaderProps){

    return loading? <div className={styles.loader}/> : null

}