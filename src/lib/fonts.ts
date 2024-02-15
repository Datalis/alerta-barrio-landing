import localFont from 'next/font/local';

export const codecPro = localFont({
    display: 'fallback',
    variable: '--font-codec-pro',
    src: [
        {
            path: './fonts/CodecPro-News.woff2',
            weight: '300'
        },
        {
            path: './fonts/CodecPro-Bold.woff2',
            weight: '500'
        },
        {
            path: './fonts/CodecPro-Heavy.woff2',
            weight: '900'
        },
        {
            path: './fonts/CodecPro-HeavyItalic.woff2',
            weight: '900',
            style: 'italic'
        }
    ]
})