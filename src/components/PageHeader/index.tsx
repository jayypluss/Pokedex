import React, { ReactNode } from 'react';
import { View, Image, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/native';

import styles from './styles';

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

    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                {showBackButton && (<BorderlessButton onPress={handleGoBack}>
                    <Text>Voltar</Text>
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