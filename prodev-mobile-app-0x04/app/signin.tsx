import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '@/styles/_joinstyle';
import { HEROLOGOGREEN, GOOGLELOGO, FACEBOOKLOGO } from '@/constants';

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

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
        <Text style={styles.titleText}>Sign In</Text>
        <Text style={styles.subText}>Welcome back! Sign in to your account</Text>
      </View>

      <View style={styles.formGroup}>
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
          <TouchableOpacity>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.buttonText}>Sign In</Text>
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
        <Text style={styles.signupTitleText}>Don&apos;t have an account? </Text>
        <Link href="/join">
          <Text style={styles.signupSubTitleText}>Join Now</Text>
        </Link>
      </View>
    </SafeAreaView>
  );
}
