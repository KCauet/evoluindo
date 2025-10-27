import { useRef, useState } from 'react'
import styles from './Music.module.css'
import { Play, Pause, SkipForward, SkipBack } from 'lucide-react'

function MusicPlayer() {

    const audio = useRef()
    const [isPlaying, setPlaying] = useState(false)
    const [display1, setDisplayPlay] = useState('block')
    const [display2, setDisplayPause] = useState('none')

    function playPause() {
        if (isPlaying) {
            audio.current.pause()
            setPlaying(false)
            setDisplayPlay('block')
            setDisplayPause('none')
        } else {
            audio.current.play()
            setPlaying(true)
            setDisplayPlay('none')
            setDisplayPause('block')
        }
        
    }

    return (
        <div className={styles.mainBox}>
            <div className={styles.subBox}>
                <div className={styles.buttons}>
                    
                    <audio ref={audio} src="/Blue lock.mp3"></audio>
                    <SkipBack size={32}/>
                    <Play size={32} onClick={playPause} display={display1}/>
                    <Pause size={32} onClick={playPause} display={display2} />
                    <SkipForward size={32}/>
                    
                    
                </div>
            </div>
        </div>
    )
}

export default MusicPlayer