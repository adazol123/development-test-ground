import React, { useEffect, useState } from 'react'

const Image = ({data_src, src, ...props}) => {
    const [url, setURL] = useState(data_src || src)

    useEffect(() => {
        if(url === data_src) {
            fetch(src)
                .then(raw => raw.blob())
                .then(blob => {
                    const fileReader = new FileReader()
                    fileReader.onload = function() {
                        setURL(this.result)
                    }
                    fileReader.readAsDataURL(blob)
                })
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        
        <img
            alt={props.alt || 'image'}
            {...{ src: url, ...props}}
        />
    )
}



export default Image
