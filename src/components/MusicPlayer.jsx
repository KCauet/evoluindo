import { useRef, useState } from 'react'
import styles from './Music.module.css'
import { Play, Pause, SkipForward, SkipBack, Volume2, Volume1, VolumeOff } from 'lucide-react'

function MusicPlayer() {

    const audio = useRef()
    const [isPlaying, setPlaying] = useState(false)
    const [display1, setDisplayPlay] = useState('block')
    const [display2, setDisplayPause] = useState('none')
    const [volume, setVolume] = useState(1)

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

    function volumeIcon() {

        if (volume === 0) {
            return <VolumeOff size={32}/>
        } else if (volume > 0 && volume < 0.35) {
            return <Volume1 size={32}/>
        } else {
            return <Volume2 size={32}/>
        }
    }

    function ajeitarIcone(event) {
        const novoVolume = event.target.value / 100
        setVolume(novoVolume)
        audio.current.volume = novoVolume
    }

    return (
        <div className={styles.mainBox}>
            <div className={styles.subBox}>
                <div className={styles.buttons}>
                    
                    <audio ref={audio} src="/musicas/Blue lock.mp3"></audio>
                    <SkipBack size={32}/>
                    <Play size={32} onClick={playPause} display={display1}/>
                    <Pause size={32} onClick={playPause} display={display2} />
                    <SkipForward size={32}/>
                    {volumeIcon()}
                    <div >
                        <input type="range" onChange={ajeitarIcone}/>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default MusicPlayer