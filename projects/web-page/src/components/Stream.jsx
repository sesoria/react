import HlsPlayer from 'react-hls-video-player';

const Stream = () => {
    return (
        <HlsPlayer
            src="https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8"
            hlsConfig={{
                autoStartLoad: true,
                startPosition: -1,
                debug: true,
                capLevelOnFPSDrop: true,
                maxBufferLength: 30,
                maxBufferSize: 60 * 1000 * 1000, // 60 MB
                maxBufferHole: 0.5,
                nudgeOffset: 0.1,
                nudgeMaxRetry: 5,
                abrBandWidthFactor: 0.95,
                abrBandWidthUpFactor: 0.7,
                lowLatencyMode: true,
                fragLoadPolicy: {
                    default: {
                        maxTimeToFirstByteMs: 9000,
                        maxLoadTimeMs: 100000,
                        timeoutRetry: {
                            maxNumRetry: 2,
                            retryDelayMs: 0,
                            maxRetryDelayMs: 0,
                        },
                        errorRetry: {
                            maxNumRetry: 5,
                            retryDelayMs: 3000,
                            maxRetryDelayMs: 15000,
                            backoff: 'linear',
                        },
                    },
                },
                cmcd: {
                    sessionId: 'your-session-id',
                    contentId: 'your-content-id',
                    useHeaders: false,
                },
            }}
            controls
            width="100%"
            height="auto"
        />
    );
};

export default Stream;
