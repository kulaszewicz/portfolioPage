import React from 'react'
import ReactLoading from 'react-loading';

const LoadingScreen = () => (
    <div className={'loadingScreen'}>
        <div className={'loadingScreen__spinner'}>
            <ReactLoading type={'bubbles'} color={'#dfdfdf'} height={667} width={375} />
        </div>
        <h5 className={'loadingScreen-title'}>Portfolio is Loading ...</h5>
    </div>
);

export default LoadingScreen;