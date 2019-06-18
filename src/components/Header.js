import React from 'react'
import HeaderIcon from '../assets/images/astronaut-helmet.png';
import { fadeInUp } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    fadeInUp: {
        animationName: fadeInUp,
        animationDuration: '2s'
    }
});

const Header = () => (
            <div  className="hero-text-box">
                <img src={HeaderIcon} alt={'HeaderIcon'} className="icon-logo"/>
                    <h1 className={css(styles.fadeInUp)}>Jakub Kulaszewicz</h1>
                    <h2 className={css(styles.fadeInUp)}>A wannabe web developer</h2>
            </div>
);



export default Header;

