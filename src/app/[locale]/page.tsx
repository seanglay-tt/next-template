import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { LocaleParams } from '@/types/locale';
import React from 'react';

export default async function Home({ params }: { params: LocaleParams }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('dashboard');

  return (
    <div className="flex h-screen items-center justify-center">
      <h1>{t('hello')}</h1>
      <h1>{t('world')}</h1>
    </div>
  );
}
