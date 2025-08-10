import React, { useState } from 'react'
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native'

import ThemedCard from '@/presentation/components/shared/themed-card'
import ThemedText from '@/presentation/components/shared/themed-text'
import ThemedTextInput from '@/presentation/components/shared/themed-text-input'
import ThemedView from '@/presentation/components/shared/themed-view'

const isIOS = Platform.OS === 'ios'

export default function TextInputsScreen() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  })

  return (
    <KeyboardAvoidingView behavior={isIOS ? 'height' : undefined}>
      <ScrollView>
        <ThemedView margin>
          <ThemedCard className='mb-5'>
            <ThemedTextInput
              placeholder='Nombre Completo'
              autoCapitalize={'words'}
              autoCorrect={false}
              onChangeText={(text) => setForm({ ...form, name: text })}
            />

            <ThemedTextInput
              placeholder='Correo electrónico'
              autoCorrect={false}
              keyboardType='email-address'
              onChangeText={(text) => setForm({ ...form, email: text })}
            />

            <ThemedTextInput
              placeholder='Teléfono'
              autoCorrect={false}
              keyboardType='phone-pad'
              onChangeText={(text) => setForm({ ...form, email: text })}
            />
          </ThemedCard>

          <ThemedCard className='my-2'>
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>

          <ThemedCard className='my-2'>
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>

          <ThemedCard className='my-2'>
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>

          <ThemedCard className='my-2'>
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>

          <ThemedCard className='my-2'>
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>

          <ThemedCard className='my-2'>
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>

          <ThemedCard className='my-2'>
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>

          <ThemedCard
          // style={{
          //   marginBottom: isIOS ? 100 : 10,
          // }}
          >
            <ThemedTextInput
              placeholder='Teléfono'
              autoCorrect={false}
              keyboardType='phone-pad'
              onChangeText={(text) => setForm({ ...form, email: text })}
            />
          </ThemedCard>
        </ThemedView>

        {isIOS && <View style={{ marginBottom: 100 }} />}
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
