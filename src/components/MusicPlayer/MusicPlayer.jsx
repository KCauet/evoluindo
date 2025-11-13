import { useEffect, useRef, useState } from 'react'
import styles from './Music.module.css'
import { Play, Pause, SkipForward, SkipBack, Volume2, Volume1, VolumeOff } from 'lucide-react'

function MusicPlayer() {

    const audio = useRef()
    const [isPlaying, setPlaying] = useState(false)
    const [volume, setVolume] = useState(1)
    const [volumeBackcup, setBackup] = useState(0)
    const [tempoAtual, setTempoAtual] = useState(0)

    function playPause() {
        if (isPlaying) {
            audio.current.pause()
            setPlaying(false)
        } else {
            audio.current.play()
            setPlaying(true)
            setTempoAtual(audio.current.currentTime)
        }
        
    }

    function volumeIcon() {

        if (volume === 0) {
            return <VolumeOff size={32} onClick={mutarDesmutar}/>
        } else if (volume > 0 && volume < 0.35) {
            return <Volume1 size={32} onClick={mutarDesmutar}/>
        } else {
            return <Volume2 size={32} onClick={mutarDesmutar}/>
        }
    }

    function ajeitarIcone(event) {
        const novoVolume = event.target.value / 100
        setVolume(novoVolume)
        audio.current.volume = novoVolume
    }

    function mutarDesmutar() {
        if (volume !== 0) {
            setBackup(volume)
            setVolume(0)
            audio.current.volume = 0
        } else {
            setVolume(volumeBackcup)
            audio.current.volume = volumeBackcup
        }
    }

    useEffect(() => {
        let intervalo = setInterval(() => {
            if (audio.current.currentTime !== undefined) {
                setTempoAtual(audio.current.currentTime)
            }
            
            return () => {clearInterval(intervalo)}
        }, 100)

    }, [])

    return (
        <div className={styles.mainBox}>
            <div className={styles.subBox}>
                <div className={styles.buttons}>
                    
                    <audio ref={audio} src="/musicas/Blue lock.mp3"></audio>
                    <SkipBack size={32}/>

                    {isPlaying ? (
                        <Pause size={32} onClick={playPause} />
                    ) : (
                        <Play size={32} onClick={playPause} />
                    )}
                    
                    <SkipForward size={32}/>
                    {volumeIcon()}

                    <div>
                        <input type="range" onChange={ajeitarIcone}/>
                    </div>
                    
                </div>

                <div className={styles.progressBar}>
                    <input type="range" min='0' max={audio.current?.duration || 0} value={tempoAtual} onChange={event => {
                        
                        let progresso = event.target.value;
                        audio.current.currentTime = progresso
                        setTempoAtual(progresso)
                        
                    }}/>
                </div>
            </div>
        </div>
    )
}

export default MusicPlayer