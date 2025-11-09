import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { Link, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../styles/_joinstyle';
import { HEROLOGOGREEN, GOOGLELOGO, FACEBOOKLOGO } from '../constants';

export default function Join() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleCreateAccount = () => {
    router.replace('/home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.iconsection}>
        <Link href="/" asChild>
          <TouchableOpacity>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
        </Link>
        <Image source={HEROLOGOGREEN} resizeMode="contain" />
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.titleTextGroup}>
        <Text style={styles.titleText}>Join Now</Text>
        <Text style={styles.subText}>Create your account to get started</Text>
      </View>

      <View style={styles.formGroup}>
        <View>
          <Text style={styles.formLabel}>Full Name</Text>
          <TextInput 
            style={styles.formControl}
            placeholder="Enter your full name"
          />
        </View>

        <View>
          <Text style={styles.formLabel}>Email</Text>
          <TextInput 
            style={styles.formControl}
            placeholder="Enter your email"
            keyboardType="email-address"
          />
        </View>

        <View>
          <Text style={styles.formLabel}>Password</Text>
          <View style={styles.formPasswordControl}>
            <TextInput 
              style={styles.passwordControl}
              placeholder="Enter your password"
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Ionicons 
                name={showPassword ? "eye-off" : "eye"} 
                size={24} 
                color="#7B7B7B" 
              />
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <Text style={styles.formLabel}>Confirm Password</Text>
          <View style={styles.formPasswordControl}>
            <TextInput 
              style={styles.passwordControl}
              placeholder="Confirm your password"
              secureTextEntry={!showConfirmPassword}
            />
            <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
              <Ionicons 
                name={showConfirmPassword ? "eye-off" : "eye"} 
                size={24} 
                color="#7B7B7B" 
              />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.primaryButton} onPress={handleCreateAccount}>
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>

        <View style={styles.dividerGroup}>
          <View style={styles.divider} />
          <Text style={styles.dividerText}>or</Text>
          <View style={styles.divider} />
        </View>

        <View style={styles.secondaryButtonGroup}>
          <TouchableOpacity style={[styles.secondaryButton, { borderColor: '#E9E9E9' }]}>
            <Image source={GOOGLELOGO} style={{ width: 24, height: 24 }} />
            <Text style={styles.secondaryButtonText}>Continue with Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.secondaryButton, { borderColor: '#E9E9E9' }]}>
            <Image source={FACEBOOKLOGO} style={{ width: 24, height: 24 }} />
            <Text style={styles.secondaryButtonText}>Continue with Facebook</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.signupgroup}>
        <Text style={styles.signupTitleText}>Already have an account? </Text>
        <Link href="/signin">
          <Text style={styles.signupSubTitleText}>Sign In</Text>
        </Link>
      </View>
    </SafeAreaView>
  );
}
