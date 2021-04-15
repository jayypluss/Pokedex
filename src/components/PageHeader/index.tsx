import React, { ReactNode } from 'react';
import { View, Text, Image } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/native';

import styles from './styles';

import backButtonIcon from '../../../assets/icons/arrow-left-solid.png';

interface PageHeaderProps {
    title: string;
    showBackButton?: boolean;
    headerRight?: ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, headerRight, showBackButton, children }) => {
    const { navigate } = useNavigation();
    
    function handleGoBack() {
        navigate('PokeList');
    }

    if (title != "Pokedex") {
        // enter if isn't home screen
        showBackButton = true;
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                {showBackButton && (<BorderlessButton style={styles.backButton} onPress={handleGoBack}>
                    <Image style={styles.backButtonIcon} source={backButtonIcon} resizeMode='contain' />
                </BorderlessButton>)}
            </View>

            <View style={styles.header}>
                <Text style={styles.title}>{title}</Text>
                {headerRight}
            </View>

            {children}
        </View>
    )
}

export default PageHeader;
