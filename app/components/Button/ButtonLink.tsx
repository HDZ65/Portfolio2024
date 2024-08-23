// Composant client pour encapsuler la logique de navigation avec Next.js

'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import ButtonContained from './ButtonContained';
import ButtonOutlined from './ButtonOutlined';

// Fonction pour le composant client
export default function ButtonLink({ to, label, variant, icon }: { to: string, label: string, variant: 'contained' | 'outlined', icon: React.ReactNode }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(to);
  };

  return (
    variant === 'outlined' ? 
      <ButtonOutlined  onClick={handleClick} label={label} icon={icon} /> : 
      <ButtonContained  onClick={handleClick} label={label} icon={icon} />
  );
}