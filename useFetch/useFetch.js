import React, { useRef, useEffect, useState } from 'react'

export const useFetch = (url) => {

    const isMounted = useRef(true);
    const [state, setState] = useState({ data: null, loading: true, error: null });

    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, []) //ESTO PREVIENE PROBLEMAS DE EXCESO DE USO DE MEMORIA POR ABRIR Y CERRAR EL COMPONENTE ANTES DE QUE SE CARGUE

    useEffect(() => {

        setState({ data: null, loading: true, error: null });

        fetch(url)
            .then(respuesta => respuesta.json())
            .then(data => {

                // setTimeout(() => {

                if (isMounted.current) {
                    setState({
                        data,
                        loading: false,
                        error: null
                    })
                } else {
                    console.log('setState no se llamó');
                }

                //  }, 3000);


            });

    }, [url])

    return state;

}
