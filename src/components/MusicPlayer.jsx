import styles from './Music.module.css'
import { Play, Pause, SkipForward, SkipBack, Volume2, Dam } from 'lucide-react'

function MusicPlayer() {

    function play() {
        alert('Dando play')
    }

    return (
        <div className={styles.mainBox}>
            <div className={styles.subBox}>
                <div className={styles.buttons}>
                    
                    <SkipBack size={32}/>
                    <Play size={32} onClick={play} style={{display: 'none'}}/>
                    <Pause size={32}/>
                    <SkipForward size={32}/>
                    
                    
                </div>
            </div>
        </div>
    )
}

export default MusicPlayer