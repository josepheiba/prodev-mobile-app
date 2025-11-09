import React from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { styles } from '../styles/_mainstyle';
import { BACKGROUNDIMAGE, HEROLOGO } from '../constants';
import { Link, router } from 'expo-router';

export default function Index() {
  const handleJoinNow = () => {
    router.replace('/join');
  };

  return (
    <View style={styles.container}>
      <ImageBackground 
        source={BACKGROUNDIMAGE} 
        style={styles.backgroundImageContainer}
        resizeMode="cover"
      >
        <View style={styles.logoContainer}>
          <Image source={HEROLOGO} resizeMode="contain" />
          
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Find your dream home</Text>
          </View>
          
          <View style={styles.titleSubTextContainer}>
            <Text style={styles.titleSubText}>
              Find your perfect property with our comprehensive real estate platform
            </Text>
          </View>
        </View>
        
        <View style={{ flex: 1, justifyContent: 'flex-end', paddingBottom: 60 }}>
          <View style={styles.buttonGroup}>
            <TouchableOpacity style={styles.buttonPrimary} onPress={handleJoinNow}>
              <Text style={styles.buttonPrimaryText}>Join Now</Text>
            </TouchableOpacity>
            
            <Link href="/signin" asChild>
              <TouchableOpacity style={styles.buttonSecondary}>
                <Text style={styles.buttonSecondaryText}>Sign In</Text>
              </TouchableOpacity>
            </Link>
          </View>
          
          <View style={styles.buttonGroupSubText}>
            <Text style={styles.titleSubText}>Already have an account?</Text>
            <Link href="/signin">
              <Text style={[styles.titleSubText, { textDecorationLine: 'underline' }]}>
                Sign In
              </Text>
            </Link>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
